# WorkBuddy 适配说明

WorkBuddy 可以从个人 skills 目录读取 Markdown skill。ArchSight Cognition 可以直接安装到 `~/.workbuddy/skills/<skill-name>/SKILL.md`，作为可按需加载的认知工具库。

## 安装

安装默认精选 skills：

```powershell
npx @archsight/cognition install workbuddy
```

安装全部 skills：

```powershell
npx @archsight/cognition install workbuddy --all
```

已存在的 skill 默认不会被覆盖。需要更新时加 `--force`。

## 安装位置

| 模式 | 位置 |
| --- | --- |
| 个人全局 | `~/.workbuddy/skills/<skill-name>/SKILL.md` |

## 使用

在 WorkBuddy 中按 skill 名称调用或明确指定要使用的认知工具：

```text
使用 cogt-think skill 判断这个问题该用哪些认知工具，并给出下一步。
```

```text
使用 cogt-decide skill 对这个方案做跨学科决策评审，输出风险、反对条件和下一步验证。
```

```text
使用 cogp-bayes skill 评估这个产品假设的证据强度和最小验证实验。
```

## 维护建议

- 优先安装默认精选集，避免 WorkBuddy skill 列表过长。
- WorkBuddy 目标固定写入个人目录；不区分项目级和全局安装。
- 这些 skills 主要提供判断框架，不需要额外放宽工具权限。
