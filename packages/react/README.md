# myds-react

![myds-hero-img](https://d2391uizq0pg2.cloudfront.net/design/myds-hero-img.png)

> The Malaysian Government Design System (MYDS) is an open-source design system to build products for the Malaysian government. It contains the design guideline and the component library for creating consistent and accessible digital services.

## Getting started

To install `@govtechmy/myds-react` in your project, run the installation command for the package manager of your choice:

```bash
# npm
npm i @govtechmy/myds-react

# yarn
yarn add @govtechmy/myds-react

# pnpm
pnpm add @govtechmy/myds-react
```

This package requires [@govtechmy/myds-style](#) to provide styling. For more info on how to configure the styling, we recommend to check out the docs provided below:

- [Style Configuration](https://design.digital.gov.my/en/docs/develop/install#b-import-via-css)

## Usage

The package provides components and icons to support MYDS implementation for your project.

To use a component, you can import directly from the package:

```tsx
import { Button } from "@govtechmy/myds-react/button";

<Button variant="primary-fill" size="small">
  Jana Pantun
</Button>;
```

> For Nextjs or any framework that supports RSC, please note that MYDS components are not RSC-compatible. To make it work, you are required to explicitly render the components client-side with the `"use client"` directive or similar

## Contributing

MYDS is an open-source project and welcomes contributions from the public. To contribute:

1. **Discuss New Features**: Before submitting a pull request (PR), please open an issue to discuss the feature you would like to add or change. This helps to ensure that your contribution aligns with the project's goals and guidelines.
2. **Submit a PR**: Once the feature has been discussed and approved, you can submit a PR with your changes. Please follow the contribution guidelines provided in the repository.

We look forward to collaborating with you to improve MYDS.

---
