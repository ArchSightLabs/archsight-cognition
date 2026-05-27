# 蒸馏强化基线

本文件记录当前已经通过女娲式调研前处理或人工强化的认知工具，用作后续继续强化剩余 persona、team 和 adapter 的施工基线。

这里的“蒸馏”不是把人物写成角色扮演脚本，而是先收集材料、提炼心智模型，再回到 ArchSight Cognition 的治理模板，改写为可审查、可组合、非 cosplay 的思维工具。

## 状态定义

| 状态 | 含义 | 验收标准 |
| --- | --- | --- |
| `六维蒸馏完成` | 已按女娲式六维研究结构沉淀材料，并有对应 `SKILL.md` | 存在 `references/research/01-06` 六个文件，`SKILL.md` 有角色、方法、输出契约、失败模式、验证逻辑、边界测试和护栏 |
| `技能强化完成` | `SKILL.md` 已补强为可用认知工具，但尚未拆成六维研究文件 | `SKILL.md` 不空泛，能稳定约束输出，有失败模式、验证逻辑和边界测试 |
| `待蒸馏` | 仍停留在较短 persona 或需要补足证据链 | 需要先做材料收集和六维研究，再改写 `SKILL.md` |

## 六维蒸馏完成

| 工具 | 路径 | 主要补强点 |
| --- | --- | --- |
| `cogp-kahneman` | `personas/decision/kahneman/` | 系统 1/2、基准率、规划谬误、噪声、决策卫生和外部视角 |
| `cogp-drucker` | `personas/decision/drucker/` | 外部结果、贡献、知识工作者、反馈分析、弃绝机制和最小管理动作 |
| `cogp-simon` | `personas/decision/simon/` | 有限理性、满意解、搜索成本、注意力约束、组织程序和 AI 边界 |
| `cogp-meadows` | `personas/systems/meadows/` | 库存/流量、反馈回路、延迟、杠杆点、系统目标和小实验 |
| `cogp-turing` | `personas/computation/turing/` | 可计算性、可判定性、状态机、停机条件、人机分工和自动化边界 |
| `cogp-munger` | `personas/decision/munger/` | 多元模型、逆向思考、激励机制、能力圈和误判清单 |
| `cogp-godel` | `personas/mathematics/godel/` | 形式系统边界、不完备性、自指、元层级和证明限制 |
| `cogp-shannon` | `personas/information/shannon/` | 信号、噪声、编码、信道容量、冗余、压缩和沟通失真 |
| `cogp-feynman` | `personas/science/feynman/` | 简单解释、反自欺、具体例子、量纲直觉和实验手感 |
| `cogp-popper` | `personas/science/popper/` | 可证伪性、严厉测试、反证条件、事后逃逸和科学边界 |
| `cogp-rams` | `personas/art/rams/` | 有用性、诚实性、克制、可理解性、耐久性和少而精 |
| `cogp-weber` | `personas/sociology/weber/` | 合法性、官僚制、权威类型、理性化、责任伦理和制度责任 |
| `cogp-hanfeizi` | `personas/philosophy/hanfeizi/` | 法、术、势、名实、赏罚、规则漏洞、执行约束和反德性依赖 |
| `cogp-grove` | `personas/decision/grove/` | 高输出管理、战略拐点、十倍力、管理杠杆、OKR、任务成熟度和事实辩论 |
| `cogp-christensen` | `personas/decision/christensen/` | 颠覆式创新、非消费、低端进入、价值网络、商业模式、模块化和 JTBD |

每个完成项必须包含：

```text
references/research/
├── 01-writings.md
├── 02-conversations.md
├── 03-expression-dna.md
├── 04-external-views.md
├── 05-decisions.md
└── 06-timeline.md
```

## 技能强化完成

