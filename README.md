# ArchSight Cognition

ArchSight Cognition 是一个给 AI agent 使用的跨学科思维工具包。

它把哲学、文学、历史、数学、物理、艺术、系统科学和决策科学中的思维方法，整理成可复制、可审查、可组合的 Markdown `SKILL.md`。Codex、Claude Code、OpenCode、Antigravity、Hermes、OpenClaw 等 agent host 可以直接加载这些文件，用它们来澄清问题、评审写作、设计研究、审查战略、压力测试决策，或生成更有辨识度的表达。

一句话定位：

> ArchSight Cognition 不是运行时框架，也不是历史人物角色扮演库，而是一组可复制、可审查、可组合的学科思维工具。

## 项目定位

ArchSight Cognition 可以放在 agent 工作流的“判断层”：它发生在写代码、改文章、做设计或给结论之前，用来决定该从什么视角看问题、应该输出什么结构、哪些结论还不能直接下。

它最适合这些位置：

- 作为 Codex、Claude Code、OpenCode、Antigravity 等 agent host 的本地 skills 内容包。
- 作为团队沉淀 prompt / skill 的可审查模板，而不是散落在聊天记录里的临时提示词。
- 作为写作、产品、研究、教育、组织和战略判断的认知路由层。
- 作为可被不同项目、不同团队和不同 agent host 组合使用的通用思维工具库。

## 更直白地说

多数 agent 工具关注“怎么执行任务”。ArchSight Cognition 关注“用什么思维方式看这个任务”。

当你把一个复杂问题交给 AI 时，可以不只让它“直接回答”，而是让它加载一个合适的认知工具：

- 概念不清时，加载 `cogp-socrates`，先拆概念、边界和矛盾。
- 决策风险高时，加载 `cogt-decide`，从价值、证据、约束、历史和执行风险审查方案。
- 文案像 AI 套话时，加载 `cogt-write`，检查论证、叙事、清晰度、节奏和表达诚实性。
- 产品体验需要评审时，加载 `cogt-design`，从可用性、交互模型、版式、色彩和系统一致性给反馈。
- 议题本身有强分歧时，加载 `cogd-*`，保留不同立场的张力，而不是急着调和。

你可以把它理解成一套“思维镜头”：每个 persona 是一个学科视角，team 是多个视角的组合，voice 只负责明确标注的表达风格，debate 用来保留结构化分歧。

## 适合谁

- 想让 Codex、Claude Code、OpenCode 或其他 agent 在规划、写作和决策时更有判断力的人。
- 需要把一组稳定 prompt / skill 复制到多个项目、多个 agent host 中复用的团队。
- 想用跨学科视角审查产品、工程、研究、战略、教育或表达问题的创作者和工程师。
- 不想要“名人角色扮演”，而是想要可审查、可维护、可落地的思维工具库的人。

## 什么时候用

| 场景 | 推荐入口 | 结果 |
| --- | --- | --- |
| 不知道问题到底是什么 | `cogt-think` 或 `cogp-socrates` | 澄清目标、概念、边界和关键矛盾 |
| 要做重要选择 | `cogt-decide` | 输出风险、反对条件、信息缺口和下一步验证 |
| 要改文章、文案或叙事 | `cogt-write` | 找出空话、结构问题、论证漏洞和更清楚的改法 |
| 要评审产品、体验或视觉 | `cogt-design` | 审查可用性、交互模型、版式、色彩和系统一致性 |
| 要处理中文表达、传统资源或中国组织语境 | `cogp-*`、`cogv-*` 或 `cogd-chinese-thought` | 区分文化符号、真实功能、关系结构和表达风格 |
| 要研究复杂议题 | `cogt-science`、`cogt-history` 或 `cogd-*` | 区分事实、模型、证据、历史周期和立场分歧 |

## 它是什么

- 可移植的 Markdown prompt / skill 仓库。
- 面向 Codex、Claude Code、OpenCode、Antigravity、Hermes、OpenClaw 等 agent host 的认知工具包。
- 用 persona 表达单一学科视角，用 team 表达多视角综合，用 voice 表达风格化口吻，用 debate 表达结构化分歧。
- 用于真实工作中的思考、写作、判断、研究问题框定和自我复盘。

## 它不是什么

- 不是应用程序，没有后端、前端、数据库或运行时服务。
- 不是 agent 框架，不负责调度、记忆、工具调用或权限管理。
- 不是名人模拟器，不要求模型冒充历史人物本人；`cogv-*` 只做明确标注的风格化表达。
- 不是事实权威库，事实性问题仍需要检索、引用和验证。

## 核心原则

不要做人格 cosplay，要做学科思维工具。

