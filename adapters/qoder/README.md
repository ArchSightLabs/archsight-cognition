# Qoder 适配说明

Qoder 支持以 `SKILL.md` 文件夹形式加载自定义 skills。ArchSight Cognition 可以直接安装到 Qoder 的项目级或用户级 skills 目录，作为可按需调用的认知工具库。

## 安装

安装到当前项目：

```powershell
npx @archsight/cognition install qoder
```

安装到用户级 skills：

```powershell
npx @archsight/cognition install qoder --global
```

安装全部 skills：

```powershell
npx @archsight/cognition install qoder --all
```

已存在的 skill 默认不会被覆盖。需要更新时加 `--force`。

## 安装位置

| 模式 | 位置 |
| --- | --- |
| 项目级 | `.qoder/skills/<skill-name>/SKILL.md` |
| 用户级 | `~/.qoder/skills/<skill-name>/SKILL.md` |
| QoderWork 兼容 | 如果已存在 `~/.qoderwork/`，`--global` 会额外写入 `~/.qoderwork/skills/<skill-name>/SKILL.md` |

## 使用

在 Qoder IDE、Quest 或 CLI 中输入 `/` 查看已安装 skills，或在任务中直接指定 skill 名称：

```text
使用 cogt-decide skill 对这个方案做跨学科决策评审，输出风险、反对条件和下一步验证。
```

```text
使用 cogp-meadows skill 分析这个组织问题中的库存、流量、反馈回路和杠杆点。
```

## 维护建议

- 团队项目建议提交 `.qoder/skills/`，个人习惯建议用 `--global`。
- 默认精选集适合日常使用；只有需要完整工具库时再加 `--all`。
- 这些 skills 主要提供判断框架，不需要额外放宽 Qoder 的工具权限。

## 参考

- Qoder Skills 文档：`https://docs.qoder.com/extensions/skills`
- Qoder Rules 文档：`https://docs.qoder.com/user-guide/rules`
