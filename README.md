# ArchSight Cognition

ArchSight Cognition 是一个给 AI agent 使用的跨学科思维工具包。

它把哲学、文学、历史、数学、物理、艺术、系统科学和决策科学中的思维方法，整理成可复制、可审查、可组合的 Markdown `SKILL.md`。Codex、Claude Code、Antigravity、Hermes、OpenClaw 等 agent host 可以直接加载这些文件，用它们来澄清问题、评审写作、设计研究、审查战略、压力测试决策，或生成更有辨识度的表达。

一句话定位：

> ArchSight Cognition 不是运行时框架，也不是历史人物角色扮演库，而是一组可复制、可审查、可组合的学科思维工具。

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

- 想让 Codex、Claude Code 或其他 agent 在规划、写作和决策时更有判断力的人。
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
| 要研究复杂议题 | `cogt-science`、`cogt-history` 或 `cogd-*` | 区分事实、模型、证据、历史周期和立场分歧 |

## 它是什么

- 可移植的 Markdown prompt / skill 仓库。
- 面向 Codex、Claude Code、Antigravity、Hermes、OpenClaw 等 agent host 的认知工具包。
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
| 写作增强 | 用文学、历史、哲学和批评视角提升表达、叙事、论证和审美。 |
| 决策增强 | 哲学看价值，历史看周期，数学看结构，物理看约束，工程看落地。 |
| 快速装配 | 给 Codex、Claude Code、Antigravity、Hermes、OpenClaw 直接提供 persona、team、debate 和模板。 |

## 知识库地图

| 领域 | 路径 | 主要问题 |
| --- | --- | --- |
| 哲学 | `personas/philosophy/` | 价值、概念、原则、意义、矛盾、怀疑 |
| 文学 | `personas/literature/` | 叙事、人物、冲突、声音、节奏 |
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
| 辩论 | `debates/` | 有结构的分歧、立场压力测试、长期议题讨论 |
| 适配 | `adapters/` | 不同 agent host 的安装和使用方式 |
| 模板 | `templates/` | 新增 persona 和 team 的标准结构 |

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
│   └── openclaw/
└── templates/
```

## 快速开始

推荐使用 npm / npx 安装：

```powershell
npx @archsight/cognition install codex
npx @archsight/cognition install claude-code
npx @archsight/cognition install antigravity --workflow
```

也可以全局安装 CLI：

```powershell
npm install -g @archsight/cognition
archsight-cognition install antigravity --global
```

发布到 npm 前，可以在仓库根目录本地安装验证：

```powershell
npm install -g .
archsight-cognition install codex
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

| 命令 | 作用 |
| --- | --- |
| `npx @archsight/cognition install codex` | 在当前目录安装 `.archsight-cognition/`，创建或更新 `AGENTS.md` 指针，并把常用 `cogt-*` / `cogp-*` / `cogv-*` / `cogd-*` 注册到 `CODEX_HOME/skills`。 |
| `npx @archsight/cognition install codex --global` | 安装到 `CODEX_HOME` 或 `~/.codex`，创建或更新全局 `AGENTS.md`，并注册 Codex skills。 |
| `npx @archsight/cognition install claude-code` | 把常用 skills 复制到当前项目 `.claude/skills/`。 |
| `npx @archsight/cognition install claude-code --global` | 把常用 skills 复制到 `~/.claude/skills/`。 |
| `npx @archsight/cognition install antigravity` | 把常用 skills 复制到当前项目 `.agents/skills/`。 |
| `npx @archsight/cognition install antigravity --global` | 把常用 skills 复制到 `~/.gemini/antigravity/skills/`。 |
| `npx @archsight/cognition install antigravity --workflow` | 同时创建 `.agents/workflows/decision-review.md`。 |
| `npx @archsight/cognition install all` | 在当前项目安装 Codex、Claude Code 和 Antigravity 入口。 |
| `npx @archsight/cognition install all --global` | 安装到 Codex、Claude Code 和 Antigravity 的全局目录。 |

默认只安装高频工具：`cogt-think`、`cogt-decide`、`cogt-write`、`cogt-science`、`cogt-history`、`cogt-philosophy`、`cogt-design`、`cogt-learn`，最常用的底层 `cogp-*` 和 `cogv-*`，以及核心结构化分歧入口 `cogd-*`。

如需安装全部 `SKILL.md`：

```powershell
npx @archsight/cognition install codex --all
npx @archsight/cognition install claude-code --all
npx @archsight/cognition install antigravity --all
```

已存在的 skill 默认不会被覆盖。需要更新时使用：

