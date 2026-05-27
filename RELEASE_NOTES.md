# ArchSight Cognition 发布说明

## v2.1.0

发布日期：2026-05-27

这是一次方法工具扩展和命名可理解性修正版，新增三个去人物中心化的 `cogm-*` 入口，用于商业判断、冲突协同和原则化效能，并让方法自动路由入口更直观。

### 命名改进

- 将方法自动路由入口命名为 `cogm-auto`。
- 将目录 `methods/mental-models-toolbox/` 改为 `methods/auto/`。
- `cogm-auto` 表示不知道该选哪个 `cogm-*` 方法时，先按任务自动路由到 1 到 3 个合适方法。

### 新增 method 工具

- `cogm-business-logic`：拆解交易结构、利益关系、关键变量、商业约束和可验证假设。
- `cogm-integrative-options`：在冲突、谈判和分歧中创造第三选择，而不是简单妥协。
- `cogm-principled-effectiveness`：把个人、团队和组织目标转成角色、优先级、协作和持续更新习惯。

### 文档和适配

- README、Hermes alias、demo 文档和 `cogt-think` 的方法工具说明统一改用 `cogm-auto`。
- 保持 `cogp-*` 和 `cogv-*` 只作为具体 persona / voice 叶子工具，不新增 `auto` 或 `general` 入口。
- `cogm-auto` 已补充新方法路由，能把商业逻辑、第三选择和原则化效能场景分流到对应工具。
- README、Hermes alias、baseline 和 demo 文档已补充三个新入口。
- 三个新方法都补齐 `references/sources.md`、`references/usage-notes.md` 和 `references/validation-cases.md`。

### 兼容性

- `cogm-mental-models-toolbox` 不再作为公开入口暴露，请改用 `cogm-auto`。
- 安装器会把旧的 `cogm-mental-models-toolbox` 作为 legacy skill 删除，避免命令面板继续显示旧入口。
- 相关书籍和作者只作为来源影响，不新增 `cogp-*` 或 `cogv-*` 人物/口吻入口。

### 验证

- 已执行 `npm run validate:skills`。
- 已执行 CLI list smoke test，确认精选 skills 中暴露 `cogm-auto`，不再暴露 `cogm-mental-models-toolbox`。
- 已执行 CLI list smoke test，确认三个新 `cogm-*` 入口已暴露。
- 已执行临时 `CODEX_HOME` 安装 smoke test，确认旧 skill 会被清理，新 `cogm-auto` 会被安装。
- 已执行 `git diff --check`。
- 已执行 `npm pack --dry-run --json`，确认三个新 method 目录和参考材料会进入 npm 包。

## v2.0.0

发布日期：2026-05-27

这是一次架构级大版本。相比当前对外公开的 v1.0.4，ArchSight Cognition 从“persona / team / voice / debate 工具包”升级为“persona / method / team / voice / debate 五类认知工具包”，并把仍在世人物、活跃个人品牌和可操作方法论统一收敛到 `methods/`，避免把方法误包装成 `cogp-*` persona 或 `cogv-*` 口吻。

### 新增 method 工具

- `cogm-human-centered-interaction`：用户目标、概念模型、可供性、反馈和错误恢复。
- `cogm-first-principles`：真实目标、惯性假设、底层约束和必要推导。
- `cogm-critical-thinking`：前提、论证、证据、反例、谬误和结论强度。
- `cogm-structured-problem-solving`：问题定义、议题树、MECE、假设驱动和行动闭环。
- `cogm-parallel-thinking`：事实、感受、风险、收益、创意和流程六个并行视角，用于会议讨论、方案评审和头脑风暴。
- `cogm-operating-principles`：原则化决策、反馈回路、例外处理和复盘沉淀。
- `cogm-management-hygiene`：极简管理、授权边界、会议卫生、反馈周期和管理噪音。
- `cogm-auto`：不知道该选哪个方法时，按任务选择合适 `cogm-*`，避免堆砌模型名。
- `cogm-priority-triage`：艾森豪威尔矩阵、帕累托法则、三七法则、避免待办清单和阻力最小路径检查。
- `cogm-causal-failure-analysis`：鱼骨图、多米诺骨牌、墨菲定律、从结果反推原因和反向思考。
- `cogm-simplicity-filter`：奥卡姆剃刀、史特金过滤、黑天鹅边界和系统 2 慢思考。
- `cogm-decision-heuristics`：遗憾最小化、鲍威尔法则、黄金法则、40/70 法则和贝叶斯更新。
- `cogm-tail-risk`：尾部风险、反脆弱、吸收壁、遍历性和小额可失败试验。

