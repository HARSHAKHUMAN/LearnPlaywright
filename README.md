# OrangeHRM Playwright Tests

This repository contains Playwright end-to-end tests for the OrangeHRM demo
application. It also contains a generated example test project in
`playwright-demo/`.

## Test coverage

- OrangeHRM login scenarios
- PIM employee creation
- Employee password-confirmation validation
- PIM reports navigation
- Basic Playwright title and navigation examples

Test data is stored in the `test-data/` directory.

## Prerequisites

- Node.js LTS
- npm

## Installation

```bash
npm ci
npx playwright install
```

## Running tests

Run the complete test suite:

```bash
npx playwright test
```

Run one test file:

```bash
npx playwright test "tests/login.spec.js"
npx playwright test "tests/PIM/Add EMP.spec.js"
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## Configuration

The main Playwright configuration is in `playwright.config.js`.

- Test directory: `tests/`
- Browser project: Chromium
- Parallel execution: enabled
- Workers: up to 3 locally
- Traces: enabled
- Screenshots: enabled
- Retries: 2 in CI

## CI

GitHub Actions installs dependencies and browsers, runs the Playwright suite,
and uploads the HTML report as an artifact. The workflow runs for pushes and
pull requests targeting `main` or `master`.

## Project structure

```text
.
├── tests/
│   ├── login.spec.js
│   ├── example.spec.js
│   └── PIM/
│       ├── Add EMP.spec.js
│       └── Reports.spec.js
├── test-data/
│   ├── login.json
│   └── Add EMP.json
├── playwright.config.js
└── .github/workflows/playwright.yml
```
