import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import AccordionDemo, {
  AccordionTrigger,
  AccordionContent,
  AccordionRoot,
  AccordionItem,
} from "@myds/react/accordion";

/**
 * ### Overview
 * This is an accordion, a collapsible content panel! It expands and contracts, revealing hidden information. Use AccordionItem to structure your content within each panel.
 *
 * > Lipat-melipat seperti kipas, Membuka rahsia satu persatu. Accordion mengembang dan rapat, Menyusun info dengan teratur. -- Claude
 *
 * ### Usage
 * ```ts
 * import {
 *   AccordionTrigger,
 *   AccordionContent,
 *   AccordionRoot,
 *   AccordionItem,
 * } from "@myds/react/accordion";
 *
 * const AccordionDemo = () => (
 *   <AccordionRoot type="single" defaultValue="item-1" collapsible>
 *     <AccordionItem value="item-1">
 *       <AccordionTrigger>What is React?</AccordionTrigger>
 *       <AccordionContent>
 *         React is a popular JavaScript library for building user interfaces.
 *         Developed by Facebook, it allows developers to create reusable UI
 *         components and manage the state of web applications efficiently. React
 *         uses a virtual DOM for optimal rendering performance.
 *       </AccordionContent>
 *     </AccordionItem>
 *
 *     <AccordionItem value="item-2">
 *       <AccordionTrigger>How does JSX works?</AccordionTrigger>
 *       <AccordionContent>
 *         JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used
 *         with React. It allows you to write HTML-like code directly in your
 *         JavaScript files. JSX gets transpiled to regular JavaScript function
 *         calls and objects before it runs in the browser. This makes it easier to
 *         visualize the structure of your UI components.
 *       </AccordionContent>
 *     </AccordionItem>
 *
 *     <AccordionItem value="item-3">
 *       <AccordionTrigger>What are React Hooks?</AccordionTrigger>
 *       <AccordionContent>
 *         <div className="AccordionContentText">
 *           JSX (JavaScript XML) is a syntax extension for JavaScript, commonly
 *           used with React. It allows you to write HTML-like code directly in
 *           your JavaScript files. JSX gets transpiled to regular JavaScript
 *           function calls and objects before it runs in the browser. This makes
 *           it easier to visualize the structure of your UI components.
 *         </div>
 *       </AccordionContent>
 *     </AccordionItem>
 *   </AccordionRoot>
 * );
 * ```
 */
// const meta = {
//   title: "@myds/react/Accordion",
//   component: AccordionDemo,
//   tags: ["autodocs"],
//   parameters: {
//     layout: "padded",
//   },
// } satisfies Meta<typeof AccordionDemo>;

const meta = {
  title: "Components/Accordion",
  component: AccordionRoot,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    asChild: {
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      control: "boolean",
    },
    type: {
      description:
        "Determines whether one or multiple items can be opened at the same time.",
      control: { type: "radio" },
      options: ["single", "multiple"],
    },
    value: {
      description:
        'The controlled value(s) of the item(s) to expand. Use string for "single" type and string[] for "multiple" type.',
      control: "text",
    },
    defaultValue: {
      description:
        'The default value(s) of the item(s) to expand. Use string for "single" type and string[] for "multiple" type.',
      control: "text",
    },
    onValueChange: {
      description:
        'Event handler called when the expanded state changes. Receives a string for "single" type and string[] for "multiple" type.',
      action: "onValueChange",
    },
    collapsible: {
      description:
        'When type is "single", allows closing content when clicking trigger of open item.',
      control: "boolean",
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the accordion and all its items.",
      control: "boolean",
    },
    dir: {
      description: "The reading direction of the accordion.",
      control: { type: "radio" },
      options: ["ltr", "rtl"],
    },
    orientation: {
      description: "The orientation of the accordion.",
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
  },
} satisfies Meta<typeof AccordionRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryFill: Story = createStory({});

export const Item: Story = {};
