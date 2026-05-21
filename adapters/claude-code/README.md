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
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council .claude\skills\cog-decision-council -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\writing-review .claude\skills\cog-writing-review -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates .claude\skills\cog-socrates -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\mathematics\bayes .claude\skills\cog-bayes -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\physics\newton .claude\skills\cog-newton -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\voices\philosophy\kant .claude\skills\cogv-kant -Recurse
```

### 方式二：安装到个人全局 skills

适合跨项目复用。

```powershell
mkdir $HOME\.claude\skills
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council $HOME\.claude\skills\cog-decision-council -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\teams\writing-review $HOME\.claude\skills\cog-writing-review -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates $HOME\.claude\skills\cog-socrates -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\mathematics\bayes $HOME\.claude\skills\cog-bayes -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\personas\physics\newton $HOME\.claude\skills\cog-newton -Recurse
Copy-Item C:\Work\ArchSightLabs\archsight-cognition\voices\philosophy\kant $HOME\.claude\skills\cogv-kant -Recurse
```

### macOS / Linux 示例

```bash
mkdir -p ~/.claude/skills
cp -R ~/work/archsight-cognition/teams/decision-council ~/.claude/skills/cog-decision-council
cp -R ~/work/archsight-cognition/teams/writing-review ~/.claude/skills/cog-writing-review
cp -R ~/work/archsight-cognition/personas/philosophy/socrates ~/.claude/skills/cog-socrates
cp -R ~/work/archsight-cognition/personas/mathematics/bayes ~/.claude/skills/cog-bayes
cp -R ~/work/archsight-cognition/personas/physics/newton ~/.claude/skills/cog-newton
cp -R ~/work/archsight-cognition/voices/philosophy/kant ~/.claude/skills/cogv-kant
```

## 使用

在 Claude Code 中启动项目后，直接调用：

```text
/cog-decision-council
对这个架构方案做一次跨学科决策评审，输出风险、反对条件和下一步验证。
```

```text
/cog-writing-review
评审这篇文章的结构、叙事张力、论证清晰度和可执行修改建议。
```

```text
/cog-bayes
评估这个产品假设的证据强度、不确定性和最小验证实验。
```

```text
/cogv-kant
用康德式克制、原则优先的口吻回应这段话。
```

## 推荐路由

| 任务 | Skill |
| --- | --- |
| 需求含混 | `/cog-socrates` |
| 论证混乱 | `/cog-euclid` |
| 概率、证据和不确定性 | `/cog-bayes` |
| 约束不明 | `/cog-newton` |
| 方案高风险 | `/cog-decision-council` |
| 文档质量 | `/cog-writing-review` |
| 研究和验证路径 | `/cog-scientific-reasoning` |
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
