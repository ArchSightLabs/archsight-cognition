# ArchSight Cognition

ArchSight Cognition is a portable cognitive skill pack for AI agents.

It gives Claude Code, Codex, Antigravity/agy, Gemini CLI, Cursor, Cline, OpenCode, Qoder, Trae, WorkBuddy, Hermes, OpenClaw, and other agent hosts reusable Markdown `SKILL.md` modules for structured thinking, multi-perspective review, decision analysis, PRD writing, research synthesis, strategy review, critical thinking, writing review, design review, product strategy, engineering leadership, structured debate, Chinese thinking, and long-form reasoning.

The default Chinese README is intentional. ArchSight Cognition has strong Chinese-language use cases, including Chinese writing review, Chinese intellectual traditions, product and organization judgment in Chinese contexts, and cross-disciplinary reasoning expressed in clear Chinese. This English README is the public discovery and onboarding layer for non-Chinese readers.

## Quick Install

Install through the public skills ecosystem:

```powershell
npx skills add ArchSightLabs/archsight-cognition --list
```

Install all supported local host entries through npm:

```powershell
npx @archsight/cognition install all --global
```

Install for Antigravity CLI (`agy`) and Antigravity 2.x:

```powershell
npx @archsight/cognition install antigravity --global
```

Install as a Gemini CLI extension in environments that still support Gemini CLI:

```powershell
gemini extensions install https://github.com/ArchSightLabs/archsight-cognition
```

Google is moving the consumer CLI path from Gemini CLI to Antigravity CLI (`agy`). This repository has verified Antigravity 2.0 installation support, keeps `gemini-extension.json` for compatibility and public indexing, and treats the Antigravity adapter as the preferred path for new Google CLI users.

Add the Claude Code marketplace:

```text
/plugin marketplace add ArchSightLabs/archsight-cognition
/plugin install archsight-cognition@archsight
```

## Public Skills

The `skills/` directory exposes task-oriented public entry points for GitHub-based skill indexers, `skills.sh`, Antigravity/agy, Gemini CLI compatibility, and Claude Code marketplace discovery. These entries are discovery and onboarding wrappers, not the full capability set:

| Skill | Use Case |
| --- | --- |
| `architecture-review` | Software architecture review, technical design review, system boundaries, trade-offs, reliability, maintainability, technical debt, and long-term evolution. |
| `structured-thinking` | Problem clarification, cognitive routing, concept boundaries, assumptions, constraints, and next-step judgment. |
| `multi-perspective-review` | Cross-disciplinary review, team panels, multiple lenses, tension mapping, and synthesized recommendations. |
| `structured-debate` | Structured disagreement, long-term issues, value conflicts, position pressure testing, and debate summaries. |
| `decision-review` | Decision analysis, risk review, uncertainty, evidence strength, irreversible choices, decision memos, and next-step validation. |
| `writing-review` | Writing review, argument structure, narrative quality, tone, clarity, and expression integrity. |
| `design-review` | Product experience, visual hierarchy, UI/UX critique, interaction design, information architecture, and usability. |
| `product-strategy` | Product positioning, user problems, differentiation, market entry, validation, and minimum viable action. |
| `engineering-leadership` | Engineering leadership, technical direction, delivery feedback, quality debt, team incentives, and organizational review. |
| `prd-writing` | Product requirements, user problems, scope, acceptance criteria, metrics, release risks, and implementation handoff. |
| `research-synthesis` | Source-based research briefs, evidence quality, competing claims, uncertainty, and next research steps. |
| `strategy-review` | Market entry, positioning, differentiation, resource allocation, competitive risk, strategic trade-offs, and minimum viable action. |
| `critical-thinking` | Claims, assumptions, evidence, logical gaps, alternative explanations, conclusion strength, and red-team critique. |
| `chinese-thinking` | Chinese intellectual traditions, Chinese writing context, Chinese organization context, tradition-modernity tensions, and bilingual reasoning. |

