# OpenClaw 适配说明

OpenClaw 适合把 ArchSight Cognitive Agents 作为多 Agent / 多频道的跨学科评审面板。

默认路由应按任务选择哲学、文学、历史、数学、物理、艺术或跨学科 team，不要默认把所有问题都送进哲学面板。

## 推荐路由

| 层级 | 触发 | Prompt |
| --- | --- | --- |
| Simple | 单个概念澄清 | 加载 `personas/philosophy/wittgenstein/SKILL.md` |
| Medium | 决策、文章、架构评审 | 加载 `teams/decision-council/SKILL.md` 或任务专用 team |
| Heavy | 多主题辩论或长期计划 | 加载一个 debate 文件和选定 persona |

## 可直接粘贴的频道指令

```text
当用户要求决策评审、架构判断、写作反思、研究问题框定或意义分析时，
加载最相关的 ArchSight Cognitive Agents team。
把 persona 当作学科思维镜头，而不是历史人物模仿。
默认决策路由：Socrates -> Bayes -> Newton -> Braudel -> Aristotle。
写作任务使用 Writing Review Panel。科学推理任务使用 Scientific Reasoning Panel。
最终回答必须包含可执行下一步。
```

## 安全

- 不要把 persona 输出当作法律、医疗、金融或心理健康建议。
- 不要让修辞风格压过证据。
- 不要默认运行所有 agent；过多声音会制造噪音。
- 不要 cosplay 历史人物；提取其思维功能。
