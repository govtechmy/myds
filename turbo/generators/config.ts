import { PlopTypes } from "@turbo/gen";
import convertIcon from "./scripts/convert-icon";
import barrelIcon from "./scripts/barrel-icon";
interface ComponentPrompt {
  framework: "react" | "vue" | "angular";
  title: string;
  has_story: boolean;
}

interface MDXPrompt {
  project: "design" | "develop";
  title: string;
}

/**
 *! DO NOT MODIFY. This is a template for the export statement in the package.json file.
 */
const ComponentExport = `,
    "./{{ dashCase title}}": {
      "type": "./src/components/{{ dashCase title}}.tsx",
      "default": "./src/components/{{ dashCase title}}.tsx"
    }`;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Component generator
  plop.setGenerator("component", {
    description: "Scaffolds a component",
    prompts: [
      {
        type: "list",
        choices: ["react"], // vue and angular are not supported yet
        default: "react",
        name: "framework",
        message: "For which library/framework? ",
      },
      {
        type: "input",
        name: "title",
        message: "Component name:",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "Component name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "Component name cannot include spaces";
          }
          if (!input) {
            return "Component name is required";
          }
          return true;
        },
      },
      {
        type: "confirm",
        default: true,
        name: "has_story",
        message: "Include the story? (@myds/storybook)",
      },
    ],
    actions: (data) => {
      const _data = data as ComponentPrompt;
      const actions: PlopTypes.ActionType[] = [];

      if (_data.framework === "react") {
        actions.push(
          {
            type: "add",
            path: "{{ turbo.paths.root }}/packages/react/src/components/{{ dashCase title }}.tsx",
            templateFile: "templates/react-component.hbs",
          },
          {
            type: "append",
            path: "{{ turbo.paths.root }}/packages/react/package.json",
            pattern: /("exports":\s*{[^}]*)(})/,
            template: ComponentExport,
          },
        );
      }

      if (_data.has_story) {
        actions.push({
          type: "add",
          path: "{{ turbo.paths.root }}/apps/storybook/stories/{{ dashCase title }}.stories.tsx",
          templateFile: "templates/react-story.hbs",
        });
      }
      return actions;
    },
  });

  // Hook generator
  plop.setGenerator("hook", {
    description: "Scaffolds a hook",
    prompts: [
      {
        type: "list",
        choices: ["react"], // vue and angular are not supported yet
        default: "react",
        name: "framework",
        message: "For which library/framework? ",
      },
      {
        type: "input",
        name: "title",
        message: "Hook name:",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "Component name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "Component name cannot include spaces";
          }
          if (!input) {
            return "Component name is required";
          }
          return true;
        },
      },
    ],
    actions: (data) => {
      const _data = data as ComponentPrompt;
      const actions: PlopTypes.ActionType[] = [];

      if (_data.framework === "react") {
        actions.push({
          type: "add",
          path: "{{ turbo.paths.root }}/packages/react/src/hooks/{{ dashCase title }}.ts",
          templateFile: "templates/react-hook.hbs",
        });
      }
      return actions;
    },
  });

  // MDX generator
  plop.setGenerator("mdx", {
    description: "Scaffolds MDX file for MYDS docs",
    prompts: [
      {
        type: "list",
        choices: [
          "principle",
          "design/(foundation)",
          "design/(foundation)",
          "design/(components)",
          "develop/(getting-started)",
          "develop/(components)",
          "develop/(hooks)",
          "develop/(installation)",
        ],
        name: "project",
        message: "Docs MDX for:",
      },
      {
        type: "input",
        name: "title",
        message: "Title:",
        validate: (input: string) => {
          if (!input) {
            return "MDX file name is required";
          }
          return true;
        },
      },
    ],
    actions: (data) => {
      const actions: PlopTypes.ActionType[] = [];

      actions.push({
        type: "add",
        path: "{{ turbo.paths.root }}/apps/docs/content/docs/{{ project }}/{{ dashCase title }}.mdx",
        templateFile: "templates/docs-mdx.hbs",
      });
      actions.push({
        type: "add",
        path: "{{ turbo.paths.root }}/apps/docs/content/docs/{{ project }}/{{ dashCase title }}.ms.mdx",
        templateFile: "templates/docs-mdx.hbs",
      });

      return actions;
    },
  });

  // Icon generator
  plop.setGenerator("icon", {
    description: "Builds React component icons from SVG",
    prompts: [
      {
        type: "list",
        choices: ["react"], // vue and angular are not supported yet
        default: "react",
        name: "framework",
        message: "For which library/framework? ",
      },
      // {
      //   type: "input",
      //   name: "title",
      //   message: "Hook name:",
      //   validate: (input: string) => {
      //     if (input.includes(".")) {
      //       return "Component name cannot include an extension";
      //     }
      //     if (input.includes(" ")) {
      //       return "Component name cannot include spaces";
      //     }
      //     if (!input) {
      //       return "Component name is required";
      //     }
      //     return true;
      //   },
      // },
    ],
    actions: (data) => {
      const _data = data as ComponentPrompt;
      const actions: PlopTypes.ActionType[] = [];

      convertIcon({ framework: _data.framework });
      barrelIcon({ framework: _data.framework });
      return actions;
    },
  });
}
