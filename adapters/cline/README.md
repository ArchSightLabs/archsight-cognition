# Cline 适配说明

Cline 支持项目级 `.clinerules/` 和用户级 Rules 目录，也能识别 `AGENTS.md` 等跨工具指令文件。ArchSight Cognition 的 Cline 适配器采用轻量规则指针：安装内容目录，再写入一条规则，指示 Cline 在需要时加载对应 `SKILL.md`。

## 安装

安装到当前项目：

```powershell
npx @archsight/cognition install cline
```

安装到用户级 Cline Rules：

```powershell
npx @archsight/cognition install cline --global
```

已存在的规则文件默认不会被覆盖。需要更新时加 `--force`。

## 安装位置

| 模式 | 位置 |
| --- | --- |
| 项目级内容 | `.archsight-cognition/` |
| 项目级规则 | `.clinerules/archsight-cognition.md` |
| 用户级内容 | `~/Documents/Cline/ArchSight-Cognition/` |
| 用户级规则 | `~/Documents/Cline/Rules/archsight-cognition.md` |

## 使用

在 Cline 中描述任务并点名认知工具，或让规则根据任务自动路由：

```text
使用 cogt-decide 对这个方案做跨学科决策评审。
```

```text
使用 cogp-socrates 先澄清这个需求的概念、边界和关键矛盾。
```

## 维护建议

- Cline 规则是指针，不把全部 skill 内容塞进规则文件，避免上下文膨胀。
- 项目规则适合团队共享；用户级规则适合个人跨项目习惯。
- Cline 也能识别 `AGENTS.md`，如果项目已经用 Codex 入口，可以把 Cline 规则作为更明确的补充。

## 参考

- Cline Rules 文档：`https://docs.cline.bot/customization/cline-rules`
