# Hermes 适配说明

Hermes 适合把 ArchSight Cognitive Agents 作为长期可成长 Agent 的“思维技能库”。

当前内容已经按学科分层：哲学、文学、历史、数学、物理、艺术，以及跨学科 team 面板。

## 推荐安装形态

把需要的 skill 复制或链接到 Hermes 本地 skills 目录，例如：

```text
.hermes/skills/decision-council/SKILL.md
.hermes/skills/philosophy/socrates/SKILL.md
.hermes/skills/physics/newton/SKILL.md
.hermes/skills/literature/shakespeare/SKILL.md
```

## 推荐 Hermes Prompt

```text
加载 decision-council skill。
把它作为跨学科思维面板使用，而不是历史角色扮演。
面对复杂决策时，组合价值、历史、数学结构、物理约束和实践落地视角。
用简洁中文返回：假设、冲突、决策、下一步。
```

## 记忆建议

Hermes 如果启用长期记忆，建议只沉淀以下内容：

- 用户反复出现的价值冲突。
- 用户偏好的决策原则。
- 已验证有效的写作或架构判断框架。
- 对用户长期有用的学科视角组合。

不要把某次情绪化表达永久记为用户稳定偏好。
