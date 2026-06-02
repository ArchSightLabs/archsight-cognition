---
name: decision-review
description: 决策评审 / Decision review。用于重要选择、取舍分析、风险审查、不确定性、证据强度、反对条件和下一步验证。
---

# Decision Review

这是 ArchSight Cognition 的公共发现入口，用于把重要选择转成可审查的决策判断。内部对应 `cogt-decide`、`cogm-decision-heuristics`、`cogm-critical-thinking`、`cogm-priority-triage` 和 `cogm-tail-risk`。

## When To Use

用户要在多个方案之间取舍，或要求分析不可逆性、风险、证据、不确定性、偏差、反对条件和下一步验证时使用。

## Method

1. 复述决策问题、选项和时间压力。
2. 标出不可逆性、信息缺口、责任边界和失败代价。
3. 检查证据强度、基准率、激励、偏差和尾部风险。
4. 给出推荐选择，同时写清楚什么情况会推翻推荐。
5. 把下一步压缩成最小验证动作。

## Output

默认使用用户的主要语言输出；中文请求使用下面的中文标题，英文请求可自然翻译为英文标题。

```text
决策事项:
可选方案:
不可逆性:
证据:
风险:
偏差检查:
建议:
反对条件:
下一步验证:
```

## Guardrails

- 不要为了显得中立而拒绝给出综合判断。
- 不确定时输出验证路径，而不是假装确定。
- 涉及现实公司、市场、政策、金融、法律、医疗或安全事实时，必须检索或标注待验证。
