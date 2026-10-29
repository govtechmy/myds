# Malaysian Government Design System (MYDS)

> **Unofficial fork.** This isn't the official MYDS repository; that's [govtechmy/myds](https://github.com/govtechmy/myds). This fork adds [`DESIGN.md`](./DESIGN.md), an independent description of MYDS as built for AI agents working on official Malaysian government services, and its glossary, [`CONTEXT.md`](./CONTEXT.md). Both files are © 2026 Amer Fathullah Nuaim Zakaria, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the licence covers only their text, not MYDS itself. For DESIGN.md files of other design systems, see [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

![myds-hero-img](https://d2391uizq0pg2.cloudfront.net/design/myds-hero-img.png)

## Preview

Interactive previews of the MYDS design tokens and component library — no framework build required.

| Theme | Link |
|-------|------|
| ☀️ Light | [preview.html](./preview.html) |
| 🌙 Dark | [preview-dark.html](./preview-dark.html) |

> The Malaysian Government Design System (MYDS) contains the design guideline and the component library for creating consistent and accessible digital services across the Malaysian government.

There are two (2) key products in MYDS:

1. **Design Language Guideline**: Aimed at designers and project managers, this guideline provides the principles, standards, and best practices for designing user interfaces that are cohesive and user-friendly.
2. **Component Library**: Targeted at developers, this library offers a collection of reusable UI components that adhere to the design language guidelines, ensuring consistency and efficiency in development.

## Documentation

1. Design Guideline: https://design.digital.gov.my/en/docs/design
2. Component Library: https://design.digital.gov.my/en/docs/develop

## Contributing

MYDS is an open-source project and welcomes contributions from the public. To contribute, please read our [contributing guideline](./CONTRIBUTING.md)

We look forward to see what you may bring to MYDS.

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
