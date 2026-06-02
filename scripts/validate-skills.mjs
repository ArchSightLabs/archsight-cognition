#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = fs.realpathSync(process.cwd());
const errors = [];

function isInsideRoot(targetPath) {
  const relative = path.relative(root, targetPath);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function assertInsideRoot(targetPath) {
  if (!isInsideRoot(targetPath)) {
    throw new Error(`Path traversal detected: ${targetPath}`);
  }
}

function resolveCandidatePath(targetPath) {
  const resolved = path.resolve(targetPath);
  assertInsideRoot(resolved);
  return resolved;
}

function resolveExistingPath(targetPath) {
  const resolved = resolveCandidatePath(targetPath);
  const realPath = fs.realpathSync(resolved);
  assertInsideRoot(realPath);
  return realPath;
}

function safeExistsSync(targetPath) {
  const resolved = resolveCandidatePath(targetPath);
  try {
    const realPath = fs.realpathSync(resolved);
    assertInsideRoot(realPath);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT" || error?.code === "ENOTDIR") {
      return false;
    }
    throw error;
  }
}

function safeReadFileSync(targetPath, encoding) {
  const filePath = resolveExistingPath(targetPath);
  return fs.readFileSync(filePath, encoding);
}

function safeReaddirSync(targetPath, options) {
  const dirPath = resolveExistingPath(targetPath);
  return fs.readdirSync(dirPath, options);
}

const skillRules = [
  {
    dir: "personas",
    prefix: "cogp-",
    sections: ["角色", "适用场景", "方法", "输出契约", "交接", "护栏"],
  },
  {
    dir: "methods",
    prefix: "cogm-",
    sections: ["角色", "适用场景", "方法", "输出契约", "交接", "护栏"],
  },
  {
    dir: "teams",
    prefix: "cogt-",
    sections: ["角色", "默认团队", "路由", "外部事实边界", "方法", "输出契约", "护栏"],
  },
  {
    dir: "deliverables",
    prefix: "cogx-",
    sections: ["角色", "适用场景", "输入要求", "工具与外部事实边界", "调用工具", "方法", "输出契约", "交接", "护栏"],
  },
  {
    dir: "voices",
    prefix: "cogv-",
    sections: ["角色", "方法", "输出契约", "护栏"],
  },
  {
    dir: "debates",
    prefix: "cogd-",
    sections: ["角色", "适用场景", "推荐视角", "外部事实边界", "方法", "输出契约", "护栏"],
  },
  {
    dir: "skills",
    prefix: "",
    sections: ["When To Use", "Method", "Output", "Guardrails"],
  },
];

const templateRules = [
  {
    file: path.join("templates", "persona-skill.md"),
    sections: ["角色", "适用场景", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "交接", "护栏"],
  },
  {
    file: path.join("templates", "method-skill.md"),
    sections: ["角色", "适用场景", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "交接", "护栏"],
  },
  {
    file: path.join("templates", "team-skill.md"),
    sections: ["角色", "默认团队", "路由", "外部事实边界", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "护栏"],
  },
  {
    file: path.join("templates", "deliverable-skill.md"),
    sections: ["角色", "适用场景", "输入要求", "可选目录结构", "工具与外部事实边界", "调用工具", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "交接", "护栏"],
  },
  {
    file: path.join("templates", "voice-skill.md"),
    sections: ["角色", "适用场景", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "护栏"],
  },
  {
    file: path.join("templates", "debate-skill.md"),
    sections: ["角色", "适用场景", "推荐视角", "开场问题", "外部事实边界", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "护栏"],
  },
];

const methodReferenceFiles = [
  path.join("references", "sources.md"),
  path.join("references", "usage-notes.md"),
  path.join("references", "validation-cases.md"),
];

const ignoredDirs = new Set([".git", ".omx", "node_modules"]);

function walk(dir, predicate, files = []) {
  if (!safeExistsSync(dir)) return files;
  for (const entry of safeReaddirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, predicate, files);
    } else if (predicate(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function parseFrontmatter(raw, file) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    errors.push(`${file}: missing frontmatter`);
    return null;
  }

  const fields = Object.create(null);
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (field) {
      const key = field[1];
      if (key !== "__proto__" && key !== "constructor") {
        fields[key] = field[2].trim();
      }
    }
  }
  return fields;
}

