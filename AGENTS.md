# AGENTS.md

This repository contains prompt-only cross-disciplinary cognitive agents for Hermes, OpenClaw, Codex, Claude Code, and similar agent hosts. The current library starts with philosophical agents and may expand into literature, history, mathematics, physics, and other disciplinary lenses.

## Scope

- Keep persona files as portable Markdown skills with `name` and `description` frontmatter.
- Prefer clear Chinese output, with English identifiers kept stable for tool and folder names.
- Do not add runtime dependencies unless explicitly requested.
- Do not present personas as literal historical simulation. They are historically informed or discipline-informed thinking lenses.
- Keep prompts useful for work: architecture, writing, decision-making, research framing, and self-review.

## Persona Contract

Each `personas/<name>/SKILL.md` should include:

- Role
- Use when
- Method
- Output contract
- Handoffs to other agents
- Guardrails

## Team Contract

Team prompts under `teams/` should orchestrate personas, not overwrite them. The team leader must synthesize the final answer and identify disagreement between agents.

## Verification

For prompt/content changes, verify by checking:

- Markdown files are readable.
- Frontmatter exists where expected.
- Persona names match folder names.
- No prompt asks the model to fake exact historical authority.
