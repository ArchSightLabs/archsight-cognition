---
name: design-review
description: 设计评审 / Design review。用于产品体验、视觉、交互、用户目标、信息架构、界面层级、交互风险和可执行改进。
---

# Design Review

这是 ArchSight Cognition 的公共发现入口，用于评审产品体验、界面、视觉和交互。内部对应 `cogt-design`、`cogp-rams`、`cogp-vignelli`、`cogp-albers`、`cogm-human-centered-interaction` 和 `cogt-product`。

## When To Use

用户要求评审 UI、UX、视觉层级、信息架构、交互模型、产品体验或设计系统一致性时使用。

## Method

1. 明确用户目标、关键任务和上下文。
2. 检查信息架构、视觉层级、交互反馈、错误恢复和状态表达。
3. 识别可用性风险、认知负担和系统不一致。
4. 给出优先级明确的改进建议。

## Output

默认使用用户的主要语言输出；中文请求使用下面的中文标题，英文请求可自然翻译为英文标题。

```text
用户目标:
主流程:
信息架构:
交互风险:
视觉层级:
系统一致性:
建议修改:
```

## Guardrails

- 不要只谈审美，不谈任务。
- 不要用装饰替代可用性。
- 视觉事实依赖截图或实际界面时，应先查看材料。
