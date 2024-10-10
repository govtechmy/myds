import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionRoot,
  AccordionItem,
  AccordionDemo,
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
 *   AccordionDemo,
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
const meta = {
  title: "@myds/react/Accordion",
  component: AccordionDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: { onClick: fn() },
  argTypes: {
    type: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "inline-radio",
      options: ["option-1", "option-2", "option-3"],
    },
  },
} satisfies Meta<typeof AccordionDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({  insert-args-here  });
 * export const DarkDefault: Story = createStory({ insert-args-here  }, "dark");
 */

export const Default: Story = createStory({
  children: "Example",
});
