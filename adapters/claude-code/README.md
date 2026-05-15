# Claude Code Adapter Notes

Claude Code 适合把 ArchSight Cognitive Agents 作为可复制的 Markdown skill 集合，用于工程任务前后的跨学科思考。

## Suggested Usage

```text
Load personas/mathematics/bayes/SKILL.md and personas/physics/newton/SKILL.md.
Use them to identify uncertainty, constraints, and minimum validation for this implementation plan:
...
```

## Recommended Routes

| Task | Prompt |
| --- | --- |
| 需求含混 | Load `personas/philosophy/socrates/SKILL.md` |
| 论证混乱 | Load `personas/mathematics/euclid/SKILL.md` |
| 约束不明 | Load `personas/physics/newton/SKILL.md` |
| 方案高风险 | Load `teams/decision-council/SKILL.md` |
| 文档质量 | Load `teams/writing-review-panel/SKILL.md` |

## Guardrails

- 不要让 persona 输出覆盖用户明确需求。
- 不要把历史人物当作权威来源。
- 每次调用都应输出可执行判断、风险或下一步。
