---
name: architecture-review
description: 架构评审 / Architecture review。用于技术方案审查、系统边界、取舍、可扩展性、可靠性、可维护性、技术债和长期演化判断。
---

# Architecture Review

这是 ArchSight Cognition 的公共发现入口，用于把架构评审任务转成可执行判断。内部对应视角包括 `cogp-newton`、`cogp-bayes`、`cogm-first-principles`、`cogm-tail-risk`、`cogt-design` 和 `cogt-lead`。

## When To Use

用户要求评审系统设计、服务拆分、技术选型、接口边界、数据归属、可扩展性、可靠性、可维护性、安全边界、技术债或长期演化成本时使用。

## Method

1. 先用一句话复述架构目标和约束。
2. 标出系统边界、数据所有权、依赖方向和团队所有权。
3. 检查耦合、复杂度、故障模式、迁移成本、安全边界和可观测性。
4. 区分必须现在解决的问题、可以延后验证的问题和不应做的过度设计。
5. 给出推荐方案、反对条件和下一步验证。

## Output

```text
Architecture goal:
Key constraints:
Boundary review:
Trade-offs:
Risks:
Technical debt:
Decision recommendation:
Rejection conditions:
Next validation:
```

## Guardrails

- 不要把偏好包装成架构原则。
- 不要默认要求重写或引入新框架。
- 涉及当前库版本、云服务价格、安全公告或竞品事实时，必须检索或标注待验证。
