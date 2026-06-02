# 公共发现与上架清单

本文件记录 ArchSight Cognition 要被公共 skill 生态发现时，项目内需要提供的稳定入口。

结论：公共发现不是单一市场自动收录。更现实的路径是同时满足三类机制：

1. 本地自动发现：宿主扫描 `SKILL.md`、`skills/`、`.agents/skills/`、`.claude/skills/` 或 extension/plugin 目录。
2. 可分发安装：通过 GitHub、npm/npx、Antigravity/agy、Gemini extension 兼容入口、Claude marketplace、`skills.sh` / `npx skills` 安装。
3. 公共检索：依赖 GitHub topics、manifest、标准目录、README 关键词、release、安装量、star 和主动提交。

## 已补充的项目内入口

| 入口 | 文件 | 目的 |
| --- | --- | --- |
| 标准 skills 目录 | `skills/` | 让 `skills.sh`、`npx skills`、Antigravity/agy、Gemini extension 和其他标准 skill 索引器直接看到任务型 `SKILL.md`。 |
| Antigravity adapter | `adapters/antigravity/README.md` | 已验证支持 Antigravity 2.0，面向 Google 新主线 Antigravity CLI（`agy`）和 Antigravity 2.x plugin 目录。 |
| Gemini extension manifest | `gemini-extension.json` | 保留 Gemini CLI extension 兼容入口和 Gallery / 第三方索引 manifest。 |
| Claude marketplace manifest | `.claude-plugin/marketplace.json` | 允许 Claude Code 用户通过 `/plugin marketplace add ArchSightLabs/archsight-cognition` 添加 marketplace。 |
| Claude plugin manifest | `.claude-plugin/plugin.json` | 描述插件元数据，并把插件 skills 指向 `./skills/`。 |
| npm metadata | `package.json` | 增加英文 description、repository、homepage、bugs 和搜索关键词。 |

## GitHub About 建议

这些内容需要在 GitHub 仓库页面右侧 About 区手动设置，不能只靠代码文件完成。

Description：

```text
认知增强 AI Skills：结构化思考、决策复盘、辩论、写作、产品、设计与工程领导，支持 Codex / Claude Code / Gemini CLI
```

Website：

```text
https://github.com/ArchSightLabs/archsight-cognition
```

Topics：

```text
agent-skills
ai-agent
cognition
claude-code
codex
gemini-cli-extension
prompt-engineering
architecture-review
critical-thinking
decision-making
structured-thinking
structured-debate
multi-perspective-review
software-architecture
product-management
product-strategy
prd
writing-review
engineering-leadership
chinese-thinking
```

以上 topics 控制为 20 个，并按当前 GitHub About 实际设置同步。`cognition` 是项目身份词；Antigravity 2.0 / agy 已验证支持，但暂不放入 topics，以免挤掉更能代表能力版图的认知和任务关键词。

## 公共安装命令

`skills.sh` / Vercel skills CLI：

```powershell
npx skills add ArchSightLabs/archsight-cognition --list
npx skills add ArchSightLabs/archsight-cognition --skill decision-review --global
```

Antigravity / agy：

```powershell
npx @archsight/cognition install antigravity --global
```

Gemini CLI extension 兼容入口：

```powershell
gemini extensions install https://github.com/ArchSightLabs/archsight-cognition
```

Gemini CLI skills 兼容入口：

```powershell
gemini skills install https://github.com/ArchSightLabs/archsight-cognition
```

Claude Code marketplace：

```text
/plugin marketplace add ArchSightLabs/archsight-cognition
/plugin install archsight-cognition@archsight
```

npm / npx：

```powershell
npx @archsight/cognition install all --global
```

## 对外搜索词

README、release、npm、GitHub topics 和 launch post 应优先覆盖这些关键词：

```text
agent skills
AI agent skills
Claude Code skills
Codex skills
Gemini CLI extension
Antigravity CLI
agy
architecture review
technical design review
structured thinking
multi-perspective review
structured debate
decision analysis
decision memo
PRD writing
research synthesis
strategy review
critical thinking
red team review
writing review
design review
product strategy
engineering leadership
Chinese thinking
software architecture
product management
```

## find-skills / skills.sh 索引请求模板

如果 `npx skills find` 搜不到本项目，可向对应社区或仓库提交索引请求：

```text
Repository: https://github.com/ArchSightLabs/archsight-cognition
Package: @archsight/cognition
License: Apache-2.0
Supported agents: Claude Code, Codex, Antigravity/agy, Gemini CLI, Cursor, Cline, OpenCode, Qoder, Trae, WorkBuddy, Hermes, OpenClaw
Canonical skill path: skills/
Install command: npx skills add ArchSightLabs/archsight-cognition --list
NPM install command: npx @archsight/cognition install all --global
Representative skills: architecture-review, structured-thinking, multi-perspective-review, structured-debate, decision-review, writing-review, design-review, product-strategy, engineering-leadership, prd-writing, research-synthesis, strategy-review, critical-thinking, chinese-thinking
Keywords: agent skills, cognitive skills, structured thinking, multi-perspective review, structured debate, decision analysis, PRD writing, research synthesis, strategy review, critical thinking, writing review, design review, product strategy, engineering leadership, Chinese thinking
```

## 发布前检查

每次发版前至少验证：

```powershell
npm run validate:skills
npx skills add . --list
```

如果本机安装了对应 CLI，再验证。注意：Google 正在把个人用户侧 Gemini CLI 迁移到 Antigravity CLI（`agy`），不同版本的 `gemini` 命令可能不再支持旧的 `extensions validate` 子命令；该失败不一定表示本项目 manifest 有问题。

```powershell
gemini extensions validate .
claude plugin validate .
```

## 参考

- Codex Agent Skills: https://developers.openai.com/codex/skills
- OpenAI skills catalog: https://github.com/openai/skills
- Claude Code plugin marketplace: https://code.claude.com/docs/en/plugin-marketplaces
- Claude Code plugin reference: https://code.claude.com/docs/en/plugins-reference
- Google transition to Antigravity CLI: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
- Gemini CLI extension releasing: https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/releasing.md
- Vercel skills CLI discovery: https://github.com/vercel-labs/skills
