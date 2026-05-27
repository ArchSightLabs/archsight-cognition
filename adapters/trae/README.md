# Trae 适配说明

Trae 支持项目级 skills，并在新版中支持从 `.agents/skills` 目录加载 Skill plugins。ArchSight Cognition 复用这个目录，把认知工具安装为项目级 `SKILL.md`。

## 安装

安装默认精选 skills：

```powershell
npx @archsight/cognition install trae
```

安装到全局 skills：

```powershell
npx @archsight/cognition install trae --global
```

安装全部 skills：

```powershell
npx @archsight/cognition install trae --all
```

已存在的 skill 默认不会被覆盖。需要更新时加 `--force`。

## 安装位置

| 模式 | 位置 |
| --- | --- |
| 项目级 | `.agents/skills/<skill-name>/SKILL.md` |
| 全局 | `~/.trae/skills/<skill-name>/SKILL.md` |
| Trae CN 兼容 | 如果已存在 `~/.trae-cn/`，`--global` 会额外写入 `~/.trae-cn/skills/<skill-name>/SKILL.md` |

Trae 的个人规则、项目规则和自定义智能体可以继续在 Trae 内部维护。本适配器只写入 skills，不修改模型、MCP 或自动运行设置。

## 使用

在 Trae IDE 或 SOLO 中明确指定要使用的认知工具：

```text
使用 cogt-think skill 判断这个问题该用哪些认知工具，并给出下一步。
```

```text
使用 cogt-product skill 评审这个产品方向的定位、最小验证和取舍。
```

```text
使用 cogp-bayes skill 评估这个增长假设的证据强度和下一步实验。
```

## 维护建议

- 团队项目建议提交 `.agents/skills/`；个人跨项目习惯建议用 `--global`。
- 如果团队同时使用 Antigravity，`.agents/skills/` 可以复用同一批 ArchSight Cognition skills。
- 这些 skills 是判断框架，不是自动执行脚本；不要因为安装它们而放宽命令自动运行权限。

## 参考

- Trae 更新日志：`https://www.trae.ai/changelog`
- Trae 中国版更新日志：`https://www.trae.cn/changelog`
- Trae 官方社区全局 skills 路径说明：`https://forum.trae.cn/t/topic/1098`
