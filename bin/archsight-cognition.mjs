#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");

const curatedSkills = [
  { name: "cogt-think", source: "teams/thinking-council" },
  { name: "cogt-decide", source: "teams/decision-council" },
  { name: "cogt-write", source: "teams/writing-review" },
  { name: "cogt-science", source: "teams/scientific-reasoning" },
  { name: "cogt-history", source: "teams/history-strategy" },
  { name: "cogt-philosophy", source: "teams/philosophy-cavalry" },
  { name: "cogt-design", source: "teams/design-review" },
  { name: "cogt-product", source: "teams/product" },
  { name: "cogt-lead", source: "teams/lead" },
  { name: "cogt-learn", source: "teams/learning-path" },
  { name: "cogd-general", source: "debates/general" },
  { name: "cogd-life", source: "debates/life" },
  { name: "cogd-technology", source: "debates/technology" },
  { name: "cogd-engineering", source: "debates/engineering" },
  { name: "cogd-work", source: "debates/work" },
  { name: "cogd-learning", source: "debates/learning" },
  { name: "cogd-knowledge", source: "debates/knowledge" },
  { name: "cogd-governance", source: "debates/governance" },
  { name: "cogd-chinese-thought", source: "debates/chinese-thought" },
  { name: "cogd-tradition-modernity", source: "debates/tradition-modernity" },
  { name: "cogd-technology-humanities", source: "debates/technology-humanities" },
  { name: "cogp-socrates", source: "personas/philosophy/socrates" },
  { name: "cogp-bayes", source: "personas/mathematics/bayes" },
  { name: "cogp-godel", source: "personas/mathematics/godel" },
  { name: "cogp-newton", source: "personas/physics/newton" },
  { name: "cogp-simon", source: "personas/decision/simon" },
  { name: "cogp-kahneman", source: "personas/decision/kahneman" },
  { name: "cogp-drucker", source: "personas/decision/drucker" },
  { name: "cogp-taleb", source: "personas/decision/taleb" },
  { name: "cogp-munger", source: "personas/decision/munger" },
  { name: "cogp-naval", source: "personas/decision/naval" },
  { name: "cogp-popper", source: "personas/science/popper" },
  { name: "cogp-feynman", source: "personas/science/feynman" },
  { name: "cogp-piaget", source: "personas/education/piaget" },
  { name: "cogp-vygotsky", source: "personas/education/vygotsky" },
  { name: "cogp-montessori", source: "personas/education/montessori" },
  { name: "cogp-clausewitz", source: "personas/history/clausewitz" },
  { name: "cogp-machiavelli", source: "personas/history/machiavelli" },
  { name: "cogp-orwell", source: "personas/literature/orwell" },
  { name: "cogp-confucius", source: "personas/philosophy/confucius" },
  { name: "cogp-mencius", source: "personas/philosophy/mencius" },
  { name: "cogp-laozi", source: "personas/philosophy/laozi" },
  { name: "cogp-zhuangzi", source: "personas/philosophy/zhuangzi" },
  { name: "cogp-wang-yangming", source: "personas/philosophy/wang-yangming" },
  { name: "cogp-mozi", source: "personas/philosophy/mozi" },
  { name: "cogp-hanfeizi", source: "personas/philosophy/hanfeizi" },
  { name: "cogp-xunzi", source: "personas/philosophy/xunzi" },
  { name: "cogp-sunzi", source: "personas/history/sunzi" },
  { name: "cogp-caoxueqin", source: "personas/literature/caoxueqin" },
  { name: "cogp-simaqian", source: "personas/literature/simaqian" },
  { name: "cogp-sushi", source: "personas/literature/sushi" },
  { name: "cogp-hanyu", source: "personas/literature/hanyu" },
  { name: "cogp-luxun", source: "personas/literature/luxun" },
  { name: "cogp-qian-zhongshu", source: "personas/literature/qian-zhongshu" },
  { name: "cogp-ouyang-xiu", source: "personas/literature/ouyang-xiu" },
  { name: "cogp-shannon", source: "personas/information/shannon" },
  { name: "cogp-turing", source: "personas/computation/turing" },
  { name: "cogp-darwin", source: "personas/biology/darwin" },
  { name: "cogp-weber", source: "personas/sociology/weber" },
  { name: "cogp-fei-xiaotong", source: "personas/sociology/fei-xiaotong" },
  { name: "cogp-meadows", source: "personas/systems/meadows" },
  { name: "cogp-rams", source: "personas/art/rams" },
  { name: "cogp-norman", source: "personas/art/norman" },
  { name: "cogp-vignelli", source: "personas/art/vignelli" },
  { name: "cogp-albers", source: "personas/art/albers" },
  { name: "cogp-klee", source: "personas/art/klee" },
  { name: "cogv-kant", source: "voices/philosophy/kant" },
  { name: "cogv-nietzsche", source: "voices/philosophy/nietzsche" },
  { name: "cogv-schopenhauer", source: "voices/philosophy/schopenhauer" },
  { name: "cogv-descartes", source: "voices/philosophy/descartes" },
  { name: "cogv-orwell", source: "voices/literature/orwell" },
  { name: "cogv-feynman", source: "voices/science/feynman" },
  { name: "cogv-machiavelli", source: "voices/history/machiavelli" },
  { name: "cogv-confucius", source: "voices/philosophy/confucius" },
  { name: "cogv-laozi", source: "voices/philosophy/laozi" },
  { name: "cogv-zhuangzi", source: "voices/philosophy/zhuangzi" },
  { name: "cogv-wang-yangming", source: "voices/philosophy/wang-yangming" },
  { name: "cogv-sunzi", source: "voices/history/sunzi" },
  { name: "cogv-caoxueqin", source: "voices/literature/caoxueqin" },
  { name: "cogv-simaqian", source: "voices/literature/simaqian" },
  { name: "cogv-sushi", source: "voices/literature/sushi" },
  { name: "cogv-hanyu", source: "voices/literature/hanyu" },
  { name: "cogv-luxun", source: "voices/literature/luxun" },
  { name: "cogv-qian-zhongshu", source: "voices/literature/qian-zhongshu" },
  { name: "cogv-ouyang-xiu", source: "voices/literature/ouyang-xiu" }
];

