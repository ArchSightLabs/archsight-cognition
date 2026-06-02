# ArchSight Cognition

ArchSight Cognition 是一个给 AI agent 使用的跨学科思维与生成工具包。

它把哲学、文学、历史、数学、物理、艺术、系统科学和决策科学中的思维方法，整理成可复制、可审查、可组合的 Markdown `SKILL.md`。Codex、Claude Code、OpenCode、Qoder、Trae、Cline、Cursor、WorkBuddy、Antigravity、Hermes、OpenClaw 等 agent host 可以直接加载这些文件，用它们来澄清问题、评审写作、设计研究、审查战略、压力测试决策，或生成 PRD、决策备忘录、文章草稿、调研计划等可交付产物。

一句话定位：

> ArchSight Cognition 不是运行时框架，也不是历史人物角色扮演库，而是一组可复制、可审查、可组合的学科思维工具和生成型交付物。

## 项目定位

ArchSight Cognition 可以放在 agent 工作流的“判断层”和“生成层”：它发生在写代码、改文章、做设计或给结论之前，用来决定该从什么视角看问题、应该输出什么结构、哪些结论还不能直接下；当任务已经明确时，也可以用 `cogx-*` deliverable 把判断转成可交付产物。

它最适合这些位置：

- 作为 Codex、Claude Code、OpenCode、Qoder、Trae、Cline、Cursor、WorkBuddy、Antigravity 等 agent host 的本地 skills 内容包。
- 作为团队沉淀 prompt / skill 的可审查模板，而不是散落在聊天记录里的临时提示词。
- 作为写作、产品、研究、教育、组织和战略判断的认知路由层。
- 作为面向真实任务的生成型交付物库，把认知判断转成 PRD、备忘录、草稿、调研计划和复盘材料。
- 作为可被不同项目、不同团队和不同 agent host 组合使用的通用思维工具库。

## 更直白地说

多数 agent 工具关注“怎么执行任务”。ArchSight Cognition 关注“用什么思维方式看这个任务”。

当你把一个复杂问题交给 AI 时，可以不只让它“直接回答”，而是让它加载一个合适的认知工具：

- 概念不清时，加载 `cogp-socrates`，先拆概念、边界和矛盾。
- 决策风险高时，加载 `cogt-decide`，从价值、证据、约束、历史和执行风险审查方案。
- 文案像 AI 套话时，加载 `cogt-write`，检查论证、叙事、清晰度、节奏和表达诚实性。
- 产品体验需要评审时，加载 `cogt-design`，从可用性、交互模型、版式、色彩和系统一致性给反馈。
- 需要直接产出材料时，加载 `cogx-*`，生成最小 PRD、决策备忘录、文章草稿、调研计划、团队复盘或战略简报。
- 议题本身有强分歧时，加载 `cogd-*`，保留不同立场的张力，而不是急着调和。

你可以把它理解成一套“思维镜头”和“产物模具”：persona 是单一学科视角，method 是去人物中心的可执行方法，team 是多个视角的组合，deliverable 把视角和方法转成真实任务产物，voice 只负责明确标注的表达风格，debate 用来保留结构化分歧。

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
| 要生成明确产物 | `cogx-prd`、`cogx-decision-memo`、`cogx-draft` | 输出 PRD、备忘录、草稿、调研计划、复盘或战略简报 |
| 要改文章、文案或叙事 | `cogt-write` | 找出空话、结构问题、论证漏洞和更清楚的改法 |
| 要评审产品、体验或视觉 | `cogt-design` | 审查可用性、交互模型、版式、色彩和系统一致性 |
| 要处理中文表达、传统资源或中国组织语境 | `cogp-*`、`cogv-*` 或 `cogd-chinese-thought` | 区分文化符号、真实功能、关系结构和表达风格 |
| 要研究复杂议题 | `cogt-science`、`cogt-history` 或 `cogd-*` | 区分事实、模型、证据、历史周期和立场分歧 |

## 它是什么

- 可移植的 Markdown prompt / skill 仓库。
- 面向 Codex、Claude Code、OpenCode、Qoder、Trae、Cline、Cursor、WorkBuddy、Antigravity、Hermes、OpenClaw 等 agent host 的认知工具包。
- 用 persona 表达单一学科视角，用 method 表达去人物中心的可执行方法，用 team 表达多视角综合，用 deliverable 表达生成型任务产物，用 voice 表达风格化口吻，用 debate 表达结构化分歧。
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

