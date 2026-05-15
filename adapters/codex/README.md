# Codex 适配说明

Codex 适合把 ArchSight Cognitive Agents 当作本地提示词 / skill 模板库，用于代码之外的思考、写作、架构判断和研究问题框定。

## 推荐用法

```text
加载 teams/decision-council/SKILL.md。
用价值、历史、数学结构、物理约束和实践落地视角评审这个架构决策。
用简洁中文返回风险和下一步。
```

## 适合场景

- 架构方案评审前，用 `decision-council` 检查价值、约束和不确定性。
- 技术写作前，用 `writing-review-panel` 检查结构和表达。
- 调研计划前，用 `scientific-reasoning-panel` 明确假设和验证路径。

## 护栏

- 不要让认知 persona 替代测试、类型检查或真实代码审查。
- 当任务进入实现阶段，回到工程验证。
- 对外部事实、库版本、法律/金融/医疗等高风险信息，必须检索或使用专业来源。