function hasSection(raw, section) {
  return raw.split(/\r?\n/).some((line) => {
    const trimmed = line.trim();
    return trimmed.startsWith("##") && trimmed.slice(2).trim() === section;
  });
}

function assertSections(raw, file, sections) {
  for (const section of sections) {
    if (!hasSection(raw, section)) errors.push(`${file}: missing section ## ${section}`);
  }
}

function assertNoCosplay(raw, file) {
  const lines = raw.split(/\r?\n/);
  lines.forEach((line, index) => {
    const normalized = line.trim();
    if (!normalized) return;
    const explicitImpersonation =
      /你是.*本人/.test(normalized) ||
      /(扮演|冒充).*(本人|历史人物|作者)/.test(normalized) ||
      /声称.*本人/.test(normalized);
    const negated = /(不|不要|不能|不得|禁止)/.test(normalized);
    if (explicitImpersonation && !negated) {
      errors.push(`${file}:${index + 1}: possible persona cosplay instruction`);
    }
  });
}

function validateSkill(filePath, rule) {
  const file = rel(filePath);
  const raw = safeReadFileSync(filePath, "utf8");
  const frontmatter = parseFrontmatter(raw, file);
  if (frontmatter) {
    if (!frontmatter.name) errors.push(`${file}: missing name`);
    if (!frontmatter.description) errors.push(`${file}: missing description`);
    if (rule.prefix && frontmatter.name && !frontmatter.name.startsWith(rule.prefix)) {
      errors.push(`${file}: name must start with ${rule.prefix}`);
    }
  }
  assertSections(raw, file, rule.sections);
  assertNoCosplay(raw, file);
  if (rule.dir === "methods") validateMethodReferences(path.dirname(filePath), file);
  if (rule.dir === "skills") validatePublicSkillName(file, frontmatter?.name);
  validateOptionalEvals(path.dirname(filePath), file, frontmatter?.name);
}

function validatePublicSkillName(file, skillName) {
  if (!skillName) return;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skillName)) {
    errors.push(`${file}: public skill name must be kebab-case`);
  }
}

function validateMethodReferences(skillDir, file) {
  for (const reference of methodReferenceFiles) {
    const fullPath = path.join(skillDir, reference);
    if (!safeExistsSync(fullPath)) {
      errors.push(`${file}: missing method reference ${reference.replaceAll(path.sep, "/")}`);
    }
  }
}

function validateOptionalEvals(skillDir, file, skillName) {
  const evalsPath = path.join(skillDir, "evals", "evals.json");
  if (!safeExistsSync(evalsPath)) return;

  let evals;
  try {
    evals = JSON.parse(safeReadFileSync(evalsPath, "utf8"));
  } catch (error) {
    errors.push(`${rel(evalsPath)}: invalid JSON (${error.message})`);
    return;
  }

  if (evals.skill_name !== skillName) {
    errors.push(`${rel(evalsPath)}: skill_name must match ${skillName}`);
  }

  if (!Array.isArray(evals.evals) || evals.evals.length === 0) {
    errors.push(`${rel(evalsPath)}: evals must be a non-empty array`);
    return;
  }

  evals.evals.forEach((entry, index) => {
    const prefix = `${rel(evalsPath)}: evals[${index}]`;
    if (!entry.id) errors.push(`${prefix}: missing id`);
    if (!entry.prompt) errors.push(`${prefix}: missing prompt`);
    if (!entry.expected_output) errors.push(`${prefix}: missing expected_output`);
  });
}

function validateTemplate(template) {
  const fullPath = path.join(root, template.file);
  const file = rel(fullPath);
  if (!safeExistsSync(fullPath)) {
    errors.push(`${file}: missing template`);
    return;
  }
  const raw = safeReadFileSync(fullPath, "utf8");
  assertSections(raw, file, template.sections);
  assertNoCosplay(raw, file);
}

for (const rule of skillRules) {
  const base = path.join(root, rule.dir);
  const files = walk(base, (file) => path.basename(file) === "SKILL.md");
  files.forEach((file) => validateSkill(file, rule));
}

templateRules.forEach(validateTemplate);

if (errors.length > 0) {
  console.error(`Skill validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Skill validation passed.");