`persona` 和 `voice` 只使用已离世人物或稳定历史传统；仍在世人物、活跃企业家和个人品牌材料只能作为 `methods/` 的来源之一，不能作为 `cogp-*` 或 `cogv-*` 入口。

每个 persona、method、team、deliverable、voice 和 debate 都应服务真实任务：让问题更清楚，让论证更可靠，让表达更有力度，让决策更能承受现实约束，并在需要时生成可继续编辑和执行的产物。

## 能力价值

| 目标 | 典型用法 |
| --- | --- |
| 思考增强 | 用不同学科视角审查同一个问题，避免只靠单一工程、商业或情绪视角下判断。 |
| 写作增强 | 用文学、历史、哲学和批评视角提升表达、叙事、论证和审美；中文场景可使用曹雪芹、司马迁、苏轼、韩愈和鲁迅等叙事工具。 |
| 决策增强 | 哲学看价值，历史看周期，数学看结构，物理看约束，工程看落地。 |
| 生成增强 | 用 `cogx-*` deliverable 生成 PRD、决策备忘录、文章草稿、调研计划、团队复盘和战略简报。 |
| 快速装配 | 给 Codex、Claude Code、OpenCode、Qoder、Trae、Cline、Cursor、WorkBuddy、Antigravity、Hermes、OpenClaw 直接提供 persona、method、team、deliverable、voice、debate 和模板。 |

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
| 数学 | `personas/mathematics/` | 定义、结构、证明、不确定性、形式系统边界、模型 |
| 物理 | `personas/physics/` | 约束、变量、观察者、尺度、系统动态 |
| 艺术/设计 | `personas/art/` | 构图、感知、色彩、版式、产品设计、视觉系统 |
| 决策 | `personas/decision/` | 有限理性、判断偏差、管理有效性、技术管理、创新战略、激励结构、责任和反馈 |
| 教育 | `personas/education/` | 认知发展、最近发展区、学习支架、自主环境 |
| 科学 | `personas/science/` | 可证伪性、实验直觉、反证、解释和自欺检查 |
| 方法 | `methods/` | 不绑定人物的可执行方法；可吸收活人公开材料，但必须去人物中心化 |
| 团队 | `teams/` | 多视角评审、决策综合、写作评审、科学推理、产品战略、技术领导 |
| Deliverables | `deliverables/` | 面向真实任务的生成型入口，产出 PRD、备忘录、草稿、调研计划、复盘和战略简报 |
| 口吻 | `voices/` | 风格化表达、人物口吻、修辞节奏 |
| 辩论 | `debates/` | 有结构的分歧、立场压力测试、长期议题讨论；包含中国思想分歧与传统/现代议题 |
| 适配 | `adapters/` | 不同 agent host 的安装和使用方式 |
| 模板 | `templates/` | 新增 persona、method、team、deliverable、voice 和 debate 的标准结构 |

## 中国思想与中文叙事

