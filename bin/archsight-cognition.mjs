#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");

const curatedSkills = [
  { name: "cog-decision-council", source: "teams/decision-council" },
  { name: "cog-writing-review", source: "teams/writing-review" },
  { name: "cog-scientific-reasoning", source: "teams/scientific-reasoning" },
  { name: "cog-socrates", source: "personas/philosophy/socrates" },
  { name: "cog-bayes", source: "personas/mathematics/bayes" },
  { name: "cog-newton", source: "personas/physics/newton" }
];

const allSkills = [
  ...findSkillDirs("teams"),
  ...findSkillDirs("personas")
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
  const options = parseOptions(args.slice(1));

  if (!target || target === "help") {
    printInstallHelp();
    return;
  }

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

  if (target === "antigravity") {
    installSkills({
      host: "Antigravity",
      destination: options.global
        ? path.join(os.homedir(), ".gemini", "antigravity", "skills")
        : path.join(options.cwd, ".agents", "skills"),
      skills: options.all ? allSkills : curatedSkills,
      force: options.force
    });

    if (!options.global && options.workflow) {
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
      host: "Antigravity",
      destination: options.global
        ? path.join(os.homedir(), ".gemini", "antigravity", "skills")
        : path.join(options.cwd, ".agents", "skills"),
      skills: options.all ? allSkills : curatedSkills,
      force: options.force
    });
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

使用 ArchSight Cognition 的 \`cog-decision-council\` 思路评审用户给出的决策。

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
- 高风险决策：\`teams/decision-council/SKILL.md\`
- 文章、叙事和表达：\`teams/writing-review/SKILL.md\`

对外 skill 调用名统一使用 \`cog-\` 前缀，例如 \`cog-socrates\`、\`cog-bayes\`、\`cog-newton\`、\`cog-decision-council\`。

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
        name: toSkillName(path.basename(dir)),
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

function toSkillName(name) {
  const aliases = {
    "history-strategy": "cog-history-strategy",
    "scientific-reasoning": "cog-scientific-reasoning",
    "writing-review": "cog-writing-review"
  };

  if (aliases[name]) return aliases[name];
  return name.startsWith("cog-") ? name : `cog-${name}`;
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
  codex          安装内容目录，并写入项目或全局 AGENTS.md 指针
  claude-code    安装 skills 到 .claude/skills 或 ~/.claude/skills
  antigravity    安装 skills 到 .agents/skills 或 ~/.gemini/antigravity/skills
  all            安装 codex、claude-code 和 antigravity；--global 时安装到各自全局目录

常用示例:
  npx @archsight/cognition install codex
  npx @archsight/cognition install claude-code
  npx @archsight/cognition install antigravity --workflow
  npx @archsight/cognition install antigravity --global
  npx @archsight/cognition install claude-code --all --force
`);
}

function printInstallHelp() {
  console.log(`安装用法:
  archsight-cognition install codex [--cwd <path>] [--global] [--force]
  archsight-cognition install claude-code [--cwd <path>] [--global] [--all] [--force]
  archsight-cognition install antigravity [--cwd <path>] [--global] [--all] [--force] [--workflow]
  archsight-cognition install all [--cwd <path>] [--global] [--all] [--force]

说明:
  codex --global 会写入 CODEX_HOME/AGENTS.md；未设置 CODEX_HOME 时使用 ~/.codex/AGENTS.md。
  codex 非全局安装会写入目标项目 AGENTS.md，并把内容复制到 .archsight-cognition/。
`);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