### 新增 persona 和 team

- 新增 `cogp-grove`：高输出管理、战略拐点、十倍力、管理杠杆、OKR 和任务成熟度。
- 新增 `cogp-christensen`：颠覆式创新、非消费、低端进入、价值网络、商业模式和 JTBD。
- 新增 `cogp-munger`：多元模型、逆向思考、激励结构、能力圈和商业判断。
- 新增 `cogp-godel`：形式系统边界、不完备性、自指、元层级和证明限制。
- 新增 `cogt-product`：产品定位、用户价值、MVP、市场进入、体验和商业约束综合评审。
- 新增 `cogt-lead`：技术领导、研发管理、技术路线、交付反馈和组织杠杆综合评审。

### 研究材料和治理

- persona 继续使用六维 research 目录沉淀材料：著作、访谈、表达 DNA、外部评价、关键决策和时间线。
- method 改用轻量三件套：`references/sources.md`、`references/usage-notes.md`、`references/validation-cases.md`。
- `methods/` 下给人读的标题、参考材料、用法说明和验证案例统一使用中文；目录名和命令名继续使用英文 slug，保证跨 host 稳定。
- `npm run validate:skills` 现在会检查 `cogm-*` 的三件套参考材料，防止只有口号、没有来源和边界。
- `docs/DISTILLATION_BASELINE.md` 和 `docs/GOVERNANCE.md` 已补充 persona / method / team / voice / debate 的边界规则。

### CLI 和 host 改进

- 新增 `archsight-cognition install qoder`，支持项目级 `.qoder/skills/` 和用户级 `~/.qoder/skills/`；检测到 `~/.qoderwork/` 时兼容写入 QoderWork skills。
- 新增 `archsight-cognition install trae`，支持项目级 `.agents/skills/`；`--global` 写入 `~/.trae/skills/`，检测到 `~/.trae-cn/` 时兼容写入 Trae CN skills。
- 新增 `archsight-cognition install cline`，写入 `.clinerules/archsight-cognition.md` 指针和内容目录；`--global` 写入 Cline 用户级 Rules。
- 新增 `archsight-cognition install cursor`，写入 `.cursor/rules/archsight-cognition.mdc` 指针和内容目录。
- `install all` 会一并安装 Qoder、Trae、Cline 和 Cursor 项目级入口；`install all --global` 会安装 Qoder、Trae 和 Cline，Cursor 保持项目级安装；WorkBuddy 固定写入个人目录。
- 新增 `adapters/qoder/README.md`、`adapters/trae/README.md`、`adapters/cline/README.md`、`adapters/cursor/README.md` 和 `adapters/workbuddy/README.md`。

### 验证

- 已执行 `npm run validate:skills`。
- 已执行 `npm pack --dry-run`，确认 `methods/`、`docs/`、`scripts/` 和新 adapter 文档会进入 npm 包。
- 已执行 CLI list smoke test，确认 `cogm-*` 已进入精选和全量 skills 列表，且 `cogp-norman` 不再出现。
- 已执行 `git diff --check`。
- 未逐一执行所有 host 的真实安装 smoke test；本次验证以打包内容、校验脚本和 CLI 列表为主。

### 兼容性

- `persona` 和 `voice` 的治理规则收紧：`cogp-*` 与 `cogv-*` 只用于已离世人物或稳定历史传统；仍在世人物、活跃企业家和个人品牌材料只能作为 `cogm-*` method 的来源之一。
- `cogp-norman` 不再作为公开入口暴露；人本设计、可供性、概念模型和交互反馈能力迁移为 `cogm-human-centered-interaction`。
- 默认团队说明拆分“团队成员”和“方法工具”：`cogm-*` 不再被写成 team 成员，而是作为按任务加入的独立方法论工具。
- 包结构新增 `methods/`，`package.json`、CLI、安装器和 Codex 指针都会复制并暴露 method skills。依赖旧版本只扫描 `personas/`、`teams/`、`voices/`、`debates/` 的自定义集成需要同步加入 `methods/`。

