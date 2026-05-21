# Adapters

`adapters/` 说明 ArchSight Cognition 在不同 agent host 中的安装和使用方式。

| Host | 文档 | 推荐接入方式 |
| --- | --- | --- |
| Codex | `codex/README.md` | 用 `npx @archsight/cognition install codex` 安装 `.archsight-cognition/` 并写入 `AGENTS.md` 指针。 |
| Claude Code | `claude-code/README.md` | 用 `npx @archsight/cognition install claude-code` 复制到 `.claude/skills/<name>/SKILL.md` 后用 `/name` 调用。 |
| Antigravity | `antigravity/README.md` | 用 `npx @archsight/cognition install antigravity --workflow` 复制到 `.agents/skills/`，也可保存 workflow。 |
| Hermes | `hermes/README.md` | 作为系统侧 persona/team/voice/debate 工具库装配。 |
| OpenClaw | `openclaw/README.md` | 作为多 agent / 多频道跨学科评审面板。 |

新增 host adapter 时，请说明三件事：

1. 文件应该放在哪里。
2. 第一次调用应该输入什么。
3. 哪些权限或安全边界需要注意。