本项目保留 `personas`、`methods`、`teams`、`deliverables`、`voices`、`debates` 等结构，不按文化来源新增单独分类。中国思想和中文叙事工具进入现有分类：

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
├── methods/
│   ├── auto/
│   ├── business-logic/
│   ├── causal-failure-analysis/
│   ├── critical-thinking/
│   ├── decision-heuristics/
│   ├── first-principles/
│   ├── human-centered-interaction/
│   ├── integrative-options/
│   ├── management-hygiene/
│   ├── operating-principles/
│   ├── parallel-thinking/
│   ├── principled-effectiveness/
│   ├── priority-triage/
│   ├── simplicity-filter/
│   ├── structured-problem-solving/
│   └── tail-risk/
├── teams/
│   ├── thinking-council/
│   ├── philosophy-cavalry/
│   ├── writing-review/
│   ├── history-strategy/
│   ├── scientific-reasoning/
│   ├── decision-council/
│   ├── design-review/
│   ├── product/
│   ├── lead/
│   └── learning-path/
├── deliverables/
│   ├── prd/
│   ├── decision-memo/
│   ├── draft/
│   ├── research-plan/
│   ├── retro/
│   └── strategy-brief/
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
│   ├── cursor/
│   ├── cline/
│   ├── hermes/
│   ├── qoder/
│   ├── trae/
│   ├── opencode/
│   └── openclaw/
└── templates/
```

## 快速开始

推荐使用 npm / npx 作为统一安装入口。除 WorkBuddy 固定写入个人目录外，先选择安装范围：要么都安装到当前项目，要么都安装到全局，不要在同一组命令里混用。

安装到当前项目：

```powershell
npx @archsight/cognition install codex
npx @archsight/cognition install claude-code
npx @archsight/cognition install opencode
npx @archsight/cognition install qoder
npx @archsight/cognition install trae
npx @archsight/cognition install cline
npx @archsight/cognition install cursor
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
npx @archsight/cognition install qoder --global
npx @archsight/cognition install trae --global
npx @archsight/cognition install cline --global
npx @archsight/cognition install antigravity --global
```

安装到 WorkBuddy 个人目录：

```powershell
npx @archsight/cognition install workbuddy
```

WorkBuddy 不支持项目级 skills 目录，固定写入 `~/.workbuddy/skills/`，因此不需要 `--global`。

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
teams/product/SKILL.md               # 产品战略、定位和最小验证
teams/lead/SKILL.md                  # 技术领导、研发组织和交付反馈
deliverables/prd/SKILL.md        # cogx-prd：生成最小产品 PRD
deliverables/decision-memo/SKILL.md      # cogx-decision-memo：生成决策备忘录
deliverables/draft/SKILL.md      # cogx-draft：生成文章或长文草稿
deliverables/research-plan/SKILL.md      # cogx-research-plan：生成调研计划
deliverables/retro/SKILL.md         # cogx-retro：生成团队复盘与行动清单
deliverables/strategy-brief/SKILL.md     # cogx-strategy-brief：生成战略简报
personas/philosophy/socrates/SKILL.md # 概念澄清
personas/mathematics/bayes/SKILL.md   # 证据和不确定性判断
personas/mathematics/godel/SKILL.md   # cogp-godel：形式系统边界和自指风险
personas/physics/newton/SKILL.md      # 变量、约束和系统建模
methods/critical-thinking/SKILL.md    # 主张、证据、谬误和结论强度审查
methods/auto/SKILL.md                 # 方法自动路由
methods/priority-triage/SKILL.md      # 优先级取舍和不要做清单
methods/causal-failure-analysis/SKILL.md # 鱼骨图、连锁失败和根因阻断
methods/decision-heuristics/SKILL.md  # 遗憾最小化、信息窗口和伦理边界
methods/first-principles/SKILL.md     # 第一性约束拆解和必要推导
methods/parallel-thinking/SKILL.md    # 平行思考、会议发散和多视角审查
methods/simplicity-filter/SKILL.md    # 奥卡姆剃刀、噪音过滤和慢思考
methods/structured-problem-solving/SKILL.md # 议题树、MECE 和假设驱动拆解
methods/tail-risk/SKILL.md      # 尾部风险和反脆弱审查
methods/human-centered-interaction/SKILL.md # 人本交互和错误恢复审查
methods/operating-principles/SKILL.md # 原则化决策和复盘更新
methods/management-hygiene/SKILL.md # 管理卫生、会议、授权和反馈检查
methods/business-logic/SKILL.md # 商业底层逻辑、交易结构和关键变量
methods/integrative-options/SKILL.md # 冲突协同、谈判分歧和第三选择
methods/principled-effectiveness/SKILL.md # 原则化效能、角色目标和习惯系统
personas/decision/munger/SKILL.md     # cogp-munger：多元模型和激励结构审查
personas/decision/grove/SKILL.md      # cogp-grove：高输出技术管理和战略拐点审查
personas/decision/christensen/SKILL.md # cogp-christensen：颠覆式创新和市场进入审查
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
| 当前项目 | `npx @archsight/cognition install qoder` | 当前目录 `.qoder/skills/`。 |
| 当前项目 | `npx @archsight/cognition install trae` | 当前目录 `.agents/skills/`。 |
| 当前项目 | `npx @archsight/cognition install cline` | 当前目录 `.archsight-cognition/` 和 `.clinerules/archsight-cognition.md`。 |
| 当前项目 | `npx @archsight/cognition install cursor` | 当前目录 `.archsight-cognition/` 和 `.cursor/rules/archsight-cognition.mdc`。 |
| 当前项目 | `npx @archsight/cognition install antigravity` | 当前目录 `.agents/skills/`、`.agents/plugins/archsight-cognition/` 和 `.agents/workflows/decision-review.md`。 |
| 当前项目 | `npx @archsight/cognition install all` | 在当前项目安装 Codex、Claude Code、OpenCode、Qoder、Trae、Cline、Cursor 和 Antigravity 入口；WorkBuddy 作为例外固定安装到个人目录。 |
| 全局 | `npx @archsight/cognition install codex --global` | `CODEX_HOME` 或 `~/.codex`，并注册 Codex skills。 |
| 全局 | `npx @archsight/cognition install claude-code --global` | `~/.claude/skills/`。 |
| 全局 | `npx @archsight/cognition install opencode --global` | `~/.opencode/skills/`；如果已存在 `~/.config/opencode/`，同时写入 `~/.config/opencode/skills/`。 |
| 全局 | `npx @archsight/cognition install qoder --global` | `~/.qoder/skills/`；如果已存在 `~/.qoderwork/`，同时写入 `~/.qoderwork/skills/`。 |
| 全局 | `npx @archsight/cognition install trae --global` | `~/.trae/skills/`；如果已存在 `~/.trae-cn/`，同时写入 `~/.trae-cn/skills/`。 |
| 全局 | `npx @archsight/cognition install cline --global` | `~/Documents/Cline/ArchSight-Cognition/` 和 `~/Documents/Cline/Rules/archsight-cognition.md`。 |
| 个人目录 | `npx @archsight/cognition install workbuddy` | `~/.workbuddy/skills/`；WorkBuddy 不区分项目级和 `--global`。 |
| 全局 | `npx @archsight/cognition install antigravity --global` | Antigravity 2.x 官方 plugin 目录 `~/.gemini/config/plugins/archsight-cognition/`；仅当 `~/.gemini/antigravity/` 已存在时，额外写入 1.x legacy skills 目录。 |
| 全局 | `npx @archsight/cognition install all --global` | 安装到 Codex、Claude Code、OpenCode、Qoder、Trae、Cline 和 Antigravity 的全局目录；WorkBuddy 作为例外固定安装到个人目录；Cursor 仅提供项目级 CLI 安装。 |

默认只安装高频工具：`cogt-think`、`cogt-decide`、`cogt-write`、`cogt-science`、`cogt-history`、`cogt-philosophy`、`cogt-design`、`cogt-product`、`cogt-lead`、`cogt-learn`，生成型 `cogx-*` deliverables，最常用的底层 `cogp-*`、`cogm-*` 和 `cogv-*`，以及核心结构化分歧入口 `cogd-*`。不知道该选哪个方法时，从 `cogm-auto` 开始；需要直接生成产物时，从 `cogx-prd`、`cogx-decision-memo` 或 `cogx-draft` 开始。

如需安装全部 `SKILL.md`，同样先选择安装范围。

安装到当前项目：

```powershell
npx @archsight/cognition install codex --all
npx @archsight/cognition install claude-code --all
npx @archsight/cognition install opencode --all
npx @archsight/cognition install qoder --all
npx @archsight/cognition install trae --all
npx @archsight/cognition install antigravity --all
```

安装到全局：

```powershell
npx @archsight/cognition install codex --global --all
npx @archsight/cognition install claude-code --global --all
npx @archsight/cognition install opencode --global --all
npx @archsight/cognition install qoder --global --all
npx @archsight/cognition install trae --global --all
npx @archsight/cognition install antigravity --global --all
```

安装到 WorkBuddy 个人目录：

```powershell
npx @archsight/cognition install workbuddy --all
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
| Qoder | `npx @archsight/cognition install qoder` | `npx @archsight/cognition install qoder --global` | `/cogt-decide` 或 `使用 cogt-decide skill ...` |
| Trae | `npx @archsight/cognition install trae` | `npx @archsight/cognition install trae --global` | `使用 cogt-decide skill ...` |
| Cline | `npx @archsight/cognition install cline` | `npx @archsight/cognition install cline --global` | `使用 cogt-decide ...` |
| Cursor | `npx @archsight/cognition install cursor` | 在 Cursor 设置中维护 User Rules | `使用 cogt-decide ...` |
| WorkBuddy | 不适用，固定个人目录 | `npx @archsight/cognition install workbuddy` | `使用 cogt-decide skill ...` |
| Antigravity | `npx @archsight/cognition install antigravity` | `npx @archsight/cognition install antigravity --global` | `使用 cogt-decide skill ...` |