const allSkills = [
  ...findSkillDirs("teams"),
  ...findSkillDirs("personas"),
  ...findSkillDirs("voices"),
  ...findSkillDirs("debates")
];

const argv = process.argv.slice(2);
const command = argv[0];

main();

function main() {
  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command === "list") {
    listSkills();
    return;
  }

  if (command === "install") {
    install(argv.slice(1));
    return;
  }

  fail(`未知命令: ${command}`);
}

function install(args) {
  const target = args[0];

  if (!target || target === "help" || target === "--help" || target === "-h") {
    printInstallHelp();
    return;
  }

  const options = parseOptions(args.slice(1));

  if (target === "claude-code") {
    installSkills({
      host: "Claude Code",
      destination: options.global
        ? path.join(os.homedir(), ".claude", "skills")
        : path.join(options.cwd, ".claude", "skills"),
      skills: options.all ? allSkills : curatedSkills,
      force: options.force
    });
    return;
  }

  if (target === "opencode") {
    installSkills({
      host: "OpenCode",
      destination: options.global
        ? path.join(os.homedir(), ".config", "opencode", "skills")
        : path.join(options.cwd, ".opencode", "skills"),
      skills: options.all ? allSkills : curatedSkills,
      force: options.force
    });
    return;
  }

  if (target === "workbuddy") {
    installWorkBuddySkills(options, options.force);
    return;
  }

  if (target === "antigravity") {
    installAntigravitySkills(options, options.force);

    if (!options.global) {
      installAntigravityWorkflow(options.cwd, options.force);
    }
    return;
  }

  if (target === "codex") {
    installCodex(options, options.force);
    return;
  }

  if (target === "all") {
    installCodex(options, options.force);
    installSkills({
      host: "Claude Code",
      destination: options.global
        ? path.join(os.homedir(), ".claude", "skills")
        : path.join(options.cwd, ".claude", "skills"),
      skills: options.all ? allSkills : curatedSkills,
      force: options.force
    });
    installSkills({
      host: "OpenCode",
      destination: options.global
        ? path.join(os.homedir(), ".config", "opencode", "skills")
        : path.join(options.cwd, ".opencode", "skills"),
      skills: options.all ? allSkills : curatedSkills,
      force: options.force
    });
    installWorkBuddySkills(options, options.force);
    installAntigravitySkills(options, options.force);
    if (!options.global) {
      installAntigravityWorkflow(options.cwd, options.force);
    }
    return;
  }

  fail(`未知安装目标: ${target}`);
}

