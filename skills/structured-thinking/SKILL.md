---
name: structured-thinking
description: 结构化思考 / Structured thinking。用于问题澄清、概念边界、认知路由、信息缺口、下一步判断和先想清楚再行动。
---

# Structured Thinking

这是 ArchSight Cognition 的公共发现入口，用于把尚未成型的问题先转成清楚的问题、边界和下一步。内部对应 `cogt-think`、`cogp-socrates`、`cogp-bayes`、`cogp-newton`、`cogm-auto` 和 `cogm-structured-problem-solving`。

## When To Use

用户还没说清目标、概念混乱、边界不明、不知道该用哪个认知工具，或需要先判断问题类型再行动时使用。

## Method

1. 先复述用户真正要解决的问题。
2. 拆出目标、边界、概念、约束和信息缺口。
3. 判断任务更像决策、写作、研究、产品、设计、工程、学习还是结构化分歧。
4. 选择 1 到 3 个内部工具作为下一步，不默认全员上场。
5. 给出最小下一步，而不是直接扩写成完整方案。

## Output

默认使用用户的主要语言输出；中文请求使用下面的中文标题，英文请求可自然翻译为英文标题。

```text
问题复述:
目标:
边界:
关键概念:
信息缺口:
推荐内部工具:
下一步:
```

## Guardrails

- 不要把问题还没澄清时的猜测写成结论。
- 不要堆叠所有 persona 或 method。
- 涉及当前事实时，必须检索或标注待验证。
