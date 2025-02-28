import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  AccordionTrigger,
  AccordionContent,
  Accordion,
  AccordionItem,
} from "@govtechmy/myds-react/accordion";
import React from "react";

/**
 * ### Overview
 * This is an accordion, a collapsible content panel! It expands and contracts, revealing hidden information. Use AccordionItem to structure your content within each panel.
 * This is an example of how the accordion will look. The accordion component can be composed of the following components: *`Accordion`*, *`AccordionItem`*, *`AccordionTrigger`* and *`AccordionContent`*.
 *
 * > Lipat-melipat seperti kipas, Membuka rahsia satu persatu. Accordion mengembang dan rapat, Menyusun info dengan teratur. -- Claude
 *
 * ### Usage
 * ```tsx
 * import {
 *   AccordionTrigger,
 *   AccordionContent,
 *   Accordion,
 *   AccordionItem,
 * } from "@govtechmy/myds-react/accordion";
 *
 * const AccordionDemo = () => (
 *   <Accordion type="single" defaultValue="item-1" collapsible>
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
 *   </Accordion>
 * );
 * ```
 */

const meta = {
  title: "@govtechmy/myds-react/Components/Accordion",
  component: Accordion,
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
        category: "Accordion Props",
      },
    },
    type: {
      description:
        "Determines whether one or multiple items can be opened at the same time.",
      control: "inline-radio",
      options: ["single", "multiple"],
      table: {
        type: { summary: "enum", detail: '"single" | "multiple"' },
        defaultValue: { summary: '"single"' },
        category: "Accordion Props",
      },
    },
    value: {
      description:
        'The controlled value(s) of the item(s) to expand. Use string for "single" type and string[] for "multiple" type.',
      control: "text",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "- / []" },
        category: "Accordion Props",
      },
    },
    defaultValue: {
      description:
        'The default value(s) of the item(s) to expand. Use string for "single" type and string[] for "multiple" type.',
      control: "text",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "- / []" },
        category: "Accordion Props",
      },
    },

    collapsible: {
      description: "Allows closing content when clicking trigger of open item.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Accordion Props",
      },
    },
    disabled: {
      description:
        "When true, prevents the user from interacting with the accordion and all its items.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Accordion Props",
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionLight: Story = createStory({
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
});

export const AccordionDark: Story = createStory(
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
      <AccordionItem key="item-33" value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>,
    ],
    className: "dark",
  },
  "dark",
);

export const AccordionDisabled: Story = createStory({
  type: "multiple",
  disabled: true,
  children: [
    <AccordionItem key="item-1" value="item-1" disabled>
      <AccordionTrigger>This item has been disabled</AccordionTrigger>
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
});

export const AccordionItemDisabled: Story = createStory({
  children: [
    <AccordionItem key="item-1" value="item-1" disabled>
      <AccordionTrigger>This item has been disabled</AccordionTrigger>
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
});
