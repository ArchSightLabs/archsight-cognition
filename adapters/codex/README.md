# Codex Adapter Notes

Codex 适合把 ArchSight Cognitive Agents 当作本地 prompt/skill 模板库，用于代码之外的思考、写作、架构判断和研究 framing。

## Suggested Usage

```text
Load teams/decision-council/SKILL.md.
Review this architecture decision using values, history, math, physics constraints, and practical execution.
Return concise Chinese output with risks and next steps.
```

## Good Fits

- 架构方案评审前，用 `decision-council` 检查价值、约束和不确定性。
- 技术写作前，用 `writing-review-panel` 检查结构和表达。
- 调研计划前，用 `scientific-reasoning-panel` 明确假设和验证路径。

## Guardrails

- 不要让认知 persona 替代测试、类型检查或真实代码审查。
- 当任务进入实现阶段，回到工程验证。
- 对外部事实、库版本、法律/金融/医疗等高风险信息，必须检索或使用专业来源。