```powershell
npx @archsight/cognition install antigravity --force
```

查看可安装 skill：

```powershell
npx @archsight/cognition list
```

发布到 npm 前的本地验证方式：

```powershell
npm install -g .
archsight-cognition install antigravity --workflow
```

### 与 archsight-aios 的关系

这个 npm 分发形态和 `archsight-aios` 类似：都可以通过包管理器安装，并提供命令把能力装配到本地环境。

但边界不同：

- `archsight-aios` 可以承担更大的运行时、系统装配或 agent OS 职责。
- `archsight-cognition` 只是认知 skills 内容包和安装器，不负责调度、记忆、工具权限、服务进程或 agent runtime。
- 本仓库的核心资产仍然是可移植 Markdown：`personas/`、`teams/`、`debates/`、`templates/`。

### 手动安装

| Host | 推荐方式 | 适合场景 |
| --- | --- | --- |
| Codex | 在 `AGENTS.md` 中加入本仓库路径和路由规则 | 适合把本仓库作为项目级或全局认知工具库。 |
| Claude Code | 把需要的目录复制或链接到 `.claude/skills/<name>/SKILL.md` | 适合把 persona/team/voice/debate 注册成可直接 `/name` 调用的 skill。 |
| Antigravity | 复制到 `.agents/skills/` 或写入 workspace rule / workflow | 适合在 Agent Manager / Editor 中作为规划、评审和写作工作流使用。 |

### 安装到 Codex

Codex 推荐用 `AGENTS.md` 指向一个稳定的本地内容目录，不要把所有 persona 内容直接复制进 `AGENTS.md`。

Codex 支持全局和项目级两种安装：

- 全局安装：写入 `CODEX_HOME/AGENTS.md`；如果没有设置 `CODEX_HOME`，默认写入 `~/.codex/AGENTS.md`。
- 项目安装：写入当前项目 `AGENTS.md`，并把内容复制到当前项目 `.archsight-cognition/`。

项目级安装：

```powershell
npx @archsight/cognition install codex
```

该命令会：

- 把 `personas/`、`teams/`、`debates/`、`templates/`、`adapters/` 复制到当前项目的 `.archsight-cognition/`。
- 创建或更新当前项目的 `AGENTS.md`。
- 把常用 `cogt-*` / `cogp-*` / `cogv-*` / `cogd-*` 技能注册到 `CODEX_HOME\skills`，未设置 `CODEX_HOME` 时注册到 `~\.codex\skills`。
- 让 `AGENTS.md` 指向 `.archsight-cognition/`，避免依赖临时 npm cache 路径。

全局安装：

```powershell
npx @archsight/cognition install codex --global
```

该命令会：

- 把内容复制到 `CODEX_HOME\archsight-cognition` 或 `~\.codex\archsight-cognition`。
- 把常用 `cogt-*` / `cogp-*` / `cogv-*` / `cogd-*` 技能注册到 `CODEX_HOME\skills` 或 `~\.codex\skills`。
- 创建或更新全局 `AGENTS.md`。
- 让所有 Codex 项目默认继承 ArchSight Cognition 路由规则。

如果希望所有 team、单个 persona、voice 和 debate 都能通过 `/cogt-*`、`/cogp-*`、`/cogv-*` 或 `/cogd-*` 访问，使用：

```powershell
npx @archsight/cognition install codex --global --all --force
```

手动安装：

在你的目标项目根目录打开或创建 `AGENTS.md`，加入：

```markdown
## ArchSight Cognition

当任务需要问题澄清、写作评审、研究设计、战略判断或跨学科决策复盘时，
从 `C:\Work\ArchSightLabs\archsight-cognition` 加载最相关的认知工具。

默认路由：
- 需求和概念不清：`personas/philosophy/socrates/SKILL.md`
- 不确定性和证据判断：`personas/mathematics/bayes/SKILL.md`
- 变量、约束和系统建模：`personas/physics/newton/SKILL.md`
- 不知道该用哪个工具：`teams/thinking-council/SKILL.md`
- 高风险决策：`teams/decision-council/SKILL.md`
- 长期议题、立场压力测试和结构化分歧：`debates/README.md` 或 `debates/<topic>/SKILL.md`
- 文章、叙事和表达：`teams/writing-review/SKILL.md`
- 产品、体验、视觉和交互：`teams/design-review/SKILL.md`
- 教育、学习路径和亲子成长：`teams/learning-path/SKILL.md`

综合 team 工具统一使用短命令，例如 `cogt-think`、`cogt-decide`、`cogt-write`、`cogt-design`、`cogt-learn`。
单个 persona 工具统一使用 `cogp-` 前缀，例如 `cogp-socrates`、`cogp-bayes`、`cogp-newton`。
风格化口吻工具统一使用 `cogv-` 前缀，例如 `cogv-kant`、`cogv-nietzsche`。`cogv-*` 只用于口吻和表达风格，不声称历史人物本人在说话。
结构化分歧和长期议题工具统一使用 `cogd-` 前缀，例如 `cogd-general`、`cogd-life`、`cogd-technology`。

不要人格 cosplay。把 persona 当作学科思维工具，而不是历史人物模拟。
```

