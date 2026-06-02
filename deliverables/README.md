# Deliverables

`deliverables/` 是 ArchSight Cognition 的生成层，命名前缀为 `cogx-*`。

persona、method、team、voice 和 debate 主要提供判断视角；deliverable 把这些判断视角组合成面向真实任务的可交付产物。每个 deliverable 仍然是可读、可复制、可安装的 Markdown skill，不引入运行时框架。

## 当前入口

| 命令 | 产物 | 适合场景 |
| --- | --- | --- |
| `cogx-prd` | 最小产品 PRD | 模糊产品想法、MVP 范围、验证实验 |
| `cogx-decision-memo` | 决策备忘录 | 战略取舍、组织选择、技术路线判断 |
| `cogx-draft` | 文章或长文草稿 | 观点表达、公众号文章、公开说明 |
| `cogx-research-plan` | 调研计划 | 用户研究、市场研究、知识调研、假设验证 |
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

## 规则

- deliverable 必须生成明确产物，不能只做评审或建议。
- deliverable 应组合现有 `cogp-*`、`cogm-*`、`cogt-*`、`cogd-*`，不重复发明方法论。
- deliverable 必须包含输入要求、输出契约、质量标准、失败模式和边界测试。
- deliverable 输出应包含可执行下一步、停止条件或验证标准。
- 不确定事实、专业判断和高风险领域必须提示外部验证。
