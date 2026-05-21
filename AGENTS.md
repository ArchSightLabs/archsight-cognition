# AGENTS.md

> 本文件供 **Codex（OpenAI Codex / codex.ai）** 在本仓库中工作时参考。
> 本文件是 Codex 的工具入口适配器，不复制公共规范正文。

---

## 必读入口

开始任何工作前，先阅读：

- [AI 编码规范（公共）](./AI_CODING_RULES.md)
- [项目总览](./README.md)
- [Personas](./personas/README.md)
- [Adapters](./adapters/README.md)

---

## Codex 特别说明

- Codex 在执行终端命令时，须优先使用项目根目录的 `Makefile` 或 `scripts/` 中的辅助脚本（如存在）。
- Codex 在用户指定或任务适合本仓库技能包时，须先阅读 [Personas](./personas/README.md)、对应 `personas/*/*/SKILL.md` 或 `teams/*/SKILL.md`。
- 生成代码时，严格遵守 `AI_CODING_RULES.md` 第二节「AI 行为准则」，尤其是最小代码和不做假设原则。
- Codex 不得在未经验证的状态下关闭 PR 或标记任务为完成。

<!-- ARCHSIGHT-COGNITION:START -->
## ArchSight Cognition

当任务需要问题澄清、写作评审、研究设计、战略判断或跨学科决策复盘时，
从本仓库加载最相关的认知工具。

默认路由：
- 需求和概念不清：`personas/philosophy/socrates/SKILL.md`
- 不确定性和证据判断：`personas/mathematics/bayes/SKILL.md`
- 变量、约束和系统建模：`personas/physics/newton/SKILL.md`
- 高风险决策：`teams/decision-council/SKILL.md`
- 文章、叙事和表达：`teams/writing-review/SKILL.md`

对外 skill 调用名统一使用 `cog-` 前缀，例如 `cog-socrates`、`cog-bayes`、`cog-newton`、`cog-decision-council`。

不要人格 cosplay。把 persona 当作学科思维工具，而不是历史人物模拟。
<!-- ARCHSIGHT-COGNITION:END -->