- `Plato` 不是“柏拉图聊天机器人”，而是理想型、形式和现实偏差的分析工具。
- `Shakespeare` 不是“模仿莎士比亚说话”，而是戏剧冲突、人物动机和叙事张力分析工具。
- `Newton` 不是“牛顿人格”，而是力、约束、变量和系统建模视角。
- `Einstein` 不是“名人角色”，而是相对性、观察者、假设变换和尺度转换思维工具。

每个 persona、team、voice 和 debate 都应服务真实任务：让问题更清楚，让论证更可靠，让表达更有力度，让决策更能承受现实约束。

## 能力价值

| 目标 | 典型用法 |
| --- | --- |
| 思考增强 | 用不同学科视角审查同一个问题，避免只靠单一工程、商业或情绪视角下判断。 |
| 写作增强 | 用文学、历史、哲学和批评视角提升表达、叙事、论证和审美；中文场景可使用曹雪芹、司马迁、苏轼、韩愈和鲁迅等叙事工具。 |
| 决策增强 | 哲学看价值，历史看周期，数学看结构，物理看约束，工程看落地。 |
| 快速装配 | 给 Codex、Claude Code、OpenCode、Antigravity、Hermes、OpenClaw 直接提供 persona、team、debate 和模板。 |

## 知识库地图

| 领域 | 路径 | 主要问题 |
| --- | --- | --- |
| 哲学 | `personas/philosophy/` | 价值、概念、原则、意义、矛盾、怀疑；包含儒、道、墨、法、荀子和心学等中国思想工具 |
| 文学 | `personas/literature/` | 叙事、人物、冲突、声音、节奏；包含中文叙事、红学、史传、古文论辩、反讽和现代批判写作工具 |
| 历史 | `personas/history/` | 周期、制度、权力、路径依赖、长时段结构 |
| 信息 | `personas/information/` | 信号、噪声、编码、冗余、沟通失真 |
| 计算 | `personas/computation/` | 自动化、可判定性、任务分解、人机分工 |
| 生物/演化 | `personas/biology/` | 选择压力、适应、生态位、长期演化 |
| 社会制度 | `personas/sociology/` | 合法性、权威、官僚制、制度责任 |
| 系统 | `personas/systems/` | 反馈回路、延迟、库存流量、杠杆点 |
| 数学 | `personas/mathematics/` | 定义、结构、证明、不确定性、模型 |
| 物理 | `personas/physics/` | 约束、变量、观察者、尺度、系统动态 |
| 艺术/设计 | `personas/art/` | 构图、感知、色彩、版式、产品设计、视觉系统 |
| 决策 | `personas/decision/` | 有限理性、判断偏差、管理有效性、责任和反馈 |
| 教育 | `personas/education/` | 认知发展、最近发展区、学习支架、自主环境 |
| 科学 | `personas/science/` | 可证伪性、实验直觉、反证、解释和自欺检查 |
| 团队 | `teams/` | 多视角评审、决策综合、写作评审、科学推理 |
| 口吻 | `voices/` | 风格化表达、人物口吻、修辞节奏 |
| 辩论 | `debates/` | 有结构的分歧、立场压力测试、长期议题讨论；包含中国思想分歧与传统/现代议题 |
| 适配 | `adapters/` | 不同 agent host 的安装和使用方式 |
| 模板 | `templates/` | 新增 persona 和 team 的标准结构 |

## 中国思想与中文叙事

本项目保留 `personas`、`teams`、`voices`、`debates` 四类结构，不按文化来源新增第五类。中国思想和中文叙事工具进入现有分类：

- `personas/philosophy/`：`confucius`、`mencius`、`xunzi`、`laozi`、`zhuangzi`、`wang-yangming`、`mozi`、`hanfeizi`，分别对应关系责任、正当性、制度化训练、最小干预、视角切换、知行合一、功用节用和制度激励。
- `personas/history/`：`sunzi` 用于战略态势、虚实、胜前计算、成本和低损耗行动。
- `personas/sociology/`：`fei-xiaotong` 用于差序格局、熟人网络、关系半径和中国组织传播分析。
- `personas/literature/`：`caoxueqin`、`simaqian`、`sushi`、`hanyu`、`ouyang-xiu`、`qian-zhongshu`、`luxun`，分别对应复杂关系与细节伏笔、人物传记与历史因果、通达中文表达、立论去浮辞、平易文气、类比反讽和遮蔽麻木检查。
- `voices/`：只在表达气质稳定、可安全借用时提供 `cogv-*` 口吻工具，例如 `cogv-sushi`、`cogv-luxun`、`cogv-zhuangzi`、`cogv-qian-zhongshu`。
- `debates/`：`cogd-chinese-thought` 用于儒道墨法等思想传统的结构化分歧，`cogd-tradition-modernity` 用于传统与现代之间的继承、改造和舍弃判断，`cogd-technology-humanities` 用于技术与人文之间的效率、意义、判断力和责任边界。