function parseOptions(args) {
  const options = {
    all: false,
    cwd: process.cwd(),
    force: false,
    global: false,
    workflow: false
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--all") {
      options.all = true;
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--global") {
      options.global = true;
    } else if (arg === "--workflow") {
      options.workflow = true;
    } else if (arg === "--cwd") {
      const value = args[index + 1];
      if (!value) fail("--cwd 需要一个目录路径");
      options.cwd = path.resolve(value);
      index += 1;
    } else {
      fail(`未知参数: ${arg}`);
    }
  }

  return options;
}

function installSkills({ host, destination, skills, force }) {
  fs.mkdirSync(destination, { recursive: true });
  console.log(`${host}: 安装到 ${destination}`);
  removeLegacySkills(destination);

  for (const skill of dedupeSkills(skills)) {
    const source = path.join(packageRoot, skill.source);
    const target = path.join(destination, skill.name);

    if (!fs.existsSync(path.join(source, "SKILL.md"))) {
      console.log(`- 跳过 ${skill.name}: 找不到 ${source}`);
      continue;
    }

    if (fs.existsSync(target) && !force) {
      console.log(`- 跳过 ${skill.name}: 已存在，使用 --force 覆盖`);
      continue;
    }

    fs.rmSync(target, { recursive: true, force: true });
    fs.cpSync(source, target, { recursive: true });
    console.log(`- 已安装 ${skill.name}`);
  }
}

function installCodex(options, force) {
  const codexRoot = options.global
    ? getCodexHome()
    : options.cwd;
  const contentRoot = installCodexContent(codexRoot, force, options.global);
  installCodexSkills(options, force);
  const agentsPath = path.join(codexRoot, "AGENTS.md");
  const block = buildCodexBlock(contentRoot);

  if (!fs.existsSync(agentsPath)) {
    fs.writeFileSync(agentsPath, `${block}\n`, "utf8");
    console.log(`Codex: 已创建 ${agentsPath}`);
    return;
  }

  const current = fs.readFileSync(agentsPath, "utf8");
  const pattern = /<!-- ARCHSIGHT-COGNITION:START -->[\s\S]*?<!-- ARCHSIGHT-COGNITION:END -->/;

  if (pattern.test(current)) {
    if (!force) {
      console.log(`Codex: ${agentsPath} 已包含 ArchSight Cognition 区块，使用 --force 更新`);
      return;
    }
    fs.writeFileSync(agentsPath, current.replace(pattern, block), "utf8");
    console.log(`Codex: 已更新 ${agentsPath}`);
    return;
  }

  const separator = current.endsWith("\n") ? "\n" : "\n\n";
  fs.writeFileSync(agentsPath, `${current}${separator}${block}\n`, "utf8");
  console.log(`Codex: 已追加到 ${agentsPath}`);
}

function installCodexContent(root, force, globalInstall) {
  const contentRoot = globalInstall
    ? path.join(root, "archsight-cognition")
    : path.join(root, ".archsight-cognition");
  const entries = [
    "personas",
    "teams",
    "voices",
    "debates",
    "templates",
    "adapters",
    "README.md"
  ];

  fs.mkdirSync(contentRoot, { recursive: true });

  for (const entry of entries) {
    const source = path.join(packageRoot, entry);
    const target = path.join(contentRoot, entry);

    if (!fs.existsSync(source)) continue;
    if (fs.existsSync(target) && !force) continue;

    fs.rmSync(target, { recursive: true, force: true });
    fs.cpSync(source, target, { recursive: true });
  }

  console.log(`Codex: 已安装内容到 ${contentRoot}`);
  return contentRoot;
}

function installCodexSkills(options, force) {
  installSkills({
    host: "Codex skills",
    destination: path.join(getCodexHome(), "skills"),
    skills: options.all ? allSkills : curatedSkills,
    force
  });
}

