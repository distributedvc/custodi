<h1 align="center">
  @distributed/custodi
</h1>

<p align="center">
  <a href="https://prettier.io">
    <img src="https://img.shields.io/badge/code_style-prettier-0a0a0a.svg?style=flat-square" alt="Code Style" />
  </a>

  <a href="https://npmjs.com/package/@distributed/custodi">
    <img src="https://img.shields.io/npm/v/@distributed/custodi/latest.svg?style=flat-square" alt="npm version" />
  </a>

  <br />

  <a href="https://npmjs.com/package/@distributed/custodi">
    <img src="https://img.shields.io/npm/dt/@distributed/custodi.svg?style=flat-square" alt="npm downloads" />
  </a>

  <a href="https://packagephobia.now.sh/result?p=@distributed/custodi">
    <img src="https://flat.badgen.net/packagephobia/install/@distributed/custodi" alt="Package Phobia" />
  </a>

  <a href="https://bundlephobia.com/result?p=@distributed/custodi">
    <img src="https://flat.badgen.net/bundlephobia/minzip/@distributed/custodi" alt="Bundle Phobia" />
  </a>
</p>

> Small library to save utm parameters into a session cookie.

### Install

With yarn:

```bash
yarn add @distributed/custodi
```

With npm:

```bash
npm install @distributed/custodi
```

## Usage

```ts
import { custodi } from '@distributed/custodi';

// location.search => ?utm_source=google&utm_campaign=campaignName&utm_medium=medium&utm_content=content&utm_term=term
custodi({ timeout: 30, query: location.search });
```

## Coming soon

- [ ] Support SSR
- [ ] Add more options for cookies, name, etc.

## Development

1. Install dependencies using `yarn install` or `npm install`
2. Start development server using `yarn watch`