第一次使用时，可以在 Codex 中直接调用注册后的 skill：

```text
/cogt-decide
对这个架构决策做跨学科评审，输出风险、反对条件和下一步验证。
```

结构化分歧：

```text
/cogd-general
围绕“远程工作到底增强自由还是削弱组织信任”展开强分歧分析。
```

领域结构化分歧：

```text
/cogd-life
围绕“人生应该追求自由、意义还是责任”展开强分歧分析。
```

```text
/cogd-technology
围绕“AI 编程助手是否增强工程师判断力”做一次立场压力测试，不要强行收敛。
```

也可以显式加载文件：

```text
加载 C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council\SKILL.md。
对这个架构决策做跨学科评审，输出风险、反对条件和下一步验证。
```

### 安装到 Antigravity

Antigravity 有三种接入方式，推荐优先使用 workspace skills。

自动安装到当前 workspace：

```powershell
npx @archsight/cognition install antigravity --workflow
```

自动安装到全局：

```powershell
npx @archsight/cognition install antigravity --global
```

方式一：安装为当前 workspace 的 skills。

在目标项目根目录执行：

```powershell
mkdir .agents\skills
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\thinking-council .agents\skills\cogt-think -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council .agents\skills\cogt-decide -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\writing-review .agents\skills\cogt-write -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\design-review .agents\skills\cogt-design -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\learning-path .agents\skills\cogt-learn -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates .agents\skills\cogp-socrates -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\mathematics\bayes .agents\skills\cogp-bayes -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\physics\newton .agents\skills\cogp-newton -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\voices\philosophy\kant .agents\skills\cogv-kant -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\general .agents\skills\cogd-general -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\life .agents\skills\cogd-life -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\technology .agents\skills\cogd-technology -Recurse
```

然后在 Antigravity agent 对话中输入：

```text
使用 cogt-decide skill 评审这个技术路线，输出风险、反对条件和下一步验证。
```

方式二：安装为全局 skills，供所有 workspace 使用。

```powershell
mkdir $HOME\.gemini\antigravity\skills
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\thinking-council $HOME\.gemini\antigravity\skills\cogt-think -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council $HOME\.gemini\antigravity\skills\cogt-decide -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\writing-review $HOME\.gemini\antigravity\skills\cogt-write -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\design-review $HOME\.gemini\antigravity\skills\cogt-design -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\learning-path $HOME\.gemini\antigravity\skills\cogt-learn -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates $HOME\.gemini\antigravity\skills\cogp-socrates -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\mathematics\bayes $HOME\.gemini\antigravity\skills\cogp-bayes -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\physics\newton $HOME\.gemini\antigravity\skills\cogp-newton -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\voices\philosophy\kant $HOME\.gemini\antigravity\skills\cogv-kant -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\general $HOME\.gemini\antigravity\skills\cogd-general -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\life $HOME\.gemini\antigravity\skills\cogd-life -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\technology $HOME\.gemini\antigravity\skills\cogd-technology -Recurse
```

方式三：只添加 workspace rule 指针。

在目标项目创建 `.agents/rules/archsight-cognition.md`：

```markdown
# ArchSight Cognition

当任务需要问题澄清、写作评审、研究设计、战略判断或跨学科决策复盘时，
从 `C:\Work\ArchSightLabs\archsight-cognition` 加载最相关的 Markdown 工具。

默认路由：
- 概念和需求不清：`personas/philosophy/socrates/SKILL.md`
- 不确定性和证据判断：`personas/mathematics/bayes/SKILL.md`
- 约束和系统建模：`personas/physics/newton/SKILL.md`
- 不知道该用哪个工具：`teams/thinking-council/SKILL.md`
- 高风险决策：`teams/decision-council/SKILL.md`
- 长期议题、立场压力测试和结构化分歧：`debates/README.md` 或 `debates/<topic>/SKILL.md`
- 写作和表达评审：`teams/writing-review/SKILL.md`
- 产品、体验、视觉和交互：`teams/design-review/SKILL.md`
- 教育、学习路径和亲子成长：`teams/learning-path/SKILL.md`

综合 team 工具统一使用短命令，例如 `cogt-think`、`cogt-decide`、`cogt-write`、`cogt-design`、`cogt-learn`。
单个 persona 工具统一使用 `cogp-` 前缀，例如 `cogp-socrates`、`cogp-bayes`、`cogp-newton`。
风格化口吻工具统一使用 `cogv-` 前缀，例如 `cogv-kant`、`cogv-nietzsche`。`cogv-*` 只用于口吻和表达风格，不声称历史人物本人在说话。
结构化分歧和长期议题工具统一使用 `cogd-` 前缀，例如 `cogd-general`、`cogd-life`、`cogd-technology`。

不要人格 cosplay。persona 只作为学科思维工具。
```