这些工具都不要求模型冒充历史人物本人，也不把传统文化当作事实权威。它们只提供可复核的思维压力和中文表达资源。

## 目录结构

```text
archsight-cognition/
├── README.md
├── OPEN_SOURCE.md
├── CONTRIBUTING.md
├── SECURITY.md
├── AGENTS.md
├── personas/
│   ├── README.md
│   ├── philosophy/
│   ├── literature/
│   ├── history/
│   ├── mathematics/
│   ├── physics/
│   ├── art/
│   ├── decision/
│   ├── education/
│   └── science/
├── teams/
│   ├── thinking-council/
│   ├── philosophy-cavalry/
│   ├── writing-review/
│   ├── history-strategy/
│   ├── scientific-reasoning/
│   ├── decision-council/
│   ├── design-review/
│   └── learning-path/
├── voices/
│   ├── philosophy/
│   ├── literature/
│   ├── history/
│   ├── mathematics/
│   └── physics/
├── debates/
├── adapters/
│   ├── README.md
│   ├── antigravity/
│   ├── claude-code/
│   ├── codex/
│   ├── hermes/
│   ├── opencode/
│   └── openclaw/
└── templates/
```

## 快速开始

推荐使用 npm / npx 作为统一安装入口。先选择安装范围：要么都安装到当前项目，要么都安装到全局，不要在同一组命令里混用。

安装到当前项目：

```powershell
npx @archsight/cognition install codex
npx @archsight/cognition install claude-code
npx @archsight/cognition install opencode
npx @archsight/cognition install antigravity
```

也可以用一条命令安装到当前项目：

```powershell
npx @archsight/cognition install all
```

安装到全局：

```powershell
npx @archsight/cognition install codex --global
npx @archsight/cognition install claude-code --global
npx @archsight/cognition install opencode --global
npx @archsight/cognition install antigravity --global
```

也可以用一条命令安装到全局：

```powershell
npx @archsight/cognition install all --global
```

也可以全局安装 CLI：

```powershell
npm install -g @archsight/cognition
archsight-cognition install all --global
```

如果不使用 npm，也可以直接克隆仓库后手动加载：

```powershell
git clone <repo-url> archsight-cognition
cd archsight-cognition
```

然后选择一个认知工具。新用户建议先从下面这些入口开始：

```text
teams/thinking-council/SKILL.md      # 不知道该从哪个视角切入
teams/decision-council/SKILL.md      # 重要决策评审
teams/writing-review/SKILL.md        # 写作、文案、叙事评审
teams/design-review/SKILL.md         # 产品、体验、视觉评审
personas/philosophy/socrates/SKILL.md # 概念澄清
personas/mathematics/bayes/SKILL.md   # 证据和不确定性判断
personas/physics/newton/SKILL.md      # 变量、约束和系统建模
```

在你的 agent host 中加载对应文件，并给出真实任务。

```text
加载 teams/decision-council/SKILL.md。
对这个产品方向做一次跨学科决策评审：
...
```

## 版本发布说明

当前版本的完整发布说明见 [`RELEASE_NOTES.md`](./RELEASE_NOTES.md)。

## Host 安装与使用

### npm / npx 安装

ArchSight Cognition 可以作为 npm 内容包安装。npm 只负责分发 Markdown skills 和安装器，不代表本项目变成 JavaScript 运行时库。

| 安装范围 | 命令 | 写入位置 |
| --- | --- | --- |
| 当前项目 | `npx @archsight/cognition install codex` | 当前目录 `.archsight-cognition/`、`AGENTS.md`，并注册 Codex skills。 |
| 当前项目 | `npx @archsight/cognition install claude-code` | 当前目录 `.claude/skills/`。 |
| 当前项目 | `npx @archsight/cognition install opencode` | 当前目录 `.opencode/skills/`。 |
| 当前项目 | `npx @archsight/cognition install antigravity` | 当前目录 `.agents/skills/`、`.agents/plugins/archsight-cognition/` 和 `.agents/workflows/decision-review.md`。 |
| 当前项目 | `npx @archsight/cognition install all` | 在当前项目安装 Codex、Claude Code、OpenCode 和 Antigravity 入口。 |
| 全局 | `npx @archsight/cognition install codex --global` | `CODEX_HOME` 或 `~/.codex`，并注册 Codex skills。 |
| 全局 | `npx @archsight/cognition install claude-code --global` | `~/.claude/skills/`。 |
| 全局 | `npx @archsight/cognition install opencode --global` | `~/.config/opencode/skills/`。 |
| 全局 | `npx @archsight/cognition install antigravity --global` | Antigravity 2.x 官方 plugin 目录 `~/.gemini/config/plugins/archsight-cognition/`；仅当 `~/.gemini/antigravity/` 已存在时，额外写入 1.x legacy skills 目录。 |
| 全局 | `npx @archsight/cognition install all --global` | 安装到 Codex、Claude Code、OpenCode 和 Antigravity 的全局目录。 |

