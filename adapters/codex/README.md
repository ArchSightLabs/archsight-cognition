# Codex 适配说明

Codex 适合把 ArchSight Cognition 当作本地认知工具库，用于代码之外或代码之前的思考、写作、架构判断、研究问题框定和决策复盘。

Codex 会读取全局和项目中的 `AGENTS.md`。因此最稳的接入方式不是把所有 persona 都塞进 `AGENTS.md`，而是在 `AGENTS.md` 里放一个短路由规则：需要跨学科思考时，按任务加载本仓库里的具体 `SKILL.md` 或 team 文件。

Codex 的全局位置是 `CODEX_HOME/AGENTS.md`；如果没有设置 `CODEX_HOME`，默认是 `~/.codex/AGENTS.md`。项目级 `AGENTS.md` 会和全局指导合并，离当前目录更近的项目规则优先级更高。

## 安装

### npm / npx 安装

在目标项目根目录执行：

```powershell
npx @archsight/cognition install codex
```

这会创建或更新当前目录的 `AGENTS.md`，写入一个带 marker 的 ArchSight Cognition 指针区块。

同时会把本包内容复制到当前项目的 `.archsight-cognition/`，让 Codex 指向稳定的本地目录，而不是临时 npm cache 路径。
常用 `cogt-*` / `cogp-*` / `cogv-*` 也会注册到 `CODEX_HOME\skills`；未设置 `CODEX_HOME` 时使用 `~\.codex\skills`。

安装到全局 Codex 指令：

```powershell
npx @archsight/cognition install codex --global
```

这会把内容复制到 `CODEX_HOME\archsight-cognition` 或 `~\.codex\archsight-cognition`，把常用 `cogt-*` / `cogp-*` / `cogv-*` 注册到 Codex skills，并更新对应的全局 `AGENTS.md`。

如果要注册全部 persona、team 和 voice：

```powershell
npx @archsight/cognition install codex --global --all --force
```

如果已经存在该区块，默认不会覆盖；需要更新时执行：

```powershell
npx @archsight/cognition install codex --force
```

### 项目级安装

把本仓库作为相邻目录或子目录克隆到你的工作区：

```powershell
git clone <repo-url> C:\Work\ArchSightLabs\archsight-cognition
```

然后在目标项目的 `AGENTS.md` 中加入一段指针：

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
- 文章、叙事和表达：`teams/writing-review/SKILL.md`
- 产品、体验、视觉和交互：`teams/design-review/SKILL.md`
- 教育、学习路径和亲子成长：`teams/learning-path/SKILL.md`

综合 team 工具统一使用短命令，例如 `cogt-think`、`cogt-decide`、`cogt-write`、`cogt-design`、`cogt-learn`。
单个 persona 工具统一使用 `cogp-` 前缀，例如 `cogp-socrates`、`cogp-bayes`、`cogp-newton`。
风格化口吻工具统一使用 `cogv-` 前缀，例如 `cogv-kant`、`cogv-nietzsche`。`cogv-*` 只用于口吻和表达风格，不声称历史人物本人在说话。

不要人格 cosplay。把 persona 当作学科思维工具，而不是历史人物模拟。
```

### 全局安装

如果多个项目都要使用，可以在你的全局 Codex 指令文件中加入同样的指针，并把路径改成固定的本地路径。

建议仍然保留“按任务加载具体文件”的方式，避免每次会话都把全部 persona 放进上下文。

## 使用

在 Codex 中可以直接使用注册后的 skill：

```text
/cogp-socrates
帮我澄清这个产品问题。
```

也可以直接说明要加载的工具：

```text
加载 C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council\SKILL.md。
对这个架构决策做跨学科评审，输出风险、反对条件和下一步验证。
```

或者用相对路径：

```text
加载 adapters 旁边的 teams/writing-review/SKILL.md。
评审这篇 README 的定位、结构和开源可读性。
```

风格化口吻工具使用 `voices/`：

```text
加载 voices/philosophy/kant/SKILL.md。
用康德式克制、原则优先的口吻改写这段回应。
```

## 推荐路由

| 任务 | 推荐 skill | 文件 |
| --- | --- | --- |
| 不知道该用哪个工具 | `cogt-think` | `teams/thinking-council/SKILL.md` |
| 需求含混 | `cogp-socrates` | `personas/philosophy/socrates/SKILL.md` |
| 概念边界混乱 | `cogp-wittgenstein` | `personas/philosophy/wittgenstein/SKILL.md` |
| 论证需要证明结构 | `cogp-euclid` | `personas/mathematics/euclid/SKILL.md` |
| 不确定性和证据权重 | `cogp-bayes` | `personas/mathematics/bayes/SKILL.md` |
| 约束、变量和系统动态 | `cogp-newton` | `personas/physics/newton/SKILL.md` |
| 高风险决策 | `cogt-decide` | `teams/decision-council/SKILL.md` |
| 技术写作和叙事 | `cogt-write` | `teams/writing-review/SKILL.md` |
| 科学推理和验证设计 | `cogt-science` | `teams/scientific-reasoning/SKILL.md` |
| 产品、体验、视觉、交互评审 | `cogt-design` | `teams/design-review/SKILL.md` |
| 教育、学习路径、亲子成长 | `cogt-learn` | `teams/learning-path/SKILL.md` |
| 风格化口吻 | `cogv-kant` / `cogv-nietzsche` | `voices/philosophy/kant/SKILL.md` |

## 护栏

- 不要让认知 persona 替代测试、类型检查或真实代码审查。
- 当任务进入实现阶段，回到工程验证。
- 对外部事实、库版本、法律、金融、医疗等高风险信息，必须检索或使用专业来源。
- 不要一次加载所有 persona；按任务选择 1 个 persona 或 1 个 team。

## 参考

- Codex `AGENTS.md` 说明：`https://developers.openai.com/codex/guides/agents-md`