详细说明：

- `adapters/codex/README.md`
- `adapters/claude-code/README.md`
- `adapters/opencode/README.md`
- `adapters/qoder/README.md`
- `adapters/trae/README.md`
- `adapters/cline/README.md`
- `adapters/cursor/README.md`
- `adapters/workbuddy/README.md`
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

方法自动路由：

```text
/cogm-auto
我想用方法分析这个问题，但不知道应该选优先级、因果、简化还是决策工具：
...
```

产品战略评审：

```text
/cogt-product
评审这个产品方向的用户问题、定位、最小验证和市场进入风险：
...
```

生成型交付物：

```text
/cogx-prd
我们想做一个给远程研发团队用的 AI 复盘工具，请生成一版最小 PRD。
```

```text
/cogx-decision-memo
我们在纠结要不要重写老系统，请生成一份决策备忘录。
```

```text
/cogx-draft
我想写一篇关于 AI 编程助手改变工程师判断力的文章，帮我生成草稿。
```

技术领导评审：

```text
/cogt-lead
检查这个研发组织问题里的交付反馈、质量债、激励和管理杠杆：
...
```

商业底层逻辑：

```text
/cogm-business-logic
拆解这个合作方案的交易结构、利益关系、关键变量和最小验证：
...
```

第三选择：

