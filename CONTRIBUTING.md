# 贡献指南

感谢你考虑为 ArchSight Cognition 贡献内容。

本仓库收录的是可移植的 Markdown 认知工具，不是运行时框架。贡献重点不是“写得像某个历史人物”，而是把一个学科视角沉淀成可复用、可审查、能服务真实任务的思维工具。

## 可以贡献什么

- 新的 persona：放在 `personas/<discipline>/<name>/SKILL.md`。
- 新的 team：放在 `teams/<name>/SKILL.md`。
- 新的 debate：放在 `debates/<topic>/SKILL.md`。
- 新的 host 适配说明：放在 `adapters/<host>/README.md`。
- 模板、README、示例任务和质量检查规则。

## 新增 persona 的要求

从 `templates/persona-skill.md` 开始。

必须包含：

- `name` frontmatter，值与目录名一致。
- 中文 `description` frontmatter。
- `角色`
- `适用场景`
- `方法`
- `输出契约`
- `交接`
- `护栏`

内容要求：

- persona 是学科思维工具，不是历史人物模拟。
- 可以引用历史人物、艺术家、科学家或思想流派作为启发，但不要声称模型能代表本人。
- 输出契约必须能产生可执行判断、问题澄清、风险识别或下一步。
- 不要写一次性口号、风格模仿或泛泛鸡汤。

## 新增 team 的要求

从 `templates/team-skill.md` 开始。

必须包含：

- `name` frontmatter，值与目录名一致。
- 中文 `description` frontmatter。
- `角色`
- `默认团队`
- `路由`
- `方法`
- `输出契约`
- `护栏`

team 应调度 persona，而不是覆盖 persona。主持人必须综合最终答案，并指出主要分歧、共识、盲点和下一步。

## 新增 debate 的要求

从 `templates/debate-skill.md` 开始。

必须包含：

- `name` frontmatter，使用 `cogd-<short-name>`。
- 中文 `description` frontmatter。
- `角色`
- `适用场景`
- `推荐视角`
- `开场问题`
- `方法`
- `输出契约`
- `护栏`

debate 应围绕长期议题和真实冲突展开。它不同于 team：team 要合作并收束成综合判断；debate 要先放大强对立立场，标出不可调和点、最强反对意见和行动分叉，不要为了圆融而伪造共识。

新增 debate 必须能提出至少 2 个强对立立场，并说明分歧如何影响责任边界、行动选择或验证路径。

## 语言规则

- README、adapter 文档、模板文档、persona/team/debate 文档默认使用中文。
- 英文只用于稳定标识符、目录名、文件名、frontmatter `name`、工具名、产品名和必要 host 指令片段。
- frontmatter `description` 默认使用中文。

## 提交前检查

至少检查：

```powershell
$errors = @()
Get-ChildItem -Recurse -Filter SKILL.md | ForEach-Object {
  $raw = Get-Content -Raw -LiteralPath $_.FullName
  if ($raw -notmatch '^---\s*\r?\n(?s).*?\r?\n---') {
    $errors += "Missing frontmatter: $($_.FullName)"
  } elseif ($raw -notmatch '(?m)^name:\s*(\S+)') {
    $errors += "Missing name: $($_.FullName)"
  } else {
    $name = $Matches[1].Trim()
    $dir = Split-Path $_.DirectoryName -Leaf
    if ($name -ne $dir) {
      $errors += "Name mismatch: $($_.FullName) name=$name dir=$dir"
    }
  }
}
if ($errors.Count) { $errors; exit 1 } else { "OK" }
```

同时人工确认：

- Markdown 文件可读取。
- 没有 prompt 要求模型伪装成历史人物本人。
- 没有把隐喻、修辞或学科视角伪装成事实证明。
- 高风险事实判断会要求外部来源和验证。

## 不建议贡献

- 只改变语气、不增加认知功能的“角色扮演”提示词。
- 把 persona 写成历史人物本人的口吻模拟。
- 面向一次性任务的长段提示词。
- 需要新增运行时依赖的内容，除非先说明必要性。
- 未经验证的法律、医疗、金融、安全结论。
