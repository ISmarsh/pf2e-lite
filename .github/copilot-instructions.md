# Copilot Code Review Instructions

Universal guidance for automated code reviews. Prioritize real bugs and security
over style preferences.

## Do Flag

### Bugs

- Logic errors — incorrect calculations, off-by-one, wrong comparisons
- Null/undefined access without guards
- Race conditions or async handling errors
- Unreachable code or dead branches
- Broken error handling (swallowed exceptions, missing catches)

### Security

- XSS — unescaped user input in HTML/JSX
- Injection — string concatenation in SQL, shell commands, or eval
- Secrets — API keys, passwords, tokens in code or logs
- Auth issues — missing or bypassable authorization checks
- Insecure dependencies — known vulnerabilities in packages

### Accessibility

- Missing alt text on images
- Missing form labels or aria-labels
- Broken keyboard navigation (non-focusable interactive elements)
- Insufficient color contrast (when detectable)
- Missing skip links or landmark regions

### Correctness

- Type mismatches (in typed languages)
- Incorrect API usage (wrong method signatures, missing required params)
- Resource leaks (unclosed connections, missing cleanup)

## Do Not Flag

### Premature Optimization

- Missing `useMemo`/`useCallback` without measured performance issue
- "Could be more efficient" when current code is readable and fast enough
- Suggesting caching without evidence of repeated expensive computation

### Over-Engineering

- Extracting helpers/utilities for code used only once or twice
- Suggesting abstractions for "future flexibility"
- Adding configuration for hardcoded values that won't change
- Proposing design patterns that add complexity without clear benefit

### Style Preferences

- Naming suggestions unless current name is actively misleading
- Formatting issues (defer to linter/formatter)
- "Could be cleaner" without concrete improvement
- Preferring one valid approach over another equally valid one

### Intentional Patterns

- Patterns documented in project CLAUDE.md or style guide
- Framework-specific idioms (even if unfamiliar)
- Explicit trade-offs noted in comments

### Non-Issues

- TODOs or FIXMEs (these are intentional markers)
- Console.log in development code (unless in production paths)
- Magic numbers that are obvious in context (HTTP status codes, etc.)

## Project-Specific: PF2e Lite

This repository contains a simplified PF2e ruleset. It is currently in the
**design phase** — markdown files are design documents that will evolve into a
full rules reference over time.

### Game System Terminology

- Use PF2e/ORC spelling conventions (e.g., "mithral" not "mithril", "dawnsilver"
  not "dawn silver")
- Do not suggest spelling corrections for established game terminology

### Design Phase Guidelines

These guidelines apply while the project is in active design. They may be
relaxed once content is finalized.

#### TBD and Provisional Values

- Values marked "TBD", "proposed", or "provisional" are **intentional placeholders**
  pending playtesting or dependent design work
- Do not suggest finalizing, removing, or adding warnings to TBD entries
- Do not flag incomplete tables as bugs — they reflect the current design state

#### Scope Boundary Items (L1-10 Range)

- Items slightly outside the L1-10 level range (L11, L12) are **intentionally
  included** for completeness when they sit at the boundary
- These items always have an adjacent blockquote explaining the scope decision
- Do not suggest removing, asterisk-marking, or adding inline warnings to
  edge-of-range items that already have explanatory notes
- Do not re-raise scope concerns that are addressed by existing blockquotes

#### Cross-References and Dependencies

- References to other design documents (e.g., "see 13-shields.md") may point to
  documents with open design work — this is expected
- Do not flag cross-references as broken or incomplete when the referenced
  document exists but has unresolved design questions
