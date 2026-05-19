# Codex 适配说明

Codex 适合把 ArchSight Cognition 当作本地认知工具库，用于代码之外或代码之前的思考、写作、架构判断、研究问题框定和决策复盘。

Codex 会读取项目中的 `AGENTS.md`。因此最稳的接入方式不是把所有 persona 都塞进 `AGENTS.md`，而是在 `AGENTS.md` 里放一个短路由规则：需要跨学科思考时，按任务加载本仓库里的具体 `SKILL.md` 或 team 文件。

## 安装

### npm / npx 安装

在目标项目根目录执行：

```powershell
npx @archsight/cognition install codex
```

这会创建或更新当前目录的 `AGENTS.md`，写入一个带 marker 的 ArchSight Cognition 指针区块。

同时会把本包内容复制到当前项目的 `.archsight-cognition/`，让 Codex 指向稳定的本地目录，而不是临时 npm cache 路径。

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
- 高风险决策：`teams/decision-council/SKILL.md`
- 文章、叙事和表达：`teams/writing-review-panel/SKILL.md`

不要人格 cosplay。把 persona 当作学科思维工具，而不是历史人物模拟。
```

### 全局安装

如果多个项目都要使用，可以在你的全局 Codex 指令文件中加入同样的指针，并把路径改成固定的本地路径。

建议仍然保留“按任务加载具体文件”的方式，避免每次会话都把全部 persona 放进上下文。

## 使用

在 Codex 中直接说明要加载的工具：

```text
加载 C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council\SKILL.md。
对这个架构决策做跨学科评审，输出风险、反对条件和下一步验证。
```

或者用相对路径：

```text
加载 adapters 旁边的 teams/writing-review-panel/SKILL.md。
评审这篇 README 的定位、结构和开源可读性。
```

## 推荐路由

| 任务 | 推荐工具 |
| --- | --- |
| 需求含混 | `personas/philosophy/socrates/SKILL.md` |
| 概念边界混乱 | `personas/philosophy/wittgenstein/SKILL.md` |
| 论证需要证明结构 | `personas/mathematics/euclid/SKILL.md` |
| 不确定性和证据权重 | `personas/mathematics/bayes/SKILL.md` |
| 约束、变量和系统动态 | `personas/physics/newton/SKILL.md` |
| 高风险决策 | `teams/decision-council/SKILL.md` |
| 技术写作和叙事 | `teams/writing-review-panel/SKILL.md` |
| 科学推理和验证设计 | `teams/scientific-reasoning-panel/SKILL.md` |

## 护栏

- 不要让认知 persona 替代测试、类型检查或真实代码审查。
- 当任务进入实现阶段，回到工程验证。
- 对外部事实、库版本、法律、金融、医疗等高风险信息，必须检索或使用专业来源。
- 不要一次加载所有 persona；按任务选择 1 个 persona 或 1 个 team。

## 参考

- Codex `AGENTS.md` 说明：`https://developers.openai.com/codex/guides/agents-md`
