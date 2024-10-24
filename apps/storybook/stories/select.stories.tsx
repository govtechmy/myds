import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectHeader,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@myds/react/select";

/**
 * ### Overview
 * Insert a brief description of the component here.
 *
 * > Insert a ChatGPT pantun here
 *
 * ### Usage
 * ```ts
 * import Select from "@myds/react/select";
 *
 * <Select />
 * ```
 */
const meta = {
  title: "@myds/react/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    multiple: false,
    disabled: false,
    size: "small",
    variant: "outline",
  },
  argTypes: {
    size: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    multiple: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "boolean",
    },
    variant: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "inline-radio",
      options: ["outline", "ghost"],
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      description: "insert-description-here",
      control: "boolean",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({ ... });
 * export const DarkDefault: Story = createStory({ ... , className="dark"}, "dark");
 */

export const Default: Story = createStory({
  children: [
    <SelectTrigger>
      <SelectValue label="Fruit" placeholder="Select" />
    </SelectTrigger>,
    <SelectContent>
      <SelectGroup>
        {/* <SelectHeader>Fruits</SelectHeader> */}
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>,
  ],
});