function installWorkBuddySkills(options, force) {
  installSkills({
    host: "WorkBuddy",
    destination: path.join(os.homedir(), ".workbuddy", "skills"),
    skills: options.all ? allSkills : curatedSkills,
    force
  });
}

function installAntigravitySkills(options, force) {
  const skills = options.all ? allSkills : curatedSkills;

  if (!options.global) {
    installSkills({
      host: "Antigravity",
      destination: path.join(options.cwd, ".agents", "skills"),
      skills,
      force
    });
    installAntigravityPlugin({
      destination: path.join(options.cwd, ".agents", "plugins", "archsight-cognition"),
      skills,
      force
    });
    return;
  }

  const legacySkillDirs = getAntigravityGlobalSkillDirs();
  for (const destination of legacySkillDirs) {
    installSkills({
      host: "Antigravity",
      destination,
      skills,
      force
    });
  }

  installAntigravityPlugin({
    destination: path.join(os.homedir(), ".gemini", "config", "plugins", "archsight-cognition"),
    skills,
    force
  });

  const legacyMessage = legacySkillDirs.length > 0
    ? "并兼容写入 1.x legacy skills 目录"
    : "未发现 1.x legacy 目录，跳过 legacy skills 复制";
  console.log(`Antigravity: 已安装到 2.x 官方 plugin 目录，${legacyMessage}。当前 IDE 如不扫描全局 plugin，请改用项目级 .agents/plugins。`);
}

function getAntigravityGlobalSkillDirs() {
  const geminiRoot = path.join(os.homedir(), ".gemini");
  const legacyRoot = path.join(geminiRoot, "antigravity");
  if (!fs.existsSync(legacyRoot)) return [];
  return [path.join(legacyRoot, "skills")];
}

function installAntigravityPlugin({ destination, skills, force }) {
  if (fs.existsSync(destination) && !force) {
    console.log(`Antigravity plugin: 跳过 ${destination}，已存在，使用 --force 覆盖`);
    return;
  }

  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(path.join(destination, "skills"), { recursive: true });
  fs.writeFileSync(
    path.join(destination, "plugin.json"),
    `${JSON.stringify({ name: "archsight-cognition" }, null, 2)}\n`,
    "utf8"
  );

  console.log(`Antigravity plugin: 安装到 ${destination}`);
  for (const skill of dedupeSkills(skills)) {
    const source = path.join(packageRoot, skill.source);
    const target = path.join(destination, "skills", skill.name);

    if (!fs.existsSync(path.join(source, "SKILL.md"))) {
      console.log(`- 跳过 ${skill.name}: 找不到 ${source}`);
      continue;
    }

    fs.cpSync(source, target, { recursive: true });
    console.log(`- 已安装 ${skill.name}`);
  }
}

function getCodexHome() {
  return process.env.CODEX_HOME
    ? path.resolve(process.env.CODEX_HOME)
    : path.join(os.homedir(), ".codex");
}

function installAntigravityWorkflow(cwd, force) {
  const workflowsDir = path.join(cwd, ".agents", "workflows");
  const workflowPath = path.join(workflowsDir, "decision-review.md");

  if (fs.existsSync(workflowPath) && !force) {
    console.log(`Antigravity: 跳过 workflow，已存在 ${workflowPath}`);
    return;
  }

  fs.mkdirSync(workflowsDir, { recursive: true });
  fs.writeFileSync(
    workflowPath,
    `# Decision Review

使用 ArchSight Cognition 的 \`cogt-decide\` 思路评审用户给出的决策。

输出：
- 决策重述
- 不可逆性
- 信息缺口
- 关键风险
- 反对条件
- 下一步验证

不要默认调用所有视角。按任务选择 3 到 5 个最相关视角。
`,
    "utf8"
  );
  console.log(`Antigravity: 已安装 workflow ${workflowPath}`);
}

