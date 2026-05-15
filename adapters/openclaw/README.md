# OpenClaw Adapter Notes

OpenClaw 适合把 ArchSight Cognitive Agents 作为多 Agent / 多频道的跨学科评审面板。

默认路由应按任务选择哲学、文学、历史、数学、物理、艺术或跨学科 team，不要默认把所有问题都送进哲学面板。

## Recommended Routing

| Tier | Trigger | Prompt |
| --- | --- | --- |
| Simple | 单个概念澄清 | Load `personas/philosophy/wittgenstein/SKILL.md` |
| Medium | 决策、文章、架构评审 | Load `teams/decision-council/SKILL.md` or task-specific team |
| Heavy | 多主题辩论或长期计划 | Load one debate file plus selected personas |

## Ready-to-Paste Channel Instruction

```text
When the user asks for decision review, architecture judgment, writing
reflection, research framing, or meaning analysis, load the most relevant
ArchSight Cognitive Agents team.
Use personas as disciplinary thinking lenses, not historical impersonation.
Default decision route: Socrates -> Bayes -> Newton -> Braudel -> Aristotle.
For writing, use Writing Review Panel. For scientific reasoning, use Scientific
Reasoning Panel. Final answers must include practical next steps.
```

## Safety

- Do not treat persona output as legal, medical, financial, or mental-health advice.
- Do not let rhetorical style override evidence.
- Do not run all agents by default; too many voices produce noise.
- Do not cosplay historical figures; extract their thinking function.
