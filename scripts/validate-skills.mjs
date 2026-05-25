#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

const skillRules = [
  {
    dir: "personas",
    prefix: "cogp-",
    sections: ["角色", "适用场景", "方法", "输出契约", "交接", "护栏"],
  },
  {
    dir: "teams",
    prefix: "cogt-",
    sections: ["角色", "默认团队", "路由", "方法", "输出契约", "护栏"],
  },
  {
    dir: "voices",
    prefix: "cogv-",
    sections: ["角色", "方法", "输出契约", "护栏"],
  },
  {
    dir: "debates",
    prefix: "cogd-",
    sections: ["角色", "适用场景", "推荐视角", "方法", "输出契约", "护栏"],
  },
];

const templateRules = [
  {
    file: path.join("templates", "persona-skill.md"),
    sections: ["角色", "适用场景", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "交接", "护栏"],
  },
  {
    file: path.join("templates", "team-skill.md"),
    sections: ["角色", "默认团队", "路由", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "护栏"],
  },
  {
    file: path.join("templates", "voice-skill.md"),
    sections: ["角色", "适用场景", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "护栏"],
  },
  {
    file: path.join("templates", "debate-skill.md"),
    sections: ["角色", "适用场景", "推荐视角", "开场问题", "方法", "输出契约", "失败模式", "验证逻辑", "边界测试", "护栏"],
  },
];

const ignoredDirs = new Set([".git", ".omx", "node_modules"]);

function walk(dir, predicate, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
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

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (field) fields[field[1]] = field[2].trim();
  }
  return fields;
}

function hasSection(raw, section) {
  const pattern = new RegExp(`^##\\s+${escapeRegExp(section)}\\s*$`, "m");
  return pattern.test(raw);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
  const raw = fs.readFileSync(filePath, "utf8");
  const frontmatter = parseFrontmatter(raw, file);
  if (frontmatter) {
    if (!frontmatter.name) errors.push(`${file}: missing name`);
    if (!frontmatter.description) errors.push(`${file}: missing description`);
    if (frontmatter.name && !frontmatter.name.startsWith(rule.prefix)) {
      errors.push(`${file}: name must start with ${rule.prefix}`);
    }
  }
  assertSections(raw, file, rule.sections);
  assertNoCosplay(raw, file);
}

function validateTemplate(template) {
  const fullPath = path.join(root, template.file);
  const file = rel(fullPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`${file}: missing template`);
    return;
  }
  const raw = fs.readFileSync(fullPath, "utf8");
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
