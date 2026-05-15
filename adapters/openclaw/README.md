# OpenClaw Adapter Notes

OpenClaw 适合把 ArchSight Cognitive Agents 作为多 Agent / 多频道的跨学科评审面板。

当前内容以哲学人格为第一组认知工具，因此默认路由仍以 Philosophy Cavalry 为主。

## Recommended Routing

| Tier | Trigger | Prompt |
| --- | --- | --- |
| Simple | 单个概念澄清 | Load `personas/wittgenstein/SKILL.md` |
| Medium | 决策、文章、架构评审 | Load `teams/philosophy-cavalry/SKILL.md` |
| Heavy | 多主题辩论或长期计划 | Load one debate file plus selected personas |

## Ready-to-Paste Channel Instruction

```text
When the user asks for philosophical review, decision review, architecture
judgment, writing reflection, or meaning analysis, load the Philosophy Cavalry.
Use personas as thinking lenses, not historical impersonation.
Default route: Socrates -> Wittgenstein -> Aristotle.
Add Kant, Nietzsche, Schopenhauer, Descartes, Hegel, or Camus only when their
specific pressure is useful.
Final answers must include practical next steps.
```

## Safety

- Do not treat persona output as legal, medical, financial, or mental-health advice.
- Do not let rhetorical style override evidence.
- Do not run all agents by default; too many voices produce noise.