如果要保存成 Antigravity workflow，可以创建 `.agents/workflows/decision-review.md`：

```markdown
# Decision Review

使用 ArchSight Cognition 的 `cogt-decide` 思路评审用户给出的决策。

输出：
- 决策重述
- 不可逆性
- 信息缺口
- 关键风险
- 反对条件
- 下一步验证

不要默认调用所有视角。按任务选择 3 到 5 个最相关视角。
```

在 Antigravity 对话中输入 `/decision`，选择该 workflow 后再贴入具体问题。

### 安装到 Claude Code

Claude Code 推荐把常用工具复制到 `.claude/skills/`：

自动安装到当前项目：

```powershell
npx @archsight/cognition install claude-code
```

自动安装到全局：

```powershell
npx @archsight/cognition install claude-code --global
```

手动安装：

```powershell
mkdir .claude\skills
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\thinking-council .claude\skills\cogt-think -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council .claude\skills\cogt-decide -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\writing-review .claude\skills\cogt-write -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\design-review .claude\skills\cogt-design -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\learning-path .claude\skills\cogt-learn -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates .claude\skills\cogp-socrates -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\voices\philosophy\kant .claude\skills\cogv-kant -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\general .claude\skills\cogd-general -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\life .claude\skills\cogd-life -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\debates\technology .claude\skills\cogd-technology -Recurse
```

调用示例：

```text
/cogt-decide
对这个产品方向做一次跨学科决策评审。
```

风格化口吻：

```text
/cogv-kant
用康德式克制、原则优先的口吻回应这段话。
```

结构化分歧：

```text
/cogd-work
围绕“工作应该服务意义还是自由”展开强分歧分析，不要急着调和。
```

详细说明见：

- `adapters/codex/README.md`
- `adapters/claude-code/README.md`
- `adapters/antigravity/README.md`
- `adapters/hermes/README.md`
- `adapters/openclaw/README.md`

## 使用示例

单个学科工具：

```text
加载 personas/physics/newton/SKILL.md。
用 Newton 作为约束与系统建模视角审查这个产品决策：
...
```

写作评审：

```text
加载 teams/writing-review/SKILL.md。
从论证、叙事张力、清晰度和风格角度评审这篇文章：
...
```

决策审查：

```text
加载 teams/decision-council/SKILL.md。
对这个战略做一次跨学科决策评审：
...
```

风格化口吻：

```text
加载 voices/philosophy/nietzsche/SKILL.md。
用尼采式锋利、反从众的口吻改写这段表达：
...
```

## 新增工具

新增 persona 时，从 `templates/persona-skill.md` 开始。

新增 team 时，从 `templates/team-skill.md` 开始。

新增 voice 时，从 `templates/voice-skill.md` 开始。

新增 debate 时，从 `templates/debate-skill.md` 开始。

新增内容必须满足：

- 有 `name` 与中文 `description` frontmatter。
- 明确角色、适用场景、方法、输出契约、交接和护栏。
- 不要求模型扮演历史人物本人。
- 输出服务现实任务，而不是只展示知识或风格模仿。

## 开源状态

本仓库使用 MIT License 发布，适合复制、修改、分发和商用。发布前后的治理检查清单见 `OPEN_SOURCE.md`。

当前仍建议明确的边界是：

- 明确哪些名称、商标和品牌资产可被复用。

## 运行契约

- 输出优先使用清晰中文，工具名、目录名和 persona / team name 保持英文稳定。
- 不要冒充历史人物、艺术家或科学家本人。
- 不要生成空泛评论；每次输出都要服务一个可执行判断。
- 不要默认全员上场；按任务选择 3 到 5 个视角。
- 事实性问题需要区分已知事实、推断和需要外部检索的内容。
