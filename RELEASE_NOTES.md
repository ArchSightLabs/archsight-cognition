# ArchSight Cognition 发布说明

## v1.0.2

发布日期：2026-05-22

- Antigravity workspace 安装现在默认创建 `.agents/workflows/decision-review.md`，不再需要额外传 `--workflow`；该参数仅保留兼容旧命令。
- 新增 Antigravity plugin 安装结构：workspace 写入 `.agents/plugins/archsight-cognition/`，global 写入 `~/.gemini/config/plugins/archsight-cognition/`。
- 全局安装不再复制到 `antigravity-cli/skills` 或 `antigravity-ide/skills`；Antigravity 2.x 统一走 plugin 目录。
- 仅当 `~/.gemini/antigravity/` 已存在时，额外写入 `~/.gemini/antigravity/skills/`，用于兼容 Antigravity 1.x legacy 环境。
- 文档推荐顺序调整为优先全局安装，workspace 安装只作为 Antigravity IDE 不识别全局安装时的 fallback。

## v1.0.1

发布日期：2026-05-22

这是 ArchSight Cognition 的首个公开版本。这个版本把项目从一组分散的认知 prompt，整理成一个可以通过 npm 分发、可以安装到多个 agent host、并且有清晰命名规则的 Markdown skill 工具库。

## 这个版本解决什么问题

很多 AI agent 已经能执行任务，但在复杂问题上仍然容易出现三个问题：

- 没有先澄清概念和边界，就直接给答案。
- 把写作、决策、研究和产品评审都压成同一种通用思路。
- 用“角色扮演”替代真实的学科判断，输出看起来有风格，但很难审查和复用。

ArchSight Cognition v1.0.1 的目标，是提供一套可复制、可审查、可组合的思维工具，让 agent 在回答前先选择合适的判断框架。

## 核心内容

- `personas/`：单一学科视角，例如哲学、文学、历史、数学、物理、系统、信息、计算、演化、社会制度、教育、科学和艺术设计。
- `teams/`：多视角综合工具，例如思考分流、决策评审、写作评审、设计评审、历史战略、科学推理和学习路径。
- `voices/`：明确标注的风格化表达工具，只处理口吻，不声称历史人物本人在说话。
- `debates/`：结构化分歧工具，用于保留长期议题中的立场张力和反对条件。
- `templates/`：新增 persona、team、voice 和 debate 的标准模板。
- `adapters/`：Codex、Claude Code、Antigravity、Hermes 和 OpenClaw 的接入说明。

## 安装与分发

本版本提供 npm CLI：

```powershell
npx @archsight/cognition install codex
npx @archsight/cognition install claude-code
npx @archsight/cognition install antigravity --workflow
```

也支持全局安装：

```powershell
npm install -g @archsight/cognition
archsight-cognition install codex --global
```

CLI 的重点不是提供运行时框架，而是把 Markdown skills 安装到不同 agent host 可识别的位置。

## 命名规则

本版本统一了短命令前缀，便于 slash command 过滤和跨 host 注册：

- `cogt-*`：team 工具，例如 `cogt-think`、`cogt-decide`、`cogt-write`、`cogt-design`。
- `cogp-*`：persona 工具，例如 `cogp-socrates`、`cogp-bayes`、`cogp-newton`。
- `cogv-*`：voice 工具，例如 `cogv-kant`、`cogv-nietzsche`。
- `cogd-*`：debate 工具，例如 `cogd-general`、`cogd-life`、`cogd-technology`。

## 重要边界

- ArchSight Cognition 不是 agent runtime，不负责调度、记忆、工具调用、权限管理或服务进程。
- 它不是事实权威库。事实性问题仍然需要检索、引用和验证。
- 它不是名人模拟器。persona 是学科思维工具，voice 只是明确标注的表达风格。
- 本版本使用 MIT License 发布；正式对外复用时仍建议明确品牌和商标资产规则。

## 推荐升级方式

如果已经安装过旧版命名的 skills，建议使用 `--force` 更新：

```powershell
npx @archsight/cognition install codex --force
npx @archsight/cognition install claude-code --force
npx @archsight/cognition install antigravity --force
```

如果希望安装全部 skills，而不是默认精选集：

```powershell
npx @archsight/cognition install codex --all --force
```

## 已知限制

- 当前版本主要分发 Markdown skills 和安装器，没有独立测试框架或远程服务。
- 品牌和商标资产规则仍需单独明确。
- 各 agent host 对 skill、workflow 和 slash command 的支持能力不同，实际体验会随 host 变化。
