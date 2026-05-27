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
| `cogp-taleb` | `personas/decision/taleb/` | 已新增为尾部风险、反脆弱、凸性和吸收壁审查工具 |
| `cogp-munger` | `personas/decision/munger/` | 已新增为多元模型、逆向思考、激励和能力圈审查工具 |
| `cogp-godel` | `personas/mathematics/godel/` | 已新增为形式系统边界、自指、元层级和不完备性审查工具 |
| `cogp-shannon` | `personas/information/shannon/` | 已补强信号、噪声、编码、冗余、压缩和沟通失真 |
| `cogp-feynman` | `personas/science/feynman/` | 已补强简单解释、反自欺、具体例子、量纲直觉和实验手感 |
| `cogp-popper` | `personas/science/popper/` | 已补强可证伪性、严厉测试、事后逃逸和科学边界 |
| `cogp-norman` | `personas/art/norman/` | 已补强人本交互、概念模型、可供性、反馈和错误恢复 |
| `cogp-rams` | `personas/art/rams/` | 已补强产品有用性、诚实性、克制、可理解性和耐久性 |
| `cogt-product` | `teams/product/` | 已新增产品战略、定位、最小验证和取舍综合工具 |
| `cogt-lead` | `teams/lead/` | 已新增技术领导、研发组织、交付反馈和责任边界综合工具 |

这些工具已经能作为工作入口使用，但后续如果要追求与第一批相同的证据密度，应补齐六维研究目录。

## 后续强化流程

1. **选择目标**
   - 优先选择当前项目短板明显、且能改善真实工作判断的工具。
   - 人物 persona 优先补 `references/research/01-06`。
   - team 工具优先补成员边界、输出契约和交接逻辑。

2. **女娲式调研前处理**
   - 收集一手材料和高质量二手材料。
   - 按六维研究文件拆分：著作、访谈/公共表达、表达 DNA、外部评价、关键决策、时间线。
   - 对每个候选模型做三重验证：跨域复现、生成力、排他性。

3. **回到 ArchSight 模板**
   - `SKILL.md` 只写成思维工具，不写成历史人物本人。
   - 必须包含角色、适用场景、方法、输出契约、失败模式、验证逻辑、边界测试、交接和护栏。
   - 对事实性、历史性和专业性内容，区分来源事实、解释和本项目适配。

4. **验证**
   - 运行 `npm run validate:skills`。
   - 检查新增 persona 是否有 `SKILL.md` 和完整研究目录。
   - 检查 README、adapter alias 和默认安装列表是否需要同步。

## 下一批建议

优先级建议：

1. `cogp-taleb`、`cogp-munger`、`cogp-godel`：已经新增且价值高，适合先补六维研究，形成第二批完整蒸馏样板。
2. `cogp-shannon`、`cogp-feynman`、`cogp-popper`：科学与信息判断底座，适合补证据链和边界案例。
3. `cogp-norman`、`cogp-rams`：设计和产品体验工具，适合补案例、反例和可视化评审标准。
4. `cogt-product`、`cogt-lead`：不一定需要人物六维研究，但需要补 team 组合依据、默认成员和典型任务样例。

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