function buildCodexBlock(contentRoot) {
  return `<!-- ARCHSIGHT-COGNITION:START -->
## ArchSight Cognition

当任务需要问题澄清、写作评审、研究设计、战略判断或跨学科决策复盘时，
从 \`${contentRoot}\` 加载最相关的认知工具。

默认路由：
- 需求和概念不清：\`personas/philosophy/socrates/SKILL.md\`
- 不确定性和证据判断：\`personas/mathematics/bayes/SKILL.md\`
- 变量、约束和系统建模：\`personas/physics/newton/SKILL.md\`
- 不知道该用哪个工具：\`teams/thinking-council/SKILL.md\`
- 高风险决策：\`teams/decision-council/SKILL.md\`
- 长期议题、立场压力测试和结构化分歧：\`debates/README.md\` 或 \`debates/<topic>/SKILL.md\`
- 文章、叙事和表达：\`teams/writing-review/SKILL.md\`
- 产品、体验、视觉和交互：\`teams/design-review/SKILL.md\`
- 产品战略、定位和最小验证：\`teams/product/SKILL.md\`
- 技术领导、研发组织和交付反馈：\`teams/lead/SKILL.md\`
- 教育、学习路径和亲子成长：\`teams/learning-path/SKILL.md\`

综合 team 工具统一使用短命令，例如 \`cogt-think\`、\`cogt-decide\`、\`cogt-write\`、\`cogt-design\`、\`cogt-product\`、\`cogt-lead\`、\`cogt-learn\`。
单个 persona 工具统一使用 \`cogp-\` 前缀，例如 \`cogp-socrates\`、\`cogp-bayes\`、\`cogp-newton\`。
风格化口吻工具统一使用 \`cogv-\` 前缀，例如 \`cogv-kant\`、\`cogv-nietzsche\`。
结构化分歧和长期议题工具统一使用 \`cogd-\` 前缀，例如 \`cogd-general\`、\`cogd-life\`、\`cogd-technology\`。

不要人格 cosplay。把 persona 当作学科思维工具，而不是历史人物模拟。
<!-- ARCHSIGHT-COGNITION:END -->`;
}

function findSkillDirs(baseDir) {
  const root = path.join(packageRoot, baseDir);
  if (!fs.existsSync(root)) return [];

  const skills = [];
  walk(root, (dir) => {
    if (fs.existsSync(path.join(dir, "SKILL.md"))) {
      skills.push({
        name: toSkillName(path.basename(dir), baseDir),
        source: path.relative(packageRoot, dir).replaceAll(path.sep, "/")
      });
    }
  });
  return skills;
}

function walk(dir, visit) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const fullPath = path.join(dir, entry.name);
    visit(fullPath);
    walk(fullPath, visit);
  }
}

function toSkillName(name, baseDir) {
  if (baseDir === "debates") {
    const aliases = {
      "general": "cogd-general",
      "life": "cogd-life",
      "technology": "cogd-technology",
      "engineering": "cogd-engineering",
      "work": "cogd-work",
      "learning": "cogd-learning",
      "knowledge": "cogd-knowledge",
      "governance": "cogd-governance",
      "chinese-thought": "cogd-chinese-thought",
      "tradition-modernity": "cogd-tradition-modernity",
      "technology-humanities": "cogd-technology-humanities"
    };

    if (aliases[name]) return aliases[name];
    return name.startsWith("cogd-") ? name : `cogd-${name}`;
  }

  if (baseDir === "voices") {
    return name.startsWith("cogv-") ? name : `cogv-${name}`;
  }

  if (baseDir === "personas") {
    return name.startsWith("cogp-") ? name : `cogp-${name}`;
  }

  const aliases = {
    "decision-council": "cogt-decide",
    "design-review": "cogt-design",
    "history-strategy": "cogt-history",
    "learning-path": "cogt-learn",
    "philosophy-cavalry": "cogt-philosophy",
    "scientific-reasoning": "cogt-science",
    "thinking-council": "cogt-think",
    "writing-review": "cogt-write"
  };

  if (aliases[name]) return aliases[name];
  return name.startsWith("cogt-") ? name : `cogt-${name}`;
}

function removeLegacySkills(destination) {
  for (const skillName of legacySkillNames()) {
    const target = path.join(destination, skillName);
    if (!fs.existsSync(target)) continue;

    fs.rmSync(target, { recursive: true, force: true });
    console.log(`- 已删除旧 skill ${skillName}`);
  }
}

