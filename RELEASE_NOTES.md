# ArchSight Cognition 发布说明

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
