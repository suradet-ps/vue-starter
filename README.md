# Vue 3 Starter Template

```
██╗   ██╗██╗   ██╗███████╗ ██████╗████████╗ █████╗ ██████╗ ████████╗███████╗██████╗
██║   ██║██║   ██║██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
██║   ██║██║   ██║█████╗  ███████╗   ██║   ███████║██████╔╝   ██║   █████╗  ██████╔╝
╚██╗ ██╔╝██║   ██║██╔══╝  ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ██╔══╝  ██╔══██╗
 ╚████╔╝ ╚██████╔╝███████╗██████╔╝   ██║   ██║  ██║██║  ██║   ██║   ███████╗██║  ██║
  ╚═══╝   ╚═════╝ ╚══════╝╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
```

---

## ◆ PULSE

A new Vue project should start with its decisions made, not with a
week of setup ahead. This is the opinionated starter template: Vue 3.5
with `<script setup>`, TypeScript that refuses unchecked access,
Tailwind 4 via the Vite plugin, Pinia and Vue Router pre-wired, and a
quality corridor - ESLint, Husky, Commitlint, Vitest, audit-ci - that
runs before the code ever commits. Clone it, rename it, and build the
feature that matters instead of the toolchain.

| Type-safe ▣ | Quality gates ▣ | Pre-wired ▣ | Zero-config ▣ |
| ----------- | --------------- | ----------- | ------------- |

_The scaffold - stack, gates, structure - is sealed._

> Built with Vue 3.5 + TypeScript 5.9 + Vite, linted by
> `@antfu/eslint-config`, gated by Husky and Commitlint - the boring
> parts, decided once.
>
> **suradet-ps**, artifact keeper

---

## ◆ IGNITION

Three commands, a new project in minutes.

```
⟫ git clone https://github.com/suradet-ps/vue-starter.git my-app
⟫ cd my-app
⟫ pnpm install
⟫ pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

```
⟫ pnpm build         # type-check, then production build
⟫ pnpm lint          # ESLint + formatting
⟫ pnpm test:unit     # Vitest
⟫ pnpm audit         # high-severity vulnerability gate
```

<details>
<summary>Prerequisites</summary>

- Node.js 22+ (LTS)
- [pnpm](https://pnpm.io/) 10.17+ - enforced via `package.json`

</details>

---

## ◆ ANATOMY

One scaffold, several already-made decisions.

- **Types** - `strict: true` and `noUncheckedIndexedAccess` on
  TypeScript 5.9 - an index access without a guard is a compile error,
  not a runtime surprise.
- **Styles** - Tailwind CSS 4 integrated through the Vite plugin -
  utility-first styling without a PostCSS pipeline to babysit.
- **Structures** - Pinia stores, Vue Router with lazy loading, a
  `views/` directory, `@/` path aliases, and a `common/` component
  shelf - the architecture is a convention before the first feature.
- **Gates** - `@antfu/eslint-config` lints and formats (no Prettier,
  import sorting included), Husky + lint-staged guard every commit,
  Commitlint enforces conventional commits, and Vitest stands ready
  for unit tests.
- **Audits** - `audit-ci` blocks deployment on known high-severity
  dependency vulnerabilities - the supply chain is checked the way
  the code is.
- **Ready** - VS Code workspace settings and extensions are included:
  Volar, Tailwind IntelliSense, and ESLint with fix-on-save - the
  editor behaves before the first keystroke.

---

## ◆ RITUALS

**The core ceremony** - the project birth:

1. Clone the template as the new name: `vue-starter` becomes
   `my-app` in one command.
2. Install with pnpm. The hooks install themselves (`pnpm prepare`);
   the editor configures itself from `.vscode/`.
3. Commit with a conventional message - the corridor already ran:
   lint, format, type-check, tests.
4. Build features. The scaffold's decisions are done; the feature's
   decisions are yours.

**The ceremony of the committed code** - nothing reaches a commit
without the corridor: lint-staged on the staged files, Commitlint on
the message, audit-ci on the dependencies. The history is clean
because the gates are automatic.

**The ceremony of the convention** - the folder structure, the
aliases, and the store layout are contract, not suggestion. A team
that starts on the same scaffold argues about features, not folders.

---

## ◆ ECHOES

**Where this artifact is heading**

```
stack    ▸ Vue 3.5, TS strict, Tailwind 4, Pinia, Router ───────────── ▸ sealed
gates    ▸ ESLint, Husky, Commitlint, Vitest, audit-ci ─────────────── ▸ sealed
editor   ▸ VS Code settings + extensions, fix-on-save ──────────────── ▸ sealed
pipeline ▸ CI lint + type-check + test on every push ───────────────── ▸ sealed
```

**Raising the artifact** - the template's health is its dependency
discipline: Renovate keeps the stack current, CI keeps the gates
green. Open an issue first to discuss a change to the defaults.

**Status** - CI runs the quality gates on every push.
[Watch the gates](.github/workflows).

---

```
  ─────────────────────────────────────────
   The best scaffold is the one
   you never think about again.
  ─────────────────────────────────────────
```

Licensed under the [MIT License](LICENSE).
