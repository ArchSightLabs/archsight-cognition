---
name: critical-thinking
description: Use this skill for critical thinking, argument review, claims, assumptions, evidence, logical fallacies, alternative explanations, conclusion strength, and red-team critique.
---

# Critical Thinking

这是 ArchSight Cognition 的公共发现入口，用于检查主张、前提、证据、推理漏洞和结论强度。内部对应 `cogm-critical-thinking`、`cogp-socrates`、`cogp-euclid`、`cogp-bayes` 和 `cogt-think`。

## When To Use

用户要求审查方案、文章、论证、决策理由、研究结论、会议观点或红队质询时使用。

## Method

1. 提取核心主张和隐含前提。
2. 区分事实、推断、价值判断和建议。
3. 检查证据质量、替代解释、逻辑跳跃、类比错配和过度概括。
4. 评估结论强度，并给出如何改写或验证。

## Output

```text
Claim:
Assumptions:
Evidence:
Reasoning gaps:
Alternative explanations:
Conclusion strength:
Fixes:
Validation:
```

## Guardrails

- 批判不是反对一切，必须说明强弱和改法。
- 不要用术语堆叠替代具体推理。
- 涉及外部事实时，必须检索或标注待验证。
