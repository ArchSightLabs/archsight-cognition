# OpenClaw 适配说明

OpenClaw 适合把 ArchSight Cognition 作为多 Agent / 多频道的跨学科评审面板。

默认路由应按任务选择哲学、文学、历史、数学、物理、艺术、方法工具或跨学科 team，不要默认把所有问题都送进哲学面板。

## 推荐路由

| 层级 | 触发 | Prompt |
| --- | --- | --- |
| Simple | 单个概念澄清 | 加载 `personas/philosophy/wittgenstein/SKILL.md` |
| Default | 不知道该用哪个工具 | 加载 `teams/thinking-council/SKILL.md` |
| Medium | 决策、文章、架构、设计、产品、技术领导、教育评审 | 加载 `teams/decision-council/SKILL.md`、`methods/*/SKILL.md` 或任务专用 team |
| Heavy | 多主题辩论或长期计划 | 加载 `cogd-*` debate skill 和选定 persona |

## 可直接粘贴的频道指令

```text
当用户要求决策评审、架构判断、写作反思、研究问题框定或意义分析时，
加载最相关的 ArchSight Cognition team。
把 persona 当作学科思维镜头，而不是历史人物模仿。
把 method 当作去人物中心的可执行方法，不要用活人或个人品牌做 persona / voice。
默认决策路由：Socrates -> Bayes -> Newton -> Braudel -> Aristotle。
不知道该用哪个工具时使用 `cogt-think`。写作任务使用 `cogt-write`。科学推理任务使用 `cogt-science`。产品、体验、视觉和交互任务使用 `cogt-design`。教育、学习路径和亲子成长任务使用 `cogt-learn`。
尾部风险、反脆弱、吸收壁和人本交互这类可执行方法使用 `cogm-*`。
长期议题、结构化分歧和立场压力测试使用 `cogd-*`，通用入口是 `cogd-general`，领域入口例如 `cogd-life`、`cogd-technology`、`cogd-work`。debate 不要强行收敛成共识，要输出对立立场、最强反对意见、不可调和点和行动分叉。
用户明确要求口吻、风格化表达时，使用 `cogv-*`，例如 `cogv-kant` 或 `cogv-nietzsche`。
最终回答必须包含可执行下一步。
```

## 安全

- 不要把 persona 输出当作法律、医疗、金融或心理健康建议。
- 不要让修辞风格压过证据。
- 不要默认运行所有 agent；过多声音会制造噪音。
- `persona` 和 `voice` 只使用已离世人物或稳定历史传统；仍在世人物材料应去人物中心化后进入 `methods/` 或 team 参考材料。
- `cogd-*` 用于保留真实冲突，不用于制造戏剧化争吵。
- `cogv-*` 可以做明确标注的风格化口吻，但不要声称历史人物本人在说话。
