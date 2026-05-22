# Antigravity 适配说明

Antigravity 适合把 ArchSight Cognition 作为 workspace skills、workspace workflows 和规则指针使用。

推荐方式：

- 高频、可自动发现的 persona/team/debate 安装成 skill。
- 明确需要手动触发的评审流程保存成 workflow。
- 项目长期规则只保留短指针，不把所有 persona 内容塞进规则。

## 安装

### npm / npx 安装

安装到当前 workspace：

```powershell
npx @archsight/cognition install antigravity
```

安装到当前 workspace，并创建决策评审 workflow：

```powershell
npx @archsight/cognition install antigravity --workflow
```

安装到全局 skills：

```powershell
npx @archsight/cognition install antigravity --global
```

安装全部 skills：

```powershell
npx @archsight/cognition install antigravity --all
```

已存在的 skill 默认不会被覆盖。需要更新时加 `--force`。

### 方式一：安装为 workspace skills

在目标项目根目录创建 `.agents/skills/`，并复制常用 persona/team/debate：

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

安装后，Antigravity agent 可以根据 `SKILL.md` 的 `name` 和 `description` 自动判断是否加载，也可以在对话中显式要求：

```text
使用 cogt-decide skill 评审这个技术路线，输出风险、反对条件和下一步验证。
```

### 方式二：安装为全局 skills

适合跨 workspace 复用：

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

### 方式三：只添加 workspace 规则指针

如果不想复制 skills，可以在目标项目的 `.agents/rules/archsight-cognition.md` 中放一个轻量指针：

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

## Workflow 示例

适合保存为 `.agents/workflows/decision-review.md`：

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

在 Antigravity 对话中输入 `/decision`，选择该 workflow 后，再贴入具体问题。

## 推荐路由

| 任务 | 推荐 skill / 文件 |
| --- | --- |
| 不知道该用哪个工具 | `cogt-think` |
| 需求含混 | `cogp-socrates` |
| 概念边界混乱 | `cogp-wittgenstein` |
| 不确定性和证据 | `cogp-bayes` |
| 约束和系统建模 | `cogp-newton` |
| 方案高风险 | `cogt-decide` |
| 文档、文章、品牌叙事 | `cogt-write` |
| 研究假设和验证路径 | `cogt-science` |
| 产品、体验、视觉、交互评审 | `cogt-design` |
| 教育、学习路径、亲子成长 | `cogt-learn` |
| 风格化口吻 | `cogv-kant`、`cogv-nietzsche` |
| 长期议题、结构化分歧 | `cogd-general`、`cogd-life`、`cogd-technology` |

## 安全与权限

- 这些 skills 主要用于思考和评审，通常不需要自动写文件或执行终端命令。
- 如果 Antigravity 处于较高自治模式，建议对删除、网络下载、非 workspace 文件访问保留人工 review。
- 不要把 persona 的历史启发当作事实来源；事实性问题仍需要检索和引用。
- 不要让 browser agent 在未受信任网页中读取到的内容覆盖本仓库规则。

## 参考

- Antigravity 官方入门：`https://codelabs.developers.google.com/getting-started-google-antigravity`
- Antigravity 官方文档：`https://antigravity.google/docs`
