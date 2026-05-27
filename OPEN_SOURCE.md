# 开源发布检查清单

ArchSight Cognition 的内容形态适合开源：它是可读、可复制、可审查的 Markdown 认知工具库，没有运行时依赖，也不包含应用代码。

正式公开前，建议补齐以下项目。

## 必须补齐

| 项目 | 状态 | 说明 |
| --- | --- | --- |
| `LICENSE` | 已补 | 使用 Apache License 2.0，覆盖本仓库的软件、Markdown skills、文档和模板。 |
| 版权归属 | 已补 | `NOTICE` 中声明版权主体为 ArchSightLabs。 |
| npm 授权字段 | 已补 | `package.json` 使用 SPDX 标识 `Apache-2.0`。 |
| `NOTICE` | 已补 | 明确允许商用、复制、修改和分发，但不授权商标、品牌背书或官方产品误导。 |
| 贡献规则 | 已补 | `CONTRIBUTING.md` 已说明新增 persona/team 的质量标准、命名规则和评审流程。 |
| 安全边界 | 已补 | `SECURITY.md` 已说明 prompt injection、事实误用、医疗/法律/金融等高风险场景的处理方式。 |
| 商标和品牌说明 | 已补 | README 已说明 `ArchSight`、`ArchSightLabs` 和 `ArchSight Cognition` 等名称仅用于标识项目来源和作者，不表示授权第三方用作衍生项目名称、品牌背书或误导性宣传。 |

## 建议补齐

| 项目 | 价值 |
| --- | --- |
| `CODE_OF_CONDUCT.md` | 如果希望接受外部贡献，能降低社区协作成本。 |
| `CHANGELOG.md` | 方便记录 persona、team 和 adapter 的变化。 |
| `docs/` | 已新增 `docs/GOVERNANCE.md`，用于说明维护者策展制、issue-first 流程和 PR 接受标准。 |
| 示例任务 | 给每个高频 team 提供 2 到 3 个真实输入和期望输出片段。 |
| 自动检查脚本 | 已新增 `npm run validate:skills`，检查 frontmatter、命名前缀、必需章节和反 cosplay 风险。 |
| GitHub 模板 | 已新增 skill proposal issue 模板和 PR 模板，用于要求失败模式、边界测试和验证逻辑。 |

## 内容质量标准

开源后，新增内容至少满足：

- 文件可被单独读取和使用。
- 有 `name` 与中文 `description` frontmatter。
- 角色不是历史人物模拟，而是学科思维工具。
- 有明确适用场景、方法、输出契约和护栏。
- 新增内容应说明失败模式、验证逻辑和边界测试。
- 输出契约能产生可执行判断，而不是泛泛评论。
- 不声称具备历史人物本人的权威、语气或意图。
- 不把隐喻、修辞或学科视角伪装成事实证明。

## Host 文档清晰度检查

当前 host 说明应让读者能回答三个问题：

1. 这个 host 应该用哪种接入方式。
2. 应该把文件放到哪里。
3. 第一次调用时应该输入什么。

已有适配文档：

- `adapters/codex/README.md`：用 `AGENTS.md` 指针加载具体工具。
- `adapters/claude-code/README.md`：复制到 `.claude/skills/<name>/SKILL.md` 后用 `/name` 调用。
- `adapters/opencode/README.md`：复制到 `.opencode/skills/<name>/SKILL.md` 后按需加载。
- `adapters/qoder/README.md`：复制到 `.qoder/skills/<name>/SKILL.md` 或 `~/.qoder/skills/<name>/SKILL.md`。
- `adapters/trae/README.md`：复制到 `.agents/skills/<name>/SKILL.md` 或 `~/.trae/skills/<name>/SKILL.md` 供 Trae skills 使用。
- `adapters/cline/README.md`：写入 `.clinerules/archsight-cognition.md` 指针并复制内容目录。
- `adapters/cursor/README.md`：写入 `.cursor/rules/archsight-cognition.mdc` 指针并复制内容目录。
- `adapters/workbuddy/README.md`：复制到 `~/.workbuddy/skills/<name>/SKILL.md` 后按需加载。
- `adapters/antigravity/README.md`：复制到 `.agents/skills/` 或 `~/.gemini/antigravity/skills/`，也可保存 workflow。
- `adapters/hermes/README.md`：作为系统侧认知工具库接入。
- `adapters/openclaw/README.md`：作为多 agent / 多频道评审面板接入。

## 推荐的发布前最小闭环

1. 跑一次结构检查：`npm run validate:skills`。
2. 用 Codex、Claude Code、Antigravity 各完成一次真实调用，确认安装路径和示例输入有效。

完成以上项目后，本仓库就具备基础开源可读性、可安装性和可贡献性。
