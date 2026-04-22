# Vue 3 Starter Template

![CI Quality](https://github.com/suradet-ps/vue-starter/actions/workflows/ci.yml/badge.svg)
[![Vue](https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0+-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2+-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-4.1+-6E9F18?logo=vitest)](https://vitest.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-10.17+-F69220?logo=pnpm)](https://pnpm.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **A professional-grade, opinionated starter template for scalable Vue 3 applications.**

Designed for developer experience, code quality, and long-term maintainability. This template pre-configures the best-in-class tools so you can focus on building features, not configuring build tools.

---

## Features

### Core Stack

- **[Vue 3.5+](https://vuejs.org/)**: Utilizing the Composition API with `<script setup>` for concise and performant components.
- **[TypeScript 5.9+](https://www.typescriptlang.org/)**: configured with `strict: true` and `noUncheckedIndexedAccess` for maximum type safety.
- **[Vite 7](https://vitejs.dev/)**: Next-generation frontend tooling with instant server start and lightning-fast HMR.
- **[Tailwind CSS 4.1](https://tailwindcss.com/)**: The latest utility-first CSS framework, integrated via the new Vite plugin for optimal performance.

### Developer Experience

- **[ESLint](https://eslint.org/)**: Powered by [@antfu/eslint-config](https://github.com/antfu/eslint-config) for a zero-config, opinionated linting and formatting experience.
- **[Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged)**: Ensures all committed code meets quality standards.
- **[Commitlint](https://commitlint.js.org/)**: Enforces [Conventional Commits](https://www.conventionalcommits.org/) for clean and semantic git history.
- **[VueUse](https://vueuse.org/)**: A collection of essential Vue Composition Utilities.

### Architecture

- **[Pinia](https://pinia.vuejs.org/)**: The intuitive, type-safe store for Vue.
- **[Vue Router](https://router.vuejs.org/)**: Standard routing with history mode and lazy-loading support.
- **File-Based Routing**: Structured `views` directory for clear page organization.
- **Path Aliases**: `@/` configured to resolve to `./src/`.

### Testing & Quality

- **[Vitest](https://vitest.dev/)**: Blazing fast unit testing framework, API-compatible with Jest.
- **[GitHub Actions](https://github.com/features/actions)**: Automated CI pipeline for linting, type-checking, and testing.
- **[audit-ci](https://github.com/IBM/audit-ci)**: Prevents deployment of dependencies with known high-severity vulnerabilities.

---

## IDE Setup

For the best experience, we recommend **[VS Code](https://code.visualstudio.com/)** with the following configuration:

1.  **Install Extensions**:
    - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (formerly Volar)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2.  **Workspace Settings**:
    This project includes `.vscode/extensions.json` and `.vscode/settings.json` to automatically configure your editor for:
    - Auto-fixing lint errors on save.
    - Correct TypeScript integration with Vue.

> **Note:** If you have the legacy **Vetur** extension installed, please **disable** it for this workspace to avoid conflicts.

---

## Prerequisites

Ensure your environment meets the following requirements:

| Requirement | Version     | Note                             |
| :---------- | :---------- | :------------------------------- |
| **Node.js** | `22+` (LTS) | Required for modern build tools. |
| **pnpm**    | `10.17+`    | Enforced via `package.json`.     |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/suradet-ps/vue-starter.git my-app
cd my-app
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start development server

```bash
pnpm dev
```

The application will be available at `http://localhost:5173/`.

---

## Available Scripts

| Category        | Script               | Description                               |
| :-------------- | :------------------- | :---------------------------------------- |
| **Development** | `pnpm dev`           | Start the development server with HMR.    |
|                 | `pnpm preview`       | Preview the production build locally.     |
| **Build**       | `pnpm build`         | Run type-checks and build for production. |
| **Quality**     | `pnpm lint`          | Lint and format all files.                |
|                 | `pnpm lint:fix`      | Auto-fix linting and formatting issues.   |
|                 | `pnpm type-check`    | Run the TypeScript compiler (no emit).    |
|                 | `pnpm audit`         | Check for high-severity vulnerabilities.  |
| **Testing**     | `pnpm test:unit`     | Run unit tests in watch mode.             |
|                 | `pnpm test:coverage` | Run tests and generate coverage reports.  |
| **Lifecycle**   | `pnpm prepare`       | Install Husky git hooks.                  |

---

## Project Structure

```text
.
├── .github/             # CI/CD workflows (GitHub Actions)
├── .husky/              # Git hooks configuration
├── .vscode/             # VS Code workspace settings
├── src/
│   ├── assets/          # Static assets (images, fonts, global CSS)
│   ├── components/      # Reusable UI components
│   │   └── common/      # Generic components (Buttons, Inputs, etc.)
│   ├── composables/     # Shared logic (Vue Composables)
│   ├── layouts/         # Layout components (e.g., Sidebar, Header)
│   ├── router/          # Routing configuration
│   ├── stores/          # Global state management (Pinia)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Helper functions and utilities
│   ├── views/           # Page-level components
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── tests/               # Unit tests (mirrors src structure)
├── eslint.config.mjs    # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

---

## Configuration Details

### TypeScript

We use a strict TypeScript configuration to catch errors early.

- **`strict: true`**: Enables all strict type checking options.
- **`noUncheckedIndexedAccess: true`**: Prevents accessing array/object indices without checking for `undefined`.

### ESLint

We utilize **@antfu/eslint-config**, which provides a curated set of rules for Vue, TypeScript, and general code style.

- **No Prettier**: Formatting is handled directly by ESLint.
- **Auto-Import Sorting**: Imports are automatically sorted and grouped.
- **Single Quotes & Semicolons**: Configured for consistency.

---

## Deployment

### Static Hosting (Vercel, Netlify, etc.)

This project builds a static SPA.

1. **Build Command**: `pnpm build`
2. **Output Directory**: `dist`
3. **Node Version**: `22.x`

---

## Contributing

1.  **Fork** the repository.
2.  **Create** a feature branch: `git checkout -b feat/my-feature`.
3.  **Commit** your changes following [Conventional Commits](https://www.conventionalcommits.org/): `git commit -m "feat: add amazing feature"`.
4.  **Push** to the branch: `git push origin feat/my-feature`.
5.  **Open** a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).
