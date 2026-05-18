# ArchSight Cognition

ArchSight Cognition 是 ArchSightLabs 的跨学科认知工具库，面向 ArchSight AI OS、Hermes、OpenClaw、Codex、Claude Code 等系统和 agent host 提供可移植的 persona、team、debate 和 template。

它不是 ArchSight AI OS 的工程交付组件，而是可被 AI OS、Hermes、OpenClaw、Codex、Claude Code 装配使用的跨学科认知工具库。

本仓库的正确定位是：沉淀 persona、跨学科思维、team、debate、写作视角、决策视角和研究视角，让不同系统可以按任务选择合适的认知工具，而不是绑定到某一个运行时、某一种 agent 形态或某个具体应用。

## 核心原则

不要做人格 cosplay，要做学科思维工具。

- `Plato` 不是“柏拉图聊天机器人”，而是理想型、形式和现实偏差的分析工具。
- `Shakespeare` 不是“模仿莎士比亚说话”，而是戏剧冲突、人物动机和叙事张力分析工具。
- `Newton` 不是“牛顿人格”，而是力、约束、变量和系统建模视角。
- `Einstein` 不是“名人角色”，而是相对性、观察者、假设变换和尺度转换思维工具。

每个 persona、team 和 debate 都应服务真实任务：让问题更清楚，让论证更可靠，让表达更有力度，让决策更能承受现实约束。

## 能力价值

| 目标 | 典型用法 |
| --- | --- |
| 思考增强 | 用不同学科视角审查同一个问题，避免只靠工程视角下判断。 |
| 写作增强 | 用文学、历史、哲学和批评视角提升表达、叙事、论证和审美。 |
| 决策增强 | 哲学看价值，历史看周期，数学看结构，物理看约束，工程看落地。 |
| 快速装配 | 给 ArchSight AI OS、Hermes、OpenClaw、Codex、Claude Code 直接提供 persona、team、debate 和模板。 |

## 知识库地图

| 领域 | 路径 | 主要问题 |
| --- | --- | --- |
| 哲学 | `personas/philosophy/` | 价值、概念、原则、意义、矛盾、怀疑 |
| 文学 | `personas/literature/` | 叙事、人物、冲突、声音、节奏 |
| 历史 | `personas/history/` | 周期、制度、权力、路径依赖、长时段结构 |
| 数学 | `personas/mathematics/` | 定义、结构、证明、不确定性、模型 |
| 物理 | `personas/physics/` | 约束、变量、观察者、尺度、系统动态 |
| 艺术 | `personas/art/` | 构图、感知、形式、风格、一致性 |

## 目录结构

```text
archsight-cognition/
├── README.md
├── AGENTS.md
├── personas/
│   ├── README.md
│   ├── philosophy/
│   ├── literature/
│   ├── history/
│   ├── mathematics/
│   ├── physics/
│   └── art/
├── teams/
│   ├── philosophy-cavalry/
│   ├── writing-review-panel/
│   ├── historical-strategy-panel/
│   ├── scientific-reasoning-panel/
│   └── decision-council/
├── debates/
├── adapters/
│   ├── hermes/
│   ├── openclaw/
│   ├── codex/
│   └── claude-code/
└── templates/
```

## 使用方式

单个学科工具：

```text
加载 personas/physics/newton/SKILL.md。
用 Newton 作为约束与系统建模视角审查这个产品决策：
...
```

写作评审：

```text
加载 teams/writing-review-panel/SKILL.md。
从论证、叙事张力、清晰度和风格角度评审这篇文章：
...
```

决策审查：

```text
加载 teams/decision-council/SKILL.md。
对这个战略做一次跨学科决策评审：
...
```

## 运行契约

- 输出优先使用清晰中文，工具名、目录名和 persona / team name 保持英文稳定。
- 不要冒充历史人物、艺术家或科学家本人。
- 不要生成空泛评论；每次输出都要服务一个可执行判断。
- 不要默认全员上场；按任务选择 3 到 5 个视角。
- 事实性问题需要区分已知事实、推断和需要外部检索的内容。
