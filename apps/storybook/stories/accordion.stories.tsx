import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionRoot,
  AccordionItem,
} from "@myds/react/accordion";
import React from "react";

/**
 * ### Overview
 * This is an accordion, a collapsible content panel! It expands and contracts, revealing hidden information. Use AccordionItem to structure your content within each panel.
 * This is an example of how the accordion will look. The accordion component can be composed of the following components: *`AccordionRoot`*, *`AccordionItem`*, *`AccordionTrigger`* and *`AccordionContent`*.
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
 *     <AccordionItem key="item-1" value="item-1">
 *       <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *       <AccordionContent>
 *         Yes. It adheres to the WAI-ARIA design pattern.
 *       </AccordionContent>
 *     </AccordionItem>
 *     <AccordionItem key="item-2" value="item-2">
 *       <AccordionTrigger>Is it styled?</AccordionTrigger>
 *       <AccordionContent>
 *         Yes. It comes with default styles that matches the other components'
 *         aesthetic.
 *       </AccordionContent>
 *     </AccordionItem>
 *     <AccordionItem key="item-3" value="item-3">
 *       <AccordionTrigger>Is it animated?</AccordionTrigger>
 *       <AccordionContent>
 *         Yes. It's animated by default, but you can disable it if you prefer.
 *       </AccordionContent>
 *     </AccordionItem>
 *   </AccordionRoot>
 * );
 * ```
 */

const meta = {
  title: "Components/Accordion",
  component: AccordionRoot,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    asChild: {
      control: false,
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
      },
    },
    type: {
      description:
        "Determines whether one or multiple items can be opened at the same time.",
      control: { type: "radio" },
      options: ["single", "multiple"],
      table: {
        type: { summary: "enum", detail: '"single" | "multiple"' },
      },
    },
    value: {
      description:
        'The controlled value(s) of the item(s) to expand. Use string for "single" type and string[] for "multiple" type.',
      control: false,
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "- / []" },
      },
    },
    defaultValue: {
      description:
        'The default value(s) of the item(s) to expand. Use string for "single" type and string[] for "multiple" type.',
      control: false,
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "- / []" },
      },
    },
    onValueChange: {
      description:
        'Event handler called when the expanded state changes. Receives a string for "single" type and string[] for "multiple" type.',
      action: "onValueChange",
      control: false,
      table: {
        type: { summary: "function" },
        defaultValue: { summary: "-" },
      },
    },
    collapsible: {
      description:
        'When type is "single", allows closing content when clicking trigger of open item.',
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the accordion and all its items.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    dir: {
      description: "The reading direction of the accordion.",
      control: { type: "radio" },
      options: ["ltr", "rtl"],
      table: {
        type: { summary: "enum", detail: '"ltr" | "rtl"' },
        defaultValue: { summary: "ltr" },
      },
    },
    orientation: {
      description: "The orientation of the accordion.",
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      table: {
        type: { summary: "enum", detail: '"vertical" | "horizontal"' },
        defaultValue: { summary: "vertical" },
      },
    },
  },
} satisfies Meta<typeof AccordionRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ## AccordionRoot
 * The table that immediately
 * follows this example displays the props that the *`AccordionRoot`* component accepts.
 */

export const AccordionRootStory: Story = createStory(
  {
    children: [
      <AccordionItem key="item-1" value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key="item-2" value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key="item-3" value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>,
    ],
  },
  "light",
);

AccordionRootStory.decorators = [
  (Story, context) => {
    if (context.args.type === "single") {
      context.args.value = "item-1";
      context.args.defaultValue = "item-1";
    } else if (context.args.type === "multiple") {
      context.args.value = ["item-1", "item-2"];
      context.args.defaultValue = ["item-1", "item-2"];
    }
    return Story();
  },
];
