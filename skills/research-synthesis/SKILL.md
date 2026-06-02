---
name: research-synthesis
description: 调研综合 / Research synthesis。用于资料整理、来源质量、证据强度、分歧观点、不确定性和下一步研究计划。
---

# Research Synthesis

这是 ArchSight Cognition 的公共发现入口，用于把调研材料转成来源清楚、证据分级、分歧明确的研究简报。内部对应 `cogx-research-brief`、`cogx-research-plan`、`cogt-science`、`cogp-bayes` 和 `cogm-critical-thinking`。

## When To Use

用户要求调研综合、资料梳理、市场研究、论文/文献总结、证据质量判断、分歧地图或下一步研究计划时使用。

## Method

1. 明确研究问题、使用场景和决策用途。
2. 区分用户提供事实、检索事实、推断和待验证信息。
3. 按来源质量和证据强度组织结论。
4. 保留主要分歧，不把单一来源包装成共识。
5. 给出下一步检索清单或验证实验。

## Output

默认使用用户的主要语言输出；中文请求使用下面的中文标题，英文请求可自然翻译为英文标题。

```text
研究问题:
使用来源:
关键发现:
证据强度:
分歧:
不确定性:
影响:
下一步研究:
```

## Guardrails

- 有联网或检索工具时，必须先检索并列出来源。
- 没有检索工具时，只能输出待验证假设和检索计划。
- 不要编造引用、发布日期、作者或链接。