默认只安装高频工具：`cogt-think`、`cogt-decide`、`cogt-write`、`cogt-science`、`cogt-history`、`cogt-philosophy`、`cogt-design`、`cogt-learn`，最常用的底层 `cogp-*` 和 `cogv-*`，以及核心结构化分歧入口 `cogd-*`。

如需安装全部 `SKILL.md`，同样先选择安装范围。

安装到当前项目：

```powershell
npx @archsight/cognition install codex --all
npx @archsight/cognition install claude-code --all
npx @archsight/cognition install opencode --all
npx @archsight/cognition install antigravity --all
```

安装到全局：

```powershell
npx @archsight/cognition install codex --global --all
npx @archsight/cognition install claude-code --global --all
npx @archsight/cognition install opencode --global --all
npx @archsight/cognition install antigravity --global --all
```

已存在的 skill 默认不会被覆盖。需要更新时在同一安装范围内加 `--force`：

当前项目：

```powershell
npx @archsight/cognition install all --force
```

全局：

```powershell
npx @archsight/cognition install all --global --force
```

查看可安装 skill：

```powershell
npx @archsight/cognition list
```

维护者发布到 npm 前的本地验证方式：

```powershell
npm install -g .
archsight-cognition install all --force
```

### Host 细节

主 README 只保留常用安装入口。不同 host 的手动路径、兼容说明和安全边界见各自 adapter 文档。

| Host | 当前项目 | 全局 | 常用调用 |
| --- | --- | --- | --- |
| Codex | `npx @archsight/cognition install codex` | `npx @archsight/cognition install codex --global` | `/cogt-decide` |
| Claude Code | `npx @archsight/cognition install claude-code` | `npx @archsight/cognition install claude-code --global` | `/cogt-decide` |
| OpenCode | `npx @archsight/cognition install opencode` | `npx @archsight/cognition install opencode --global` | `使用 cogt-decide skill ...` |
| Antigravity | `npx @archsight/cognition install antigravity` | `npx @archsight/cognition install antigravity --global` | `使用 cogt-decide skill ...` |

详细说明：

- `adapters/codex/README.md`
- `adapters/claude-code/README.md`
- `adapters/opencode/README.md`
- `adapters/antigravity/README.md`
- `adapters/hermes/README.md`
- `adapters/openclaw/README.md`

## 使用示例

单个学科工具：

```text
/cogp-newton
从约束、变量和系统建模角度审查这个产品决策：
...
```

写作评审：

```text
/cogt-write
从论证、叙事张力、清晰度和风格角度评审这篇文章：
...
```

决策审查：

```text
/cogt-decide
对这个战略做一次跨学科决策评审：
...
```

风格化口吻：

```text
/cogv-nietzsche
用尼采式锋利、反从众的口吻改写这段表达：
...
```

## 新增工具

新增 persona 时，从 `templates/persona-skill.md` 开始。

新增 team 时，从 `templates/team-skill.md` 开始。

新增 voice 时，从 `templates/voice-skill.md` 开始。

新增 debate 时，从 `templates/debate-skill.md` 开始。

新增或重构认知工具前，建议先阅读 [`docs/GOVERNANCE.md`](./docs/GOVERNANCE.md)，并通过 issue 说明失败模式、边界测试和验证逻辑。

新增内容必须满足：

- 有 `name` 与中文 `description` frontmatter。
- 明确角色、适用场景、方法、输出契约、失败模式、验证逻辑、边界测试和护栏。
- 不要求模型扮演历史人物本人。
- 输出服务现实任务，而不是只展示知识或风格模仿。

提交前运行：

```powershell
npm run validate:skills
```

## 开源状态

本仓库使用 Apache License 2.0 发布，适合复制、修改、分发和商用。发布前后的治理检查清单见 `OPEN_SOURCE.md`。

Apache License 2.0 覆盖本仓库的软件、Markdown skills、文档和模板。商用、复制、修改和分发必须遵守 Apache License 2.0 和 `NOTICE` 的保留要求。`ArchSight`、`ArchSightLabs` 和 `ArchSight Cognition` 等名称用于标识项目来源和作者，不表示授权第三方用作衍生项目名称、商标、品牌背书或误导性宣传。

## 运行契约

- 输出优先使用清晰中文，工具名、目录名和 persona / team name 保持英文稳定。
- 不要冒充历史人物、艺术家或科学家本人。
- 不要生成空泛评论；每次输出都要服务一个可执行判断。
- 不要默认全员上场；按任务选择 3 到 5 个视角。
- 事实性问题需要区分已知事实、推断和需要外部检索的内容。
