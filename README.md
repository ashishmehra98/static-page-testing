# Ecovia

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Development Setup

This project includes comprehensive code quality tools to ensure consistent formatting and linting across the codebase.

### Code Quality Tools

#### ESLint

- **Configuration**: Custom ESLint rules with TypeScript support
- **Parser**: `@typescript-eslint/parser`
- **Plugins**: `import`, `react-hooks`
- **Key Rules**:
  - Double quotes with escape avoidance
  - Tab indentation (SwitchCase: 1)
  - Semicolons required
  - Unix line endings
  - Import ordering
  - React hooks rules

#### Prettier

- **Configuration**: `.prettierrc` with custom formatting rules
- **Key Settings**:
  - Print width: 130 characters
  - Use tabs: true (tab width: 2)
  - Semicolons: required
  - Double quotes (not single)
  - Trailing commas: all
  - Bracket same line: true
  - Bracket spacing: true
  - Arrow parens: always

#### Husky + Lint-staged

- **Pre-commit hooks**: Automatically format and lint staged files
- **Efficiency**: Only processes changed files, not the entire codebase
- **File types**: `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.css`, `.md`

### Available Scripts

```bash
# Development
yarn dev          # Start development server with Turbopack
yarn build        # Build for production with Turbopack
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
yarn format       # Format all files with Prettier
yarn format:check # Check formatting without making changes

# Git Hooks (automatic)
# Pre-commit: Runs prettier and eslint --fix on staged files
```

#### Package manager

- The repository uses **Yarn Classic (1.22.x)**. Running Yarn 2+/Berry will rewrite `yarn.lock` and introduce `.yarnrc.yml`/
  `.yarn/` metadata that we do not commit. If you have Corepack enabled, pin to `yarn@1.22.22` (already declared in
  `package.json`) to keep the lockfile stable.

### Memory diagnostics

Deploys include a lightweight memory report endpoint to help investigate issues like the rising baseline seen in hosting metrics.

- Set an environment variable `DIAGNOSTICS_TOKEN` to require an `x-diagnostic-token` header for access (optional but recommended).
- Request `GET /api/diagnostics/memory` to retrieve current RSS, heap usage, resource statistics, and whether GC is exposed.
- Use the response to correlate heap growth with uptime and identify whether the process is accumulating memory without requests.
- Follow the [memory diagnostics guide](docs/memory-diagnostics.md) for step-by-step instructions on sampling, interpreting trends, and deciding whether a leak is present.

### Git Hooks

This project uses Husky to automatically run code quality checks before commits:

- **Pre-commit**: Automatically formats code with Prettier and fixes ESLint issues
- **Staged files only**: Only processes files you're committing (efficient)
- **Blocking**: Prevents commits with unfixable linting errors

### Configuration Files

- `.eslintrc.mjs` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to exclude from Prettier
- `.husky/pre-commit` - Git pre-commit hook
- `package.json` - Lint-staged configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