### 从 v1.0.4 升级

- 继续使用 `cogp-rams`、`cogp-vignelli`、`cogp-albers`、`cogp-klee` 处理产品克制、视觉系统、色彩和构成。
- 将原 `/cogp-norman` 替换为 `/cogm-human-centered-interaction`。
- 需要“马斯克式第一性原理”时，使用 `/cogm-first-principles`，不要新增活人 persona 或 voice。
- 需要“达利欧原则”时，使用 `/cogm-operating-principles`，把它作为原则化决策和复盘工具。
- 需要“麦肯锡思维”时，使用 `/cogm-structured-problem-solving`，把它作为议题树、MECE 和假设驱动问题解决工具。
- 需要“六顶思考帽”时，使用 `/cogm-parallel-thinking`，把它作为平行思考、会议发散和多视角审查工具。
- 需要“纳瓦尔宝典”或个人经验法则时，按主题拆入 method，不提供 `cogp-naval` 或 `cogv-naval`。
- 如果使用 `install all` 或 `--all` 做完整安装，升级后会多出 `cogm-*` method 目录；如果使用精选安装，也会包含核心 method。

## v1.1.1

发布日期：2026-05-26

这是一次 host 适配小版本，新增对 WorkBuddy skills 目录的 CLI 安装支持。

### CLI 改进

- 新增 `archsight-cognition install workbuddy`，默认把精选 skills 安装到 `~/.workbuddy/skills/`。
- `install workbuddy --all` 支持安装完整 skills 集合。
- `install all` 和 `install all --global` 会一并安装 WorkBuddy 目标；WorkBuddy 固定写入个人目录，不区分项目级和 `--global`。

### 文档改进

- README 新增 WorkBuddy 安装入口和写入位置，并说明它固定使用个人目录。
- 新增 `adapters/workbuddy/README.md`，说明安装路径、调用方式和维护建议。

### 验证

- 已执行 `npm run validate:skills`。
- 已执行 CLI smoke test，验证 `install workbuddy` 会写入临时 HOME 下的 `.workbuddy/skills/`。

## v1.1.0

发布日期：2026-05-25

这是一次开源治理增强版本，重点是把外部贡献从“直接提交 prompt”升级为“先说明失败模式、边界测试和验证逻辑”的可审查流程。

### 治理改进

- 新增 `docs/GOVERNANCE.md`，明确维护者策展制、issue-first 流程、PR 接受标准和拒绝标准。
- 新增 GitHub PR 模板，要求贡献者说明认知模型答辩、边界测试、失败模式和验证方式。
- 新增 skill proposal issue 模板，引导新增工具先沉淀问题、适用场景、输出契约和证据边界。
- 将项目许可证从 MIT 升级为 Apache License 2.0，并新增 `NOTICE` 明确商用、分发、商标和品牌背书边界。

### 模板改进

- 扩展 persona、team、voice 和 debate 模板，新增 `失败模式`、`验证逻辑` 和 `边界测试`。
- 更新 `CONTRIBUTING.md`，把新增工具的质量要求从基础章节升级为可验证贡献标准。
- 修正贡献指南中的命名说明，改为 `cogp-*`、`cogt-*`、`cogv-*`、`cogd-*` 前缀规则。

### 校验改进

- 新增 `scripts/validate-skills.mjs`。
- 新增 `npm run validate:skills`，检查 frontmatter、命名前缀、必需章节和明显 persona cosplay 风险。

### 验证

- 已执行 `npm run validate:skills`。
- 未执行 host 安装 smoke test；本次变更不修改安装器行为。

## v1.0.4

发布日期：2026-05-24

这是一次文档和 CLI 可用性修正版，重点是让安装路径更清楚，减少新用户在“当前项目安装”和“全局安装”之间的混淆。

### 文档改进

