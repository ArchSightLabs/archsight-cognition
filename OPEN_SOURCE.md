# 开源发布检查清单

ArchSight Cognition 的内容形态适合开源：它是可读、可复制、可审查的 Markdown 认知工具库，没有运行时依赖，也不包含应用代码。

正式公开前，建议补齐以下项目。

## 必须补齐

| 项目 | 状态 | 说明 |
| --- | --- | --- |
| `LICENSE` | 待补 | 必须由维护者选择开源协议。常见选择是 MIT、Apache-2.0 或 CC BY 4.0，但本仓库包含提示词和文档，建议明确内容授权范围。 |
| 版权归属 | 待补 | 在 README 或 LICENSE 中明确版权主体，例如 ArchSightLabs、个人作者或组织。 |
| npm 授权字段 | 待补 | `package.json` 当前不能替代正式授权。发布 npm 前应把 `license` 改成与 `LICENSE` 一致的 SPDX 标识。 |
| 贡献规则 | 已补 | `CONTRIBUTING.md` 已说明新增 persona/team 的质量标准、命名规则和评审流程。 |
| 安全边界 | 已补 | `SECURITY.md` 已说明 prompt injection、事实误用、医疗/法律/金融等高风险场景的处理方式。 |
| 商标和品牌说明 | 待补 | 明确 `ArchSight`、`ArchSightLabs` 等名称是否允许第三方在衍生项目中使用。 |

## 建议补齐

| 项目 | 价值 |
| --- | --- |
| `CODE_OF_CONDUCT.md` | 如果希望接受外部贡献，能降低社区协作成本。 |
| `CHANGELOG.md` | 方便记录 persona、team 和 adapter 的变化。 |
| `docs/` | 如果内容继续增长，可把设计原则、host adapter、质量规范拆成独立文档。 |
| 示例任务 | 给每个高频 team 提供 2 到 3 个真实输入和期望输出片段。 |
| 自动检查脚本 | 检查 frontmatter、`name` 与目录名一致、中文说明和反 cosplay 护栏。 |

## 内容质量标准

开源后，新增内容至少满足：

- 文件可被单独读取和使用。
- 有 `name` 与中文 `description` frontmatter。
- 角色不是历史人物模拟，而是学科思维工具。
- 有明确适用场景、方法、输出契约和护栏。
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
- `adapters/antigravity/README.md`：复制到 `.agents/skills/` 或 `~/.gemini/antigravity/skills/`，也可保存 workflow。
- `adapters/hermes/README.md`：作为系统侧认知工具库接入。
- `adapters/openclaw/README.md`：作为多 agent / 多频道评审面板接入。

## 推荐的发布前最小闭环

1. 选择并添加 `LICENSE`。
2. 把 `package.json` 的 `license` 字段改成与 `LICENSE` 一致的 SPDX 标识。
3. 明确版权主体和 `ArchSight` / `ArchSightLabs` 品牌使用边界。
4. 跑一次结构检查：所有 `SKILL.md` 都有 frontmatter，`name` 与目录名一致。
5. 用 Codex、Claude Code、Antigravity 各完成一次真实调用，确认安装路径和示例输入有效。

完成以上项目后，本仓库就具备基础开源可读性、可安装性和可贡献性。
