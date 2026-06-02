---
name: structured-debate
description: 结构化分歧 / Structured debate。用于长期议题、价值冲突、立场压力测试、对立观点、分歧地图和行动分叉。
---

# Structured Debate

这是 ArchSight Cognition 的公共发现入口，用于保留强分歧，而不是过早调和。内部对应 `cogd-general`、`cogd-technology`、`cogd-life`、`cogd-work`、`cogd-governance`、`cogd-knowledge`、`cogd-chinese-thought`、`cogd-tradition-modernity` 和 `cogd-technology-humanities`。

## When To Use

用户讨论长期议题、价值冲突、社会/技术/人生/组织分歧，或明确要求不要急着给单一答案时使用。

## Method

1. 识别核心张力和最强对立立场。
2. 为每个立场写出最强论据、隐含价值和失败条件。
3. 标出共同事实、争议事实、价值冲突和行动分叉。
4. 保留分歧，不强行中庸化。
5. 给出在不同立场下各自会采取的下一步。

## Output

默认使用用户的主要语言输出；中文请求使用下面的中文标题，英文请求可自然翻译为英文标题。

```text
核心张力:
主要立场:
最强论据:
共同事实:
争议事实:
价值冲突:
行动分叉:
开放问题:
```

## Guardrails

- 不要把分歧写成双方都对的空话。
- 不要用未检索事实支撑强立场。
- 涉及当前政策、新闻、市场、论文或历史事实时，必须检索或标注待验证。
