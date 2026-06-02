# 公共发现与上架清单

本文件记录 ArchSight Cognition 要被公共 skill 生态发现时，项目内需要提供的稳定入口。

结论：公共发现不是单一市场自动收录。更现实的路径是同时满足三类机制：

1. 本地自动发现：宿主扫描 `SKILL.md`、`skills/`、`.agents/skills/`、`.claude/skills/` 或 extension/plugin 目录。
2. 可分发安装：通过 GitHub、npm/npx、Gemini extension、Claude marketplace、`skills.sh` / `npx skills` 安装。
3. 公共检索：依赖 GitHub topics、manifest、标准目录、README 关键词、release、安装量、star 和主动提交。

## 已补充的项目内入口

| 入口 | 文件 | 目的 |
| --- | --- | --- |
| 标准 skills 目录 | `skills/` | 让 `skills.sh`、`npx skills`、Gemini extension 和其他标准 skill 索引器直接看到任务型 `SKILL.md`。 |
| Gemini extension manifest | `gemini-extension.json` | 满足 Gemini CLI extension 安装和 Gallery 校验的根目录 manifest。 |
| Claude marketplace manifest | `.claude-plugin/marketplace.json` | 允许 Claude Code 用户通过 `/plugin marketplace add ArchSightLabs/archsight-cognition` 添加 marketplace。 |
| Claude plugin manifest | `.claude-plugin/plugin.json` | 描述插件元数据，并把插件 skills 指向 `./skills/`。 |
| npm metadata | `package.json` | 增加英文 description、repository、homepage、bugs 和搜索关键词。 |

## GitHub About 建议

这些内容需要在 GitHub 仓库页面右侧 About 区手动设置，不能只靠代码文件完成。

Description：

```text
Portable cognitive skills for AI agents: architecture review, decision analysis, PRD writing, research synthesis, strategy review, and critical thinking for Claude Code, Codex, Gemini CLI, Cursor, Cline, and more.
```

Website：

```text
https://github.com/ArchSightLabs/archsight-cognition
```

Topics：

```text
agent-skills
ai-agent
claude-code
codex
gemini-cli
gemini-cli-extension
cursor
cline
prompt-engineering
critical-thinking
decision-making
software-architecture
product-management
prd
research
markdown
npx
```

`gemini-cli-extension` 应在根目录已有 `gemini-extension.json` 后再添加。

## 公共安装命令

`skills.sh` / Vercel skills CLI：

```powershell
npx skills add ArchSightLabs/archsight-cognition --list
npx skills add ArchSightLabs/archsight-cognition --skill decision-review --global
```

Gemini CLI extension：

```powershell
gemini extensions install https://github.com/ArchSightLabs/archsight-cognition
```

Gemini CLI skills：

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
architecture review
technical design review
decision analysis
decision memo
PRD writing
research synthesis
strategy review
critical thinking
red team review
software architecture
product management
```

## find-skills / skills.sh 索引请求模板

如果 `npx skills find` 搜不到本项目，可向对应社区或仓库提交索引请求：

```text
Repository: https://github.com/ArchSightLabs/archsight-cognition
Package: @archsight/cognition
License: Apache-2.0
Supported agents: Claude Code, Codex, Gemini CLI, Cursor, Cline, OpenCode, Qoder, Trae, WorkBuddy, Antigravity, Hermes, OpenClaw
Canonical skill path: skills/
Install command: npx skills add ArchSightLabs/archsight-cognition --list
NPM install command: npx @archsight/cognition install all --global
Representative skills: architecture-review, decision-review, prd-writing, research-synthesis, strategy-review, critical-thinking
Keywords: agent skills, architecture review, decision analysis, PRD writing, research synthesis, strategy review, critical thinking
```

## 发布前检查

每次发版前至少验证：

```powershell
npm run validate:skills
npx skills add . --list
```

如果本机安装了对应 CLI，再验证：

```powershell
gemini extensions validate .
claude plugin validate .
```

## 参考

- Codex Agent Skills: https://developers.openai.com/codex/skills
- OpenAI skills catalog: https://github.com/openai/skills
- Claude Code plugin marketplace: https://code.claude.com/docs/en/plugin-marketplaces
- Claude Code plugin reference: https://code.claude.com/docs/en/plugins-reference
- Gemini CLI extension releasing: https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/releasing.md
- Vercel skills CLI discovery: https://github.com/vercel-labs/skills