```text
/cogm-integrative-options
两方方案都卡住了，帮我找一个不是简单妥协的第三选择：
...
```

原则化效能：

```text
/cogm-principled-effectiveness
我一直在救火，关键项目推进不动，帮我重整角色、优先级和习惯系统：
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

新增 method 时，从 `templates/method-skill.md` 开始。method 不以活人命名，可以引用活人公开材料作为来源，但必须改写为去人物中心的可执行方法。

新增 team 时，从 `templates/team-skill.md` 开始。

新增 deliverable 时，从 `templates/deliverable-skill.md` 开始。deliverable 使用 `cogx-*` 前缀，用于把现有认知工具组合成可交付产物。

新增 voice 时，从 `templates/voice-skill.md` 开始。

新增 debate 时，从 `templates/debate-skill.md` 开始。

新增或重构认知工具前，建议先阅读 [`docs/GOVERNANCE.md`](./docs/GOVERNANCE.md)，并通过 issue 说明失败模式、边界测试和验证逻辑。

如果是延续当前“女娲式蒸馏 / 技能强化”批次，先对齐 [`docs/DISTILLATION_BASELINE.md`](./docs/DISTILLATION_BASELINE.md) 中的状态定义、六维研究结构和验收标准。

如果新增工具来自人物或流派蒸馏，可以先做“调研前处理”：收集一手和高质量二手材料，用跨域复现、生成力和排他性筛选心智模型，再回到本项目模板重写为非角色扮演的认知工具。前处理只提供证据和候选模型，最终 `SKILL.md` 仍必须服从本项目治理边界。

新增内容必须满足：

- 有 `name` 与中文 `description` frontmatter。
- 明确角色、适用场景、方法、输出契约、失败模式、验证逻辑、边界测试和护栏。
- `persona` 和 `voice` 不得使用仍在世人物；活人材料应进入 `methods/` 或 team 参考材料。
- 不要求模型扮演历史人物本人。
- 输出服务现实任务，而不是只展示知识或风格模仿；`deliverable` 必须生成可继续讨论、修改或执行的产物。

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
- 使用 `cogx-*` deliverable 时，必须生成明确产物，并标出假设、限制、验证标准和下一步动作。
- 不要默认全员上场；按任务选择 3 到 5 个视角。
- 事实性问题需要区分已知事实、推断和需要外部检索的内容。
