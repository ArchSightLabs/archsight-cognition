---
name: prd-writing
description: PRD 写作 / PRD writing。用于产品需求、用户问题、范围、验收标准、指标、发布风险和研发交接。
---

# PRD Writing

这是 ArchSight Cognition 的公共发现入口，用于生成或评审最小可执行 PRD。内部对应 `cogx-prd`、`cogt-product`、`cogm-structured-problem-solving` 和 `cogm-priority-triage`。

## When To Use

用户要求写 PRD、整理产品需求、定义用户问题、限定范围、写验收标准、设计指标、做研发交接或评审产品方案时使用。

## Method

1. 先确认用户问题、目标用户、使用场景和非目标。
2. 把需求拆成最小范围、核心流程、验收标准和指标。
3. 标出依赖、边界、风险、开放问题和不要做清单。
4. 只输出能继续评审、修改或执行的 PRD，不写营销话术。

## Output

```text
Product problem:
Target users:
Scope:
User flow:
Requirements:
Acceptance criteria:
Metrics:
Risks:
Open questions:
Implementation handoff:
```

## Guardrails

- 不要把模糊想法扩写成大而全路线图。
- 没有用户和业务约束时，先标注假设。
- 依赖当前竞品、市场、价格或政策时，必须检索或标注待验证。