| 工具 | 路径 | 当前状态 |
| --- | --- | --- |
| `cogt-product` | `teams/product/` | 已新增产品战略、定位、最小验证和取舍综合工具，并补充 team 组合依据与典型任务样例 |
| `cogt-lead` | `teams/lead/` | 已新增技术领导、研发组织、交付反馈和责任边界综合工具，并补充 team 组合依据与典型任务样例 |
| `cogm-critical-thinking` | `methods/critical-thinking/` | 已新增主张、前提、证据、推理漏洞、替代解释和结论强度审查工具 |
| `cogm-auto` | `methods/auto/` | 已新增方法自动路由工具，按任务选择优先级、因果、简化或决策方法 |
| `cogm-priority-triage` | `methods/priority-triage/` | 已新增艾森豪威尔矩阵、帕累托、三七法则、史特金过滤、不要做清单和阻力路径检查 |
| `cogm-causal-failure-analysis` | `methods/causal-failure-analysis/` | 已新增鱼骨图、从结果反推原因、多米诺链条、墨菲检查和反向思考工具 |
| `cogm-simplicity-filter` | `methods/simplicity-filter/` | 已新增奥卡姆剃刀、史特金过滤、帕累托、黑天鹅边界和系统 2 慢思考工具 |
| `cogm-decision-heuristics` | `methods/decision-heuristics/` | 已新增遗憾最小化、鲍威尔信息窗口、黄金法则、贝叶斯更新和系统 2 检查工具 |
| `cogm-first-principles` | `methods/first-principles/` | 已新增第一性约束拆解、惯性假设清理、必要推导和最小实验方法工具 |
| `cogm-human-centered-interaction` | `methods/human-centered-interaction/` | 已迁移为人本交互方法工具，聚焦概念模型、指示符、映射、反馈、约束和错误恢复 |
| `cogm-parallel-thinking` | `methods/parallel-thinking/` | 已新增平行思考工具，按事实、感受、风险、收益、创意和流程分离讨论视角 |
| `cogm-structured-problem-solving` | `methods/structured-problem-solving/` | 已新增问题定义、议题树、MECE、假设驱动、so-what 和工作计划工具 |
| `cogm-operating-principles` | `methods/operating-principles/` | 已新增原则化决策、复盘更新、适用边界和例外条件工具 |
| `cogm-management-hygiene` | `methods/management-hygiene/` | 已新增会议、授权、责任、目标、反馈和管理者噪音检查工具 |
| `cogm-business-logic` | `methods/business-logic/` | 已新增商业底层逻辑、交易结构、利益关系、关键变量和假设验证工具 |
| `cogm-integrative-options` | `methods/integrative-options/` | 已新增冲突、谈判、分歧和第三选择方法工具 |
| `cogm-principled-effectiveness` | `methods/principled-effectiveness/` | 已新增原则化效能、角色目标、优先级、互信协作和持续更新工具 |
| `cogm-tail-risk` | `methods/tail-risk/` | 已迁移为尾部风险方法工具，聚焦反脆弱、凸性、吸收壁、遍历性和风险承担不对称 |

这些工具已经能作为工作入口使用。`cogm-*` 不默认补人物六维研究目录，而是使用方法参考三件套：`references/sources.md`、`references/usage-notes.md`、`references/validation-cases.md`。如果某个 method 来自复杂学派、专业领域或高风险实践，可以额外补充 `references/research/`。

## 后续强化流程

1. **选择目标**
   - 优先选择当前项目短板明显、且能改善真实工作判断的工具。
   - 人物 persona 优先补 `references/research/01-06`。
   - 方法工具优先补 `references/sources.md`、`references/usage-notes.md`、`references/validation-cases.md`。
   - team 工具优先补成员边界、输出契约和交接逻辑。

2. **女娲式调研前处理**
   - 收集一手材料和高质量二手材料。
   - persona 按六维研究文件拆分：著作、访谈/公共表达、表达 DNA、外部评价、关键决策、时间线。
   - method 按轻量三件套拆分：来源和适配依据、使用边界、验证案例。
   - 对每个候选模型做三重验证：跨域复现、生成力、排他性。

