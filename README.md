# ArchSight Cognitive Agents

ArchSight Cognitive Agents 是一套面向 Hermes / OpenClaw / Codex / Claude Code 的跨学科认知智能体库，用哲学、文学、历史、数学、物理等学科视角辅助思考、写作、决策和研究。

当前版本先收录哲学人格与哲学团队提示词。它不把哲学家做成“聊天角色扮演”，而是把他们抽象成可调用的认知工具：追问前提、分类判断、概念澄清、辩证分析、意义审视、意志挑战和体系化决策。后续可按同一结构扩展文学、历史、数学、物理等学科 agent。

## Roster

| Agent | 中文 | 主要用途 |
| --- | --- | --- |
| Socrates | 苏格拉底 | 追问前提、拆解概念、反问式澄清 |
| Aristotle | 亚里士多德 | 分类、目的论、实践理性、体系化判断 |
| Wittgenstein | 维特根斯坦 | 语言边界、概念误用、表达澄清 |
| Kant | 康德 | 原则、义务、边界条件、可普遍化检验 |
| Nietzsche | 尼采 | 价值重估、权力意志、精神强度、反从众 |
| Schopenhauer | 叔本华 | 欲望、痛苦、悲观检验、节制策略 |
| Descartes | 笛卡尔 | 怀疑、确定性、第一原理、方法论清理 |
| Hegel | 黑格尔 | 矛盾、历史进程、结构演化、辩证分析 |
| Camus | 加缪 | 荒诞、意义、个体选择、精神韧性 |

核心三人组：

- `Socrates` 负责把问题问清楚。
- `Aristotle` 负责把问题分层分类。
- `Wittgenstein` 负责检查语言和概念是否混乱。

## Layout

```text
archsight-cognitive-agents/
├── AGENTS.md
├── README.md
├── personas/
│   ├── socrates/SKILL.md
│   ├── aristotle/SKILL.md
│   ├── wittgenstein/SKILL.md
│   ├── kant/SKILL.md
│   ├── nietzsche/SKILL.md
│   ├── schopenhauer/SKILL.md
│   ├── descartes/SKILL.md
│   ├── hegel/SKILL.md
│   └── camus/SKILL.md
├── teams/
│   └── philosophy-cavalry/SKILL.md
├── debates/
│   ├── work-and-meaning.md
│   ├── ai-and-human-agency.md
│   └── architecture-and-order.md
└── adapters/
    ├── hermes/README.md
    └── openclaw/README.md
```

## Usage

单 Agent 调用：

```text
Load personas/socrates/SKILL.md.
Use Socrates to examine the hidden assumptions in this decision:
...
```

团队调用：

```text
Load teams/philosophy-cavalry/SKILL.md.
Run the Philosophy Cavalry on this architecture decision:
...
```

辩论调用：

```text
Use debates/architecture-and-order.md as the debate script.
Topic: Should this system favor strict architecture boundaries or rapid local iteration?
```

## Operating Principle

这些人格不是为了生成“像某位哲学家说话”的文学模仿，而是为了稳定地产生不同类型的判断压力。每次调用都应输出可用于写作、架构、决策或复盘的结论。
