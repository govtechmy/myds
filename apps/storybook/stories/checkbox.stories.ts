import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import Checkbox from "@myds/react/checkbox";

/**
 * ### Overview
 * The Checkbox component provides a customizable and accessible checkbox input.
 *
 * > Checkbox, small but grand,
 * > Click to mark, a simple command,
 * > States change at your hand,
 * > User's choice, it does understand.
 *
 * ### Usage
 * ```tsx
 * import Checkbox from "@myds/react/checkbox";
 *
 * <Checkbox />
 * ```
 */
const meta = {
  title: "@myds/react/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  argTypes: {
    checked: {
      control: "boolean",
      description: "The checked state of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS class names for the checkbox",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of the Checkbox component.
 */
export const Default: Story = createStory({});

export const Checked: Story = createStory({
  args: {
    checked: true,
  },
});

export const Disabled: Story = createStory({
  args: {
    disabled: true,
  },
});

export const CheckedDisabled: Story = createStory({
  args: {
    checked: true,
    disabled: true,
  },
});
