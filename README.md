# Malaysian Government Design System (MYDS)

![myds-hero-img](https://d2391uizq0pg2.cloudfront.net/design/myds-hero-img.png)

> The Malaysian Government Design System (MYDS) contains the design guideline and the component library for creating consistent and accessible digital services across the Malaysian government.

There are two (2) key products in MYDS:

1. **Design Language Guideline**: Aimed at designers and project managers, this guideline provides the principles, standards, and best practices for designing user interfaces that are cohesive and user-friendly.
2. **Component Library** (🚧 _under active development_): Targeted at developers, this library offers a collection of reusable UI components that adhere to the design language guidelines, ensuring consistency and efficiency in development.

## Documentation

1. Design Guideline: https://design.digital.gov.my/en/docs/design
2. Component Library: https://design.digital.gov.my/en/docs/develop

## Contributing

MYDS is an open-source project and welcomes contributions from the public. To contribute:

1. **Discuss New Features**: Before submitting a pull request (PR), please open an issue to discuss the feature you would like to add or change. This helps to ensure that your contribution aligns with the project's goals and guidelines.
2. **Submit a PR**: Once the feature has been discussed and approved, you can submit a PR with your changes. Please follow the contribution guidelines provided in the repository.

We look forward to collaborating with you to improve MYDS.

---

## important note

### 1. Tailwind Intellisense Workaround

MYDS incorporates a unified tailwind config file, as the base config for multiple apps/packages. If you are using Tailwind Intellisense extension on VSCode, you may lose the extension's ability to auto-suggest and CSS preview if you work within `packages/**`. This is because the extension requires `tailwind.config` to be available in the local package workspace, which is not defined in individual packages.

To solve this, add the following in your VSCode **Workspace settings** (_Not your User settings_):

```json
// .vscode/settings.json
{
  "tailwindCSS.experimental.configFile": {
    "apps/docs/tailwind.config.ts": "apps/docs/**",
    "packages/tailwindcss/tailwind.config.ts": "packages/**"
  }
}
```

This will override Intellisense's auto-config-locator to point to the defined config files and together with its glob scope.

Made with ❤️ by GNU, Kementerian Digital
