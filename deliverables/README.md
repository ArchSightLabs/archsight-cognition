# Deliverables

`deliverables/` 是 ArchSight Cognition 的生成层，命名前缀为 `cogx-*`。

persona、method、team、voice 和 debate 主要提供判断视角；deliverable 把这些判断视角组合成面向真实任务的可交付产物。每个 deliverable 仍然是可读、可复制、可安装的 Markdown skill，不引入运行时框架。

## 能力边界

- `SKILL.md` 本身不提供联网、数据库、代码执行或文件访问能力；这些能力由 Codex、Claude Code、OpenCode 等宿主 agent 决定。
- deliverable 可以要求模型使用宿主提供的工具，但不能保证所有宿主都支持同样的工具。
- 当任务依赖当前事实、竞品、市场、政策、论文、版本、价格、新闻或引用时，有检索工具就必须先检索并标注来源；没有检索工具就只能输出待验证假设和检索清单。
- `cogx-research-plan` 定位为调研计划生成器；`cogx-research-brief` 定位为 tool-assisted 调研简报，要求在宿主支持检索时先检索再输出。

## 当前入口

| 命令 | 产物 | 适合场景 |
| --- | --- | --- |
| `cogx-prd` | 最小产品 PRD | 模糊产品想法、MVP 范围、验证实验 |
| `cogx-decision-memo` | 决策备忘录 | 战略取舍、组织选择、技术路线判断 |
| `cogx-draft` | 文章或长文草稿 | 观点表达、公众号文章、公开说明 |
| `cogx-research-plan` | 调研计划 | 用户研究、市场研究、知识调研、假设验证 |
| `cogx-research-brief` | 带来源的调研简报 | 竞品扫描、生态调研、技术/市场资料核验 |
| `cogx-retro` | 团队复盘与行动清单 | 项目复盘、事故后复盘、协作问题复盘 |
| `cogx-strategy-brief` | 战略简报 | 产品方向、市场进入、组织策略、技术战略 |

## 使用方式

```text
/cogx-prd
我们想做一个给远程研发团队用的 AI 复盘工具，请生成一版最小 PRD。
```

```text
/cogx-decision-memo
我们在纠结要不要重写老系统，请生成一份决策备忘录。
```

```text
/cogx-draft
我想写一篇关于 AI 编程助手改变工程师判断力的文章，帮我生成草稿。
```

```text
/cogx-research-brief
调研 Agent Skills 生态，判断 ArchSight Cognition 下一步应该补脚本、eval 还是市场分发。
```

## 推荐目录结构

```text
deliverables/<name>/
├── SKILL.md
├── examples/
├── evals/
├── references/
├── scripts/
└── assets/
```

- `examples/` 放真实输入和期望输出形态。
- `evals/` 放可回归测试用例，优先覆盖高频任务和失败边界。
- `references/` 放按需加载的来源、标准、格式或质量准则。
- `scripts/` 只在需要稳定解析、校验、生成或自动化时加入；脚本必须非交互式并提供清楚的帮助信息。
- `assets/` 放模板、样式、表格或其他产物资源。

## 规则

- deliverable 必须生成明确产物，不能只做评审或建议。
- deliverable 应组合现有 `cogp-*`、`cogm-*`、`cogt-*`、`cogd-*`，不重复发明方法论。
- deliverable 必须包含输入要求、输出契约、质量标准、失败模式和边界测试。
- deliverable 输出应包含可执行下一步、停止条件或验证标准。
- 高频 deliverable 应提供 `examples/` 和 `evals/`，用于持续检查 skill 是否真的改善输出。
- 不确定事实、专业判断和高风险领域必须提示外部验证。
- 不要在宿主没有相关工具时声称已经联网检索、读取文件或完成外部核验。
