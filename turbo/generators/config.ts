import { PlopTypes } from "@turbo/gen";

interface ComponentPrompt {
  framework: "react" | "vue" | "angular";
  title: string;
}

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
    ],
    actions: (data) => {
      const _data = data as ComponentPrompt;
      const actions: PlopTypes.ActionType[] = [];

      if (_data.framework === "react") {
        actions.push({
          type: "add",
          path: "{{ turbo.paths.root }}/packages/react/src/components/{{ dashCase title }}.tsx",
          templateFile: "templates/react-component.hbs",
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
}
