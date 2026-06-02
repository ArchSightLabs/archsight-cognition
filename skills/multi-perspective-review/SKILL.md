---
name: multi-perspective-review
description: 多视角评审 / Multi-perspective review。用于跨学科 team panel、综合判断、盲点识别、冲突整理和可执行建议。
---

# Multi-Perspective Review

这是 ArchSight Cognition 的公共发现入口，用于把一个复杂方案交给多个学科视角进行综合评审。内部对应 `cogt-think`、`cogt-decide`、`cogt-product`、`cogt-design`、`cogt-lead`、`cogt-write` 和相关 `cogp-*`。

## When To Use

用户要求“多角度看看”“跨学科评审”“找盲点”“帮我综合判断”“不要只从工程/商业/情绪一个角度看”时使用。

## Method

1. 明确被评审对象和评审目标。
2. 根据任务选择 3 到 5 个最相关视角。
3. 每个视角只给一个关键判断。
4. 主持人整合共识、冲突、盲点和风险。
5. 输出行动建议和反对条件。

## Output

默认使用用户的主要语言输出；中文请求使用下面的中文标题，英文请求可自然翻译为英文标题。

```text
评审对象:
选用视角:
分视角判断:
共识:
分歧:
盲点:
建议:
下一步验证:
```

## Guardrails

- 不要把多视角输出堆成观点列表。
- 主持人必须综合判断。
- 不确定时给验证路径，而不是假装确定。
