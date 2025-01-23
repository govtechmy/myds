import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Pill } from "@govtechmy/myds-react/pill";

/**
 * ### Overview
 * A pill is a small, rounded UI element to represent tags or categories in a textfield. Pills can contain text and may include an "x" button to allow for easy removal.
 *
 * ### Usage
 * ```tsx
 * import Pill from "@govtechmy/myds-react/pill";
 *
 * <Pill size="large" disabled={false} onDismiss={() => {}}/>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Pill",
  component: Pill,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    size: {
      table: {
        type: {
          summary: "enum",
        },
      },
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    disabled: {
      type: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    onDismiss: {
      type: "function",
    },
    asChild: {
      type: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = createStory({
  children: "Label",
});

/**
 * Pass a callback to the `onDismiss` prop to show a remove button.
 */
export const WithDelete: Story = createStory({
  children: "Label",
  onDismiss: fn(),
});

export const Disabled: Story = createStory({
  children: "Label",
  disabled: true,
});

export const Dark: Story = createStory(
  {
    className: "dark",
    children: "Label",
  },
  "dark",
);

/**
 * Pass a callback to the `onDismiss` prop to show a remove button.
 */
export const WithDeleteDark: Story = createStory(
  {
    className: "dark",
    children: "Label",
    onDismiss: fn(),
  },
  "dark",
);

export const DisabledDark: Story = createStory(
  {
    className: "dark",
    children: "Label",
    disabled: true,
  },
  "dark",
);