3. **回到 ArchSight 模板**
   - `SKILL.md` 只写成思维工具，不写成历史人物本人。
   - 必须包含角色、适用场景、方法、输出契约、失败模式、验证逻辑、边界测试、交接和护栏。
   - 对事实性、历史性和专业性内容，区分来源事实、解释和本项目适配。

4. **验证**
   - 运行 `npm run validate:skills`。
   - 检查新增 persona 是否有 `SKILL.md` 和完整研究目录。
   - 检查新增 method 是否有 `SKILL.md` 和三件套参考材料。
   - 检查 README、adapter alias 和默认安装列表是否需要同步。

## 下一批建议

优先级建议：

1. `cogp-engelbart`、`cogp-licklider`：人机协同、增强智能、交互式计算、网络化知识工作和工具扩展心智。
2. `cogp-wiener`、`cogp-ashby`：控制论、反馈、通信、调节、必要变异度和复杂系统治理。
3. `cogt-product`、`cogt-lead`：后续可继续增加真实项目样例、反例库和 host 调用示例。
4. 继续补齐更多现代技术管理、组织执行和创新战略工具时，人物 persona 保持六维研究目录完整；method 保持三件套参考材料完整。

## 活人材料筛查

后续新增 `cogp-*` 和 `cogv-*` 时，必须只使用已离世人物或稳定历史传统。仍在世、职业活动仍在进行、历史评价尚未稳定的人物，尤其是仍和具体公司、投资、政治监管或商业利益绑定的企业家，不进入 persona 或 voice；若确有方法价值，只能去人物中心化后进入 `methods/`。原因：

- 资料时效性强，公开叙事容易被新闻、监管和公司 PR 反复改写。
- 未形成足够稳定的外部评价，容易把阶段性成功误写成通用心智模型。
- 活人 persona 容易滑向崇拜、模仿、站队或未经验证的内部管理传闻。
- 对仍在运营的公司或创始人，事实判断需要持续检索，不适合沉淀为稳定离线 skill。

当前基线中的处理分级：

| 候选 | 状态 | 判断 | 处理 |
| --- | --- | --- | --- |
| `cogp-zhang-yiming` | 在世，且仍与 ByteDance、TikTok、监管和商业竞争叙事强绑定 | 不适合作为 persona 蒸馏对象 | 不纳入下一批；相关问题交给 `cogp-grove`、`cogp-simon`、`cogp-shannon`、`cogp-christensen` 或 team 工具综合 |
| `cogm-tail-risk` | 来源人物在世，但方法已有成体系著作和外部风险管理讨论 | 可作为 method 保留 | 使用尾部风险、凸性、遍历性和风险承担不对称，不迁移公共争论和投资结论 |
| `cogm-human-centered-interaction` | 来源人物在世，但方法已高度制度化 | 可作为 method 保留 | 作为人本交互方法工具，不写成人物崇拜或最新观点追踪 |

张一鸣相关主题的替代路径：

- 组织算法、OKR 和管理杠杆：优先 `cogp-grove`。
- 注意力、有限理性和组织程序：优先 `cogp-simon`。
- 信息效率、推荐、信号噪声和反馈：优先 `cogp-shannon`、`cogp-meadows`。
- 产品战略、非消费和市场进入：优先 `cogp-christensen`、`cogt-product`。
- 人机协同和工具增强心智：优先新增 `cogp-engelbart` 或 `cogp-licklider`。

## 提交前检查

```powershell
npm run validate:skills
git diff --check
```

如果是完整蒸馏批次，还应检查目标目录：

```text
personas/<category>/<name>/SKILL.md
personas/<category>/<name>/references/research/01-writings.md
personas/<category>/<name>/references/research/02-conversations.md
personas/<category>/<name>/references/research/03-expression-dna.md
personas/<category>/<name>/references/research/04-external-views.md
personas/<category>/<name>/references/research/05-decisions.md
personas/<category>/<name>/references/research/06-timeline.md
```
