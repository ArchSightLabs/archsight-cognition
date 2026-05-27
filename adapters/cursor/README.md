# Cursor 适配说明

Cursor 支持项目级 `.cursor/rules/*.mdc` 规则，也支持 `AGENTS.md` 作为简单跨工具指令。ArchSight Cognition 的 Cursor 适配器采用项目级规则指针：复制内容目录，再写入 `archsight-cognition.mdc`，让 Cursor Agent 在需要时加载对应 `SKILL.md`。

## 安装

安装到当前项目：

```powershell
npx @archsight/cognition install cursor
```

已存在的规则文件默认不会被覆盖。需要更新时加 `--force`。

## 安装位置

| 模式 | 位置 |
| --- | --- |
| 项目级内容 | `.archsight-cognition/` |
| 项目级规则 | `.cursor/rules/archsight-cognition.mdc` |

Cursor 的 User Rules 需要在 Cursor 设置中维护；当前 CLI 不写入未稳定公开的全局规则文件位置。

## 使用

在 Cursor Agent 中点名认知工具，或让规则根据任务自动路由：

```text
使用 cogt-think 判断这个问题该用哪些认知工具，并给出下一步。
```

```text
使用 cogt-design 评审这个页面的信息架构、交互模型和视觉系统。
```

```text
使用 cogp-meadows 分析这个留存问题中的库存、流量、反馈回路和杠杆点。
```

## 维护建议

- Cursor 规则采用 `.mdc`，保留 `description`，让 Agent 可以按需选择。
- 不建议把所有 `SKILL.md` 内容直接展开到 `.cursor/rules`，否则会污染每次对话上下文。
- 如果项目已经有 `AGENTS.md`，Cursor 也可能读取它；本 adapter 仍保留 `.cursor/rules`，方便 Cursor 用户在 Rules 面板中查看和开关。

## 参考

- Cursor Rules 文档：`https://docs.cursor.com/en/context`