- 重写 README 安装说明，把示例统一拆成“安装到当前项目”和“安装到全局”两条路径，避免在同一组命令中混用安装范围。
- 精简 README 的 host 安装细节，删除主文档中的手动复制命令、Antigravity workflow 模板和 workspace rule 大段示例，把 host 细节收敛到 `adapters/*/README.md`。
- 将 README 使用示例改为注册后的 `/cogp-*`、`/cogt-*`、`/cogv-*` 命令形式，和安装后的真实调用方式保持一致。
- 移除公开文档中对 Antigravity 旧版 `--workflow` 参数的推荐说明；该参数仍保留为安装器内部兼容入口。
- 明确 Apache License 2.0 覆盖范围和 `ArchSight`、`ArchSightLabs`、`ArchSight Cognition` 等名称的品牌使用边界。

### CLI 改进

- 更新 CLI help 示例，不再展示旧版 `install antigravity --workflow`。
- 修复 `archsight-cognition install --help` 被识别为未知安装目标的问题，现在会正常显示安装帮助。

### 验证

- 已验证 `archsight-cognition --help` 和 `archsight-cognition install --help` 输出。
- 已执行 Markdown / JS diff whitespace 检查。
- 未实际执行安装命令，以避免写入本机项目或全局 agent host 目录。

## v1.0.3

发布日期：2026-05-24

这是 ArchSight Cognition 的首个对外公开版本。此前 v1.0.1 和 v1.0.2 为内部测试版，主要用于打磨命名规则、安装路径和 host 适配。

本轮更新继续强化 ArchSight Cognition 的定位：它是 agent 工作流中的认知路由层和思维工具包，适合在写代码、写文章、做设计或给出结论之前，帮助 AI 先选对思考框架和输出结构。

### 功能改进

- 增强中文语境下的思考能力：新增对中国思想、战略判断、组织关系、中文叙事和高阶写作评审的支持。
- 增强战略与组织分析能力：更适合处理竞争态势、低损耗试点、长期习惯训练、熟人网络和中国组织传播问题。
- 增强中文写作评审能力：更适合评审公众号长文、公开信、品牌叙事、复杂组织故事、反讽评论和批判性表达。
- 新增“技术与人文”结构化分歧入口，用于审查 AI、自动化和工程效率背后的意义、判断力、文化表达和责任边界。
- 新增 OpenCode 安装入口，可把认知工具安装到 OpenCode 原生 skills 目录。

### 文档改进

- README 增加项目定位说明，明确 Cognition 不是运行时框架、事实权威库或行业知识包。
- README 强化独立项目定位，避免把 Cognition 绑定到任何具体行业项目或运行时项目。
- Codex、Claude Code、OpenCode 和 Antigravity 安装说明已根据实际 smoke test 校准，减少用户按文档安装时的歧义。

### 修复与验证

- 修正新增工具在默认安装、全量安装和 host 文档中的可发现性。
- 验证 Codex、Claude Code、OpenCode 和 Antigravity 的项目级、全局及兼容安装路径。

## v1.0.2（内部测试版）

发布日期：2026-05-22

内部测试版本，主要用于验证 Antigravity 安装路径和文档说明。

- 改进 Antigravity 安装体验：默认安装后即可获得决策评审 workflow。
- Antigravity 2.x 优先使用官方 plugin 形态，同时保留旧版环境兼容，但不再主动创建旧版目录。
- 调整文档推荐顺序：优先全局安装，仅当 IDE 无法识别时再使用 workspace 安装。

## v1.0.1（内部测试版）

发布日期：2026-05-22

内部测试版本。ArchSight Cognition 从分散的认知 prompt，整理为可通过 npm 分发、可安装到多个 agent host 的 Markdown skill 工具库。

### 新增

- 建立 `personas/`、`teams/`、`voices/`、`debates/`、`templates/` 和 `adapters/` 目录结构。
- 初步新增 npm CLI，支持安装到 Codex、Claude Code 和 Antigravity。
- 统一 `cogt-*`、`cogp-*`、`cogv-*`、`cogd-*` 命名规则。
- 明确项目边界：不是 agent runtime、事实权威库或名人模拟器。

### 已知限制

- 当前版本主要分发 Markdown skills 和安装器，没有独立测试框架或远程服务。
- 当时品牌和商标资产规则仍需单独明确；已在 v1.1.0 通过 Apache License 2.0 和 `NOTICE` 补齐商用与品牌边界。
