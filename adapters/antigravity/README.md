# Antigravity 适配说明

Antigravity 适合把 ArchSight Cognition 作为全局 skills / plugins 使用；workspace skills 和 workflows 主要作为 IDE 不识别全局安装时的 fallback。

推荐方式：

- 优先全局安装一次，避免每个项目重复复制。
- 高频、可自动发现的 persona/team/debate 安装成 skill 和 plugin。
- 明确需要手动触发的评审流程可保存成 workspace workflow。
- 项目长期规则只保留短指针，不把所有 persona 内容塞进规则。

## 安装

### npm / npx 安装

推荐：安装到全局 skills / plugin：

```powershell
npx @archsight/cognition install antigravity --global --force
```

该命令会安装官方 plugin 结构，并在检测到 1.x legacy 目录时兼容写入 legacy skills：

```text
~/.gemini/config/plugins/archsight-cognition/ # 2.x 官方第三方 plugin 目录
~/.gemini/antigravity/skills       # 仅当 ~/.gemini/antigravity/ 已存在时写入，用于 1.x legacy 兼容
```

这里不使用符号链接。Antigravity 2.x 的第三方包推荐使用 plugin 结构；plugin 可以包含 skills、rules、MCP 和 hooks，本包目前先提供 skills。安装器不会主动创建 `antigravity-cli/skills` 或 `antigravity-ide/skills`。

IDE fallback：安装到当前 workspace：

```powershell
npx @archsight/cognition install antigravity --force
```

只有 Antigravity IDE 模式不识别全局 skills / plugin 时，才需要在 IDE 打开的项目根目录执行 workspace 安装。它会同时安装 `.agents/skills/`、`.agents/plugins/archsight-cognition/` 和 `.agents/workflows/decision-review.md`。

安装全部 skills：

```powershell
npx @archsight/cognition install antigravity --global --all
```

已存在的 skill 默认不会被覆盖。需要更新时加 `--force`。

本仓库维护时已验证安装器行为：workspace fallback 会写入 `.agents/skills/`、`.agents/plugins/archsight-cognition/` 和 `.agents/workflows/decision-review.md`；global 安装会写入 `~/.gemini/config/plugins/archsight-cognition/`，仅当 `~/.gemini/antigravity/` 已存在时才兼容写入 legacy skills。

### 方式一：安装为全局 skills 和 plugin

适合跨 workspace 复用，也是推荐方式：

```powershell
npx @archsight/cognition install antigravity --global --force
```

Antigravity 2.x 的官方第三方包路径是 `~/.gemini/config/plugins/`。如果 `~/.gemini/antigravity/` 已存在，安装器会额外写入 `~/.gemini/antigravity/skills/` 用于 1.x legacy 兼容；如果不存在，就假设当前环境已经是 2.x，不主动创建 legacy 目录。

### 方式二：安装为 workspace skills 和 plugin

仅在 IDE 不识别全局安装时使用。在目标项目根目录执行：

```powershell
npx @archsight/cognition install antigravity --force
```

安装后会得到：

```text
.agents/skills/<skill-name>/SKILL.md
.agents/plugins/archsight-cognition/plugin.json
.agents/plugins/archsight-cognition/skills/<skill-name>/SKILL.md
.agents/workflows/decision-review.md
```

安装后，Antigravity agent 可以根据 `SKILL.md` 的 `name` 和 `description` 自动判断是否加载，也可以在对话中显式要求：

```text
使用 cogt-decide skill 评审这个技术路线，输出风险、反对条件和下一步验证。
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
- 产品战略、定位和最小验证：`teams/product/SKILL.md`
- 技术领导、研发组织和交付反馈：`teams/lead/SKILL.md`
- 教育、学习路径和亲子成长：`teams/learning-path/SKILL.md`

综合 team 工具统一使用短命令，例如 `cogt-think`、`cogt-decide`、`cogt-write`、`cogt-design`、`cogt-product`、`cogt-lead`、`cogt-learn`。
单个 persona 工具统一使用 `cogp-` 前缀，例如 `cogp-socrates`、`cogp-bayes`、`cogp-newton`。
方法工具统一使用 `cogm-` 前缀，例如 `cogm-critical-thinking`、`cogm-structured-problem-solving`、`cogm-first-principles`。
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
| 中国思想、中文叙事和组织传播 | `cogp-confucius`、`cogp-xunzi`、`cogp-sunzi`、`cogp-fei-xiaotong`、`cogp-qian-zhongshu` |
| 中文风格化口吻 | `cogv-sushi`、`cogv-qian-zhongshu`、`cogv-ouyang-xiu`、`cogv-luxun` |
| 长期议题、结构化分歧 | `cogd-general`、`cogd-life`、`cogd-technology`、`cogd-technology-humanities` |

## 安全与权限

- 这些 skills 主要用于思考和评审，通常不需要自动写文件或执行终端命令。
- 如果 Antigravity 处于较高自治模式，建议对删除、网络下载、非 workspace 文件访问保留人工 review。
- 不要把 persona 的历史启发当作事实来源；事实性问题仍需要检索和引用。
- 不要让 browser agent 在未受信任网页中读取到的内容覆盖本仓库规则。

## 参考

- Antigravity 官方入门：`https://codelabs.developers.google.com/getting-started-google-antigravity`
- Antigravity 官方文档：`https://antigravity.google/docs`
