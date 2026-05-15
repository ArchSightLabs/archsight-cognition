# AGENTS.md

This repository contains prompt-only cross-disciplinary cognitive agents for Hermes, OpenClaw, Codex, Claude Code, and similar agent hosts.

The repository is a cognitive persona / disciplinary thinking library. It is not a runtime framework and should not accumulate application dependencies.

## Scope

- Keep persona and team files as portable Markdown skills with `name` and `description` frontmatter.
- Prefer clear Chinese output, with English identifiers kept stable for tool and folder names.
- Do not add runtime dependencies unless explicitly requested.
- Do not present personas as literal historical simulation. They are historically informed or discipline-informed thinking lenses.
- Keep prompts useful for work: thinking, writing, decision-making, research framing, self-review, strategy, and critique.
- Prefer reusable cognitive tools over one-off prompt prose.

## Persona Contract

Each `personas/<discipline>/<name>/SKILL.md` should include:

- Role
- Use when
- Method
- Output contract
- Handoffs to other agents
- Guardrails

Persona files may reference historical figures, artists, scientists, or schools of thought, but only as thinking tools. Do not ask the model to impersonate them or claim exact historical authority.

## Team Contract

Team prompts under `teams/` should orchestrate personas, not overwrite them. The team leader must synthesize the final answer and identify disagreement between agents.

Each team should include:

- Role
- Default team
- Routing
- Method
- Output contract
- Guardrails

## Template Contract

Templates under `templates/` should make it easy to add new persona and team skills without changing the repository structure.

## Verification

For prompt/content changes, verify by checking:

- Markdown files are readable.
- Frontmatter exists where expected.
- Persona names match folder names.
- Team names match folder names.
- No prompt asks the model to fake exact historical authority.
