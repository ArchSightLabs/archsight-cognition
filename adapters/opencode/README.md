# OpenCode 适配说明

OpenCode 支持从 `.opencode/skills/<name>/SKILL.md` 和 `~/.config/opencode/skills/<name>/SKILL.md` 发现 agent skills。ArchSight Cognition 可以直接安装到这两个位置，作为可按需加载的认知工具库。

OpenCode 也会兼容读取 `.claude/skills/` 和 `.agents/skills/`，但本仓库建议优先使用 `.opencode/skills/`，这样来源和职责更清楚。

## 安装

### npm / npx 安装

安装到当前项目：

```powershell
npx @archsight/cognition install opencode
```

安装到个人全局 skills：

```powershell
npx @archsight/cognition install opencode --global
```

安装全部 skills：

```powershell
npx @archsight/cognition install opencode --all
```

已存在的 skill 默认不会被覆盖。需要更新时加 `--force`。

## 安装位置

| 模式 | 位置 |
| --- | --- |
| 项目级 | `.opencode/skills/<skill-name>/SKILL.md` |
| 全局 | `~/.config/opencode/skills/<skill-name>/SKILL.md` |

## 使用

OpenCode 的 skills 是按需发现和加载的，不建议把它们当作 slash command 使用。更稳的调用方式是在任务里明确指定 skill 名称：

```text
使用 cogt-think skill 判断这个问题该用哪些认知工具，并给出下一步。
```

```text
使用 cogt-decide skill 对这个方案做跨学科决策评审，输出风险、反对条件和下一步验证。
```

```text
使用 cogp-bayes skill 评估这个产品假设的证据强度和最小验证实验。
```

```text
使用 cogd-technology-humanities skill 分析这个自动化方案中的效率、判断力和责任边界冲突。
```

## 推荐路由

| 任务 | Skill |
| --- | --- |
| 不知道该用哪个工具 | `cogt-think` |
| 需求含混 | `cogp-socrates` |
| 概率、证据和不确定性 | `cogp-bayes` |
| 方案高风险 | `cogt-decide` |
| 文档质量 | `cogt-write` |
| 产品、体验、视觉、交互评审 | `cogt-design` |
| 中国组织和传播问题 | `cogp-fei-xiaotong` |
| 战略态势和低损耗行动 | `cogp-sunzi` |
| 技术与人文张力 | `cogd-technology-humanities` |

## 维护建议

- 优先安装默认精选集，避免 OpenCode skill 列表过长。
- 团队项目建议提交 `.opencode/skills/`，个人习惯建议用 `--global`。
- 这些 skills 主要提供判断框架，不需要额外放宽 OpenCode 的工具权限。

## 参考

- OpenCode Agent Skills 文档：`https://opencode.ai/docs/skills/`