function legacySkillNames() {
  return [
    ...legacyPersonaSkillNames(),
    "cog-think",
    "cog-decide",
    "cog-write",
    "cog-science",
    "cog-history",
    "cog-philosophy",
    "cog-design",
    "cog-learn",
    "cog-decision-council",
    "cog-history-strategy",
    "cog-philosophy-cavalry",
    "cog-scientific-reasoning",
    "cog-thinking-council",
    "cog-writing-review"
  ];
}

function legacyPersonaSkillNames() {
  return findSkillDirsWithName("personas", legacyPersonaSkillName).map((skill) => skill.name);
}

function legacyPersonaSkillName(name) {
  return name.startsWith("cog-") ? name : `cog-${name}`;
}

function findSkillDirsWithName(baseDir, nameForDir) {
  const root = path.join(packageRoot, baseDir);
  if (!fs.existsSync(root)) return [];

  const skills = [];
  walk(root, (dir) => {
    if (fs.existsSync(path.join(dir, "SKILL.md"))) {
      skills.push({
        name: nameForDir(path.basename(dir)),
        source: path.relative(packageRoot, dir).replaceAll(path.sep, "/")
      });
    }
  });
  return skills;
}

function dedupeSkills(skills) {
  const seen = new Set();
  return skills.filter((skill) => {
    if (seen.has(skill.name)) return false;
    seen.add(skill.name);
    return true;
  });
}

function listSkills() {
  console.log("Curated skills:");
  for (const skill of curatedSkills) {
    console.log(`- ${skill.name}: ${skill.source}/SKILL.md`);
  }

  console.log("\nAll packaged skills:");
  for (const skill of dedupeSkills(allSkills)) {
    console.log(`- ${skill.name}: ${skill.source}/SKILL.md`);
  }
}

function printHelp() {
  console.log(`ArchSight Cognition

用法:
  archsight-cognition install <target> [options]
  archsight-cognition list

安装目标:
  codex          安装内容目录、注册 Codex skills，并写入项目或全局 AGENTS.md 指针
  claude-code    安装 skills 到 .claude/skills 或 ~/.claude/skills
  opencode       安装 skills 到 .opencode/skills 或 ~/.config/opencode/skills
  workbuddy      安装 skills 到 ~/.workbuddy/skills
  antigravity    安装 skills 到 .agents/skills 或 Antigravity 全局 skills 目录
  all            安装 codex、claude-code、opencode、workbuddy 和 antigravity；--global 时安装到各自全局目录

常用示例:
  npx @archsight/cognition install codex
  npx @archsight/cognition install claude-code
  npx @archsight/cognition install opencode
  npx @archsight/cognition install workbuddy
  npx @archsight/cognition install antigravity --global
  npx @archsight/cognition install all --global
`);
}

function printInstallHelp() {
  console.log(`安装用法:
  archsight-cognition install codex [--cwd <path>] [--global] [--all] [--force]
  archsight-cognition install claude-code [--cwd <path>] [--global] [--all] [--force]
  archsight-cognition install opencode [--cwd <path>] [--global] [--all] [--force]
  archsight-cognition install workbuddy [--all] [--force]
  archsight-cognition install antigravity [--cwd <path>] [--global] [--all] [--force]
  archsight-cognition install all [--cwd <path>] [--global] [--all] [--force]

说明:
  codex 会把 skills 注册到 CODEX_HOME/skills；未设置 CODEX_HOME 时使用 ~/.codex/skills。
  codex --global 会写入 CODEX_HOME/AGENTS.md；未设置 CODEX_HOME 时使用 ~/.codex/AGENTS.md。
  codex 非全局安装会写入目标项目 AGENTS.md，并把内容复制到 .archsight-cognition/。
  opencode 会把 skills 写入 .opencode/skills；--global 时写入 ~/.config/opencode/skills。
  workbuddy 会把 skills 写入 ~/.workbuddy/skills。
  antigravity --global 会写入 2.x plugin 目录 ~/.gemini/config/plugins/archsight-cognition；仅当 ~/.gemini/antigravity 已存在时，额外写入 1.x legacy skills 目录。
  antigravity 非全局安装会同时写入 .agents/skills、.agents/plugins/archsight-cognition，并创建 .agents/workflows/decision-review.md。
`);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
