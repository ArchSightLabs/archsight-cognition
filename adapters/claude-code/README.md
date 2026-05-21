# Claude Code 适配说明

Claude Code 适合把 ArchSight Cognition 作为 Markdown skills 使用。常用 persona 和 team 可以安装到 `.claude/skills/<skill-name>/SKILL.md`，然后用 `/skill-name` 直接调用。

Claude Code 的 skill 机制会读取 `SKILL.md` 的 frontmatter 和正文。本仓库的 persona/team 已按这种形态组织，因此可以直接复制或链接使用。

## 安装

### npm / npx 安装

安装到当前项目：

```powershell
npx @archsight/cognition install claude-code
```

安装到个人全局 skills：

```powershell
npx @archsight/cognition install claude-code --global
```

安装全部 skills：

```powershell
npx @archsight/cognition install claude-code --all
```

已存在的 skill 默认不会被覆盖。需要更新时加 `--force`。

### 方式一：安装到当前项目

适合只在某个项目里使用。

```powershell
mkdir .claude\skills
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\thinking-council .claude\skills\cogt-think -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council .claude\skills\cogt-decide -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\writing-review .claude\skills\cogt-write -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\design-review .claude\skills\cogt-design -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\learning-path .claude\skills\cogt-learn -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates .claude\skills\cogp-socrates -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\mathematics\bayes .claude\skills\cogp-bayes -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\physics\newton .claude\skills\cogp-newton -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\voices\philosophy\kant .claude\skills\cogv-kant -Recurse
```

### 方式二：安装到个人全局 skills

适合跨项目复用。

```powershell
mkdir $HOME\.claude\skills
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\thinking-council $HOME\.claude\skills\cogt-think -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council $HOME\.claude\skills\cogt-decide -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\writing-review $HOME\.claude\skills\cogt-write -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\design-review $HOME\.claude\skills\cogt-design -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\learning-path $HOME\.claude\skills\cogt-learn -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates $HOME\.claude\skills\cogp-socrates -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\mathematics\bayes $HOME\.claude\skills\cogp-bayes -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\physics\newton $HOME\.claude\skills\cogp-newton -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\voices\philosophy\kant $HOME\.claude\skills\cogv-kant -Recurse
```

### macOS / Linux 示例

```bash
mkdir -p ~/.claude/skills
cp -R ~/work/archsight-cognition/teams/thinking-council ~/.claude/skills/cogt-think
cp -R ~/work/archsight-cognition/teams/decision-council ~/.claude/skills/cogt-decide
cp -R ~/work/archsight-cognition/teams/writing-review ~/.claude/skills/cogt-write
cp -R ~/work/archsight-cognition/teams/design-review ~/.claude/skills/cogt-design
cp -R ~/work/archsight-cognition/teams/learning-path ~/.claude/skills/cogt-learn
cp -R ~/work/archsight-cognition/personas/philosophy/socrates ~/.claude/skills/cogp-socrates
cp -R ~/work/archsight-cognition/personas/mathematics/bayes ~/.claude/skills/cogp-bayes
cp -R ~/work/archsight-cognition/personas/physics/newton ~/.claude/skills/cogp-newton
cp -R ~/work/archsight-cognition/voices/philosophy/kant ~/.claude/skills/cogv-kant
```

## 使用

在 Claude Code 中启动项目后，直接调用：

```text
/cogt-think
我不知道该用哪个视角，请先帮我判断问题类型并给出下一步。
```

```text
/cogt-decide
对这个架构方案做一次跨学科决策评审，输出风险、反对条件和下一步验证。
```

```text
/cogt-write
评审这篇文章的结构、叙事张力、论证清晰度和可执行修改建议。
```

```text
/cogt-design
评审这个产品界面的信息架构、视觉层级和交互风险。
```

```text
/cogt-learn
帮我分析这个学习路径和亲子沟通问题，给出下一步。
```

```text
/cogp-bayes
评估这个产品假设的证据强度、不确定性和最小验证实验。
```

```text
/cogv-kant
用康德式克制、原则优先的口吻回应这段话。
```

## 推荐路由

| 任务 | Skill |
| --- | --- |
| 不知道该用哪个工具 | `/cogt-think` |
| 需求含混 | `/cogp-socrates` |
| 论证混乱 | `/cogp-euclid` |
| 概率、证据和不确定性 | `/cogp-bayes` |
| 约束不明 | `/cogp-newton` |
| 方案高风险 | `/cogt-decide` |
| 文档质量 | `/cogt-write` |
| 研究和验证路径 | `/cogt-science` |
| 产品、体验、视觉、交互评审 | `/cogt-design` |
| 教育、学习路径、亲子成长 | `/cogt-learn` |
| 风格化口吻 | `/cogv-kant`、`/cogv-nietzsche` |

## 维护建议

- 优先只安装高频工具，避免 `/` 命令列表过长。
- 修改原仓库后，如果使用复制安装，需要重新复制对应目录。
- 如果使用符号链接或目录链接，要确保团队成员的本地路径一致。
- 不要给这些 skill 配置宽泛工具权限；它们主要是认知和评审工具，不需要自动执行危险命令。

## 护栏

- 不要让 persona 输出覆盖用户明确需求。
- 不要把历史人物当作权威来源。
- 每次调用都应输出可执行判断、风险或下一步。
- 对事实性、法律、医疗、金融和安全问题，必须要求来源和验证。

## 参考

- Claude Code Skills 文档：`https://code.claude.com/docs/en/skills`
