# Hermes Adapter Notes

Hermes 适合把 ArchSight Cognitive Agents 作为长期可成长 Agent 的“思维技能库”。

当前内容已经按学科分层：哲学、文学、历史、数学、物理、艺术，以及跨学科 team 面板。

## Recommended Installation Shape

把需要的 skill 复制或链接到 Hermes 本地 skills 目录，例如：

```text
.hermes/skills/decision-council/SKILL.md
.hermes/skills/philosophy/socrates/SKILL.md
.hermes/skills/physics/newton/SKILL.md
.hermes/skills/literature/shakespeare/SKILL.md
```

## Suggested Hermes Prompt

```text
Load the decision-council skill.
Use it as a cross-disciplinary thinking panel, not as historical roleplay.
For complex decisions, combine values, history, mathematical structure,
physical constraints, and practical execution.
Return concise Chinese output with: assumptions, conflicts, decision, next step.
```

## Memory Guidance

Hermes 如果启用长期记忆，建议只沉淀以下内容：

- 用户反复出现的价值冲突。
- 用户偏好的决策原则。
- 已验证有效的写作或架构判断框架。
- 对用户长期有用的学科视角组合。

不要把某次情绪化表达永久记为用户稳定偏好。
