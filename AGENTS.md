# AGENTS.md

本仓库是面向 Hermes / OpenClaw / Codex / Claude Code 等 agent host 的跨学科认知人格与学科思维库。

本仓库只保存可移植的 Markdown 提示词、skill、team 和 debate 模板，不是运行时框架，也不应积累应用依赖。

## 语言规则

- 规则文件、README、adapter 文档、template 文档、persona / team / debate 文档默认使用中文。
- 英文只用于稳定标识符、目录名、文件名、frontmatter `name`、工具名、产品名和必要的 host 指令片段。
- frontmatter `description` 应使用中文，除非目标 host 明确要求英文。
- 文档可以保留 `Hermes`、`OpenClaw`、`Codex`、`Claude Code`、`SKILL.md`、`personas/<discipline>/<name>/SKILL.md` 等稳定标识符。

## 范围

- persona 和 team 文件应保持为带 `name` 与 `description` frontmatter 的可移植 Markdown skill。
- 输出优先使用清晰中文，英文标识符在工具名和目录名中保持稳定。
- 除非用户明确要求，不要添加运行时依赖。
- 不要把 persona 写成历史人物、艺术家或科学家的字面模拟；它们是历史启发或学科启发的思维工具。
- 提示词应服务真实工作：思考、写作、决策、研究问题框定、自我复盘、战略判断和批评。
- 优先沉淀可复用的认知工具，不要写一次性提示词段落。

## 人格工具契约

每个 `personas/<discipline>/<name>/SKILL.md` 应包含：

- 角色
- 适用场景
- 方法
- 输出契约
- 交接
- 护栏

persona 可以引用历史人物、艺术家、科学家或思想流派，但只能作为思维工具使用。不要要求模型模仿他们本人，也不要声称具备精确历史权威。

## 团队契约

`teams/` 下的 team prompt 应调度 persona，而不是覆盖 persona。team 主持人必须综合最终答案，并指出 agent 之间的分歧。

每个 team 应包含：

- 角色
- 默认团队
- 路由
- 方法
- 输出契约
- 护栏

## 模板契约

`templates/` 下的模板应方便新增 persona 和 team skill，同时不破坏仓库结构。

## 验证

提示词或内容变更后，至少检查：

- Markdown 文件可读取。
- 需要 frontmatter 的文件存在 frontmatter。
- persona 的 `name` 与目录名一致。
- team 的 `name` 与目录名一致。
- 规则文件和文档正文使用中文，英文仅保留必要稳定标识符。
- 没有 prompt 要求模型伪装成历史人物本人或伪造精确历史权威。
