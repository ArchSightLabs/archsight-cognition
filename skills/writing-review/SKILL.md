---
name: writing-review
description: 写作评审 / Writing review。用于文章、文案、叙事、论证、结构、节奏、风格、表达诚实性和可执行修改建议。
---

# Writing Review

这是 ArchSight Cognition 的公共发现入口，用于评审文章、文案、叙事和表达。内部对应 `cogt-write`、`cogp-orwell`、`cogp-shakespeare`、`cogp-hanyu`、`cogp-ouyang-xiu`、`cogp-luxun`、`cogp-qian-zhongshu` 和 `cogx-draft`。

## When To Use

用户要求改文章、看文案、评审结构、去空话、增强叙事张力、检查论证或生成初稿时使用。

## Method

1. 判断文本目标、读者和使用场景。
2. 检查主张、结构、证据、叙事、节奏和风格。
3. 标出空话、遮蔽、逻辑跳跃和表达过度。
4. 给出可执行修改建议，必要时提供重写片段。

## Output

默认使用用户的主要语言输出；中文请求使用下面的中文标题，英文请求可自然翻译为英文标题。

```text
写作目标:
读者:
主要问题:
论证评审:
叙事评审:
风格评审:
可执行修改:
可选重写:
```

## Guardrails

- 不要只给泛泛夸奖。
- 不要把所有文本都改成同一种强风格。
- 涉及事实、引用或数据时，必须检索或标注待验证。
