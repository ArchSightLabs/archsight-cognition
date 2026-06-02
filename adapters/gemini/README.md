# Gemini CLI 适配说明

Gemini CLI 可以通过 extension 或 agent skills 使用 ArchSight Cognition。为了公共 Gallery 和第三方索引器能发现本项目，仓库根目录提供 `gemini-extension.json`，公共任务型 skills 放在 `skills/`。

## 安装

### 作为 Gemini extension 安装

```powershell
gemini extensions install https://github.com/ArchSightLabs/archsight-cognition
```

Gemini CLI extension 会读取根目录 `gemini-extension.json`，并发现 `skills/<name>/SKILL.md` 中的任务型入口。

### 作为 Gemini skills 安装

```powershell
gemini skills install https://github.com/ArchSightLabs/archsight-cognition
```

如果只想用通用 skills CLI，也可以安装到 Gemini 支持的 skills 目录：

```powershell
npx skills add ArchSightLabs/archsight-cognition --skill decision-review --global
```

## 推荐入口

| 任务 | Skill |
| --- | --- |
| 架构评审、技术设计评审 | `architecture-review` |
| 重要决策、取舍、风险分析 | `decision-review` |
| PRD、产品需求、研发交接 | `prd-writing` |
| 调研综合、来源质量、证据强度 | `research-synthesis` |
| 战略评审、市场进入、定位 | `strategy-review` |
| 论证、前提、证据和谬误检查 | `critical-thinking` |

## Gallery 发现

Gemini CLI Gallery 的公共发现依赖：

1. 公开 GitHub 仓库。
2. 根目录存在 `gemini-extension.json`。
3. GitHub About topics 包含 `gemini-cli-extension`。
4. 仓库发布 tag 或 release，并通过 Gallery 校验。

## 护栏

- `skills/` 是公共发现入口；完整认知工具仍在 `personas/`、`methods/`、`teams/`、`deliverables/`、`voices/` 和 `debates/`。
- 涉及当前事实、价格、政策、竞品、论文、新闻或引用时，Gemini 需要先检索或标注待验证。
- 不要一次加载全部认知工具；按任务选择一个公共 skill 或一个 `cogt-*` 综合入口。