These public entries are wrappers for discovery. The richer canonical tools live under `personas/`, `methods/`, `teams/`, `deliverables/`, `voices/`, and `debates/`.

## Core Tool Families

| Prefix | Family | Purpose |
| --- | --- | --- |
| `cogp-*` | Personas | Single disciplinary lenses such as Socrates, Bayes, Newton, Shannon, Drucker, Sunzi, Luxun, and others. These are thinking tools, not roleplay personas. |
| `cogm-*` | Methods | Person-independent methods for critical thinking, first principles, structured problem solving, tail risk, business logic, and more. |
| `cogt-*` | Teams | Multi-lens panels for thinking, decision review, writing review, design review, product strategy, engineering leadership, science, history, and learning. |
| `cogx-*` | Deliverables | Output-producing skills for PRDs, decision memos, drafts, research plans, research briefs, retros, and strategy briefs. |
| `cogv-*` | Voices | Clearly labeled expression style tools. They are for tone and rhetoric, not impersonation. |
| `cogd-*` | Debates | Structured disagreement tools for long-term issues, value conflicts, technology, work, governance, knowledge, and Chinese thought. |

## What It Is

- A portable Markdown skill repository for AI agents.
- A cognitive routing layer for reasoning before writing, coding, designing, researching, or deciding.
- A reusable source of auditable prompts and output contracts for teams that want stable agent skills instead of one-off chat prompts.
- A bilingual discovery layer: Chinese-first descriptions with English keywords for public indexing.

## What It Is Not

- Not an application, backend, frontend, database, or runtime framework.
- Not an agent orchestration framework.
- Not a celebrity roleplay library.
- Not a fact authority. Current facts, market data, law, medicine, finance, security, prices, releases, and citations still require retrieval and verification.

## Recommended Starting Points

| Task | Entry |
| --- | --- |
| Unsure which lens to use | `teams/thinking-council/SKILL.md` or `cogt-think` |
| Important decision review | `teams/decision-council/SKILL.md` or `cogt-decide` |
| Writing or narrative review | `teams/writing-review/SKILL.md` or `cogt-write` |
| Product, UX, UI, or visual review | `teams/design-review/SKILL.md` or `cogt-design` |
| Product strategy and validation | `teams/product/SKILL.md` or `cogt-product` |
| Engineering leadership and delivery feedback | `teams/lead/SKILL.md` or `cogt-lead` |
| PRD generation | `deliverables/prd/SKILL.md` or `cogx-prd` |
| Decision memo generation | `deliverables/decision-memo/SKILL.md` or `cogx-decision-memo` |
| Research brief with sources | `deliverables/research-brief/SKILL.md` or `cogx-research-brief` |

## Install By Host

```powershell
npx @archsight/cognition install codex
npx @archsight/cognition install claude-code
npx @archsight/cognition install opencode
npx @archsight/cognition install qoder
npx @archsight/cognition install trae
npx @archsight/cognition install cline
npx @archsight/cognition install cursor
npx @archsight/cognition install antigravity
```

Install globally:

```powershell
npx @archsight/cognition install all --global
```

List packaged skills:

```powershell
npx @archsight/cognition list
```

## Governance

ArchSight Cognition avoids persona cosplay. Historical figures and intellectual traditions are used as auditable disciplinary lenses or expression styles, not as simulated people. Living people and active personal brands should not become `cogp-*` or `cogv-*` entries; useful ideas from living sources should be generalized into `methods/`.

Every skill should serve a real task, expose boundaries, and produce a usable judgment, critique, plan, or deliverable.

## More

- Chinese README: [README.md](./README.md)
- Public discovery checklist: [docs/PUBLIC_DISCOVERY.md](./docs/PUBLIC_DISCOVERY.md)
- Governance: [docs/GOVERNANCE.md](./docs/GOVERNANCE.md)
- Release notes: [RELEASE_NOTES.md](./RELEASE_NOTES.md)
- License: Apache-2.0
