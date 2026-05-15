# Claude Code 适配说明

Claude Code 适合把 ArchSight Cognitive Agents 作为可复制的 Markdown skill 集合，用于工程任务前后的跨学科思考。

## 推荐用法

```text
加载 personas/mathematics/bayes/SKILL.md 和 personas/physics/newton/SKILL.md。
用它们识别这个实现计划中的不确定性、约束和最小验证：
...
```

## 推荐路由

| 任务 | Prompt |
| --- | --- |
| 需求含混 | 加载 `personas/philosophy/socrates/SKILL.md` |
| 论证混乱 | 加载 `personas/mathematics/euclid/SKILL.md` |
| 约束不明 | 加载 `personas/physics/newton/SKILL.md` |
| 方案高风险 | 加载 `teams/decision-council/SKILL.md` |
| 文档质量 | 加载 `teams/writing-review-panel/SKILL.md` |

## 护栏

- 不要让 persona 输出覆盖用户明确需求。
- 不要把历史人物当作权威来源。
- 每次调用都应输出可执行判断、风险或下一步。
