# Adapters

`adapters/` 说明 ArchSight Cognition 在不同 agent host 中的安装和使用方式。

| Host | 文档 | 推荐接入方式 |
| --- | --- | --- |
| Codex | `codex/README.md` | 用 `npx @archsight/cognition install codex` 安装 `.archsight-cognition/` 并写入 `AGENTS.md` 指针。 |
| Claude Code | `claude-code/README.md` | 用 `npx @archsight/cognition install claude-code` 复制到 `.claude/skills/<name>/SKILL.md` 后用 `/name` 调用。 |
| OpenCode | `opencode/README.md` | 用 `npx @archsight/cognition install opencode` 复制到 `.opencode/skills/<name>/SKILL.md`，让 OpenCode 按需加载。 |
| Qoder | `qoder/README.md` | 用 `npx @archsight/cognition install qoder` 复制到 `.qoder/skills/<name>/SKILL.md` 或 `~/.qoder/skills/<name>/SKILL.md`。 |
| Trae | `trae/README.md` | 用 `npx @archsight/cognition install trae` 复制到 `.agents/skills/<name>/SKILL.md`；`--global` 写入 `~/.trae/skills/`。 |
| Cline | `cline/README.md` | 用 `npx @archsight/cognition install cline` 写入 `.clinerules/archsight-cognition.md` 指针并复制内容目录。 |
| Cursor | `cursor/README.md` | 用 `npx @archsight/cognition install cursor` 写入 `.cursor/rules/archsight-cognition.mdc` 指针并复制内容目录。 |
| WorkBuddy | `workbuddy/README.md` | 用 `npx @archsight/cognition install workbuddy` 复制到 `~/.workbuddy/skills/<name>/SKILL.md`，让 WorkBuddy 按需加载。 |
| Antigravity | `antigravity/README.md` | 推荐用 `npx @archsight/cognition install antigravity --global` 安装到 2.x 官方 plugin 目录；检测到 1.x legacy 目录时才额外写入 legacy skills。 |
| Hermes | `hermes/README.md` | 作为系统侧 persona/method/team/voice/debate 工具库装配。 |
| OpenClaw | `openclaw/README.md` | 作为多 agent / 多频道跨学科评审面板。 |

新增 host adapter 时，请说明三件事：

1. 文件应该放在哪里。
2. 第一次调用应该输入什么。
3. 哪些权限或安全边界需要注意。
