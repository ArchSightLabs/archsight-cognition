# Hermes Adapter Notes

Hermes 适合把 ArchSight Cognitive Agents 作为长期可成长 Agent 的“思维技能库”。

当前内容以哲学人格为第一组认知工具，后续可用同样安装形态接入文学、历史、数学、物理等学科 agent。

## Recommended Installation Shape

把需要的 skill 复制或链接到 Hermes 本地 skills 目录，例如：

```text
.hermes/skills/philosophy-cavalry/SKILL.md
.hermes/skills/socrates/SKILL.md
.hermes/skills/aristotle/SKILL.md
.hermes/skills/wittgenstein/SKILL.md
```

## Suggested Hermes Prompt

```text
Load the philosophy-cavalry skill.
Use it as a thinking review panel, not as historical roleplay.
For every complex decision, run Socrates -> Wittgenstein -> Aristotle first,
then add no more than two specialist agents.
Return concise Chinese output with: assumptions, conflicts, decision, next step.
```

## Memory Guidance

Hermes 如果启用长期记忆，建议只沉淀以下内容：

- 用户反复出现的价值冲突。
- 用户偏好的决策原则。
- 已验证有效的写作或架构判断框架。

不要把某次情绪化表达永久记为用户稳定偏好。
