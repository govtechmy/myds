import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import Button from "@myds/react/button";

/**
 * ### Overview
 * Lie in here is a button. How exciting! It can be filled with primary colors, outlined, or ghosted. It can also be disabled. The button can be small, medium, or large. It can also be a submit or reset button.
 *
 * > Berjalan-jalan ke kota tua,
 * >  Membeli kuih di pasar pagi.
 * > Membuka jalan menuju dunia,
 * > 'Button' ditekan dengan jari. -- ChatGPT
 *
 * ### Usage
 * ```ts
 * import Button from @myds/react/button
 *
 * <Button variant="primary-fill" size="medium" onClick={() => alert('Button clicked!')}>
 * ```
 */
const meta = {
  title: "@myds/react/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  argTypes: {
    type: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "Button type",
      control: "inline-radio",
      options: ["button", "submit", "reset"],
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
      description: "Disable the button",
      control: "boolean",
    },
    variant: {
      table: {
        type: {
          summary: "enum",
        },
        category: "myds API",
      },
      description: "Available button variants",
      control: "select",
      options: [
        "reset",
        "primary-fill",
        "primary-outline",
        "primary-ghost",
        "default-outline",
        "default-ghost",
        "danger-fill",
        "danger-outline",
        "danger-ghost",
      ],
    },
    size: {
      table: {
        type: {
          summary: "enum",
        },
        category: "myds API",
      },
      description: "Available button sizes",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents a button with the "primary-fill" variant. It is typically used for primary actions that need to stand out.
 *
 * Common use case:
 * - Submit forms
 * - Trigger primary actions in a user interface
 */
export const PrimaryFill: Story = createStory({
  variant: "primary-fill",
  children: "Teruskan",
});

/**
 * This story represents a button with the "primary-outline" variant. It is typically used for secondary actions that need to stand out.
 *
 * Common use case:
 * - Secondary actions in a user interface
 */
export const PrimaryOutline: Story = createStory({
  variant: "primary-outline",
  children: "Teruskan",
});

/**
 * This story represents a button with the "primary-ghost" variant. It is typically used for tertiary actions that need to stand out.
 *
 * Common use case:
 * - Tertiary actions in a user interface
 */
export const PrimaryGhost: Story = createStory({
  variant: "primary-ghost",
  children: "Teruskan",
});

/**
 * This story represents a button with the "default-outline" variant.
 */
export const DefaultOutline: Story = createStory({
  variant: "default-outline",
  children: "Teruskan",
});

/**
 * This story represents a button with the "default-ghost" variant.
 */
export const DefaultGhost: Story = createStory({
  variant: "default-ghost",
  children: "Teruskan",
});

/**
 * This story represents a button with the "danger-fill" variant.
 */
export const DangerFill: Story = createStory({
  variant: "danger-fill",
  children: "Teruskan",
});

/**
 * This story represents a button with the "danger-outline" variant.
 */
export const DangerOutline: Story = createStory({
  variant: "danger-outline",
  children: "Teruskan",
});

/**
 * This story represents a button with the "danger-ghost" variant.
 */
export const DangerGhost: Story = createStory({
  variant: "danger-ghost",
  children: "Teruskan",
});

/**
 * This story represents a button with the "primary-fill" variant. It is typically used for primary actions that need to stand out.
 *
 * Common use case:
 * - Submit forms
 * - Trigger primary actions in a user interface
 */
export const DarkPrimaryFill: Story = createStory(
  {
    variant: "primary-fill",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a button with the "primary-outline" variant. It is typically used for secondary actions that need to stand out.
 *
 * Common use case:
 * - Secondary actions in a user interface
 */
export const DarkPrimaryOutline: Story = createStory(
  {
    variant: "primary-outline",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a button with the "primary-ghost" variant. It is typically used for tertiary actions that need to stand out.
 *
 * Common use case:
 * - Tertiary actions in a user interface
 */
export const DarkPrimaryGhost: Story = createStory(
  {
    variant: "primary-ghost",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a button with the "default-outline" variant.
 */
export const DarkDefaultOutline: Story = createStory(
  {
    variant: "default-outline",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a button with the "default-ghost" variant.
 */
export const DarkDefaultGhost: Story = createStory(
  {
    variant: "default-ghost",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a button with the "danger-fill" variant.
 */
export const DarkDangerFill: Story = createStory(
  {
    variant: "danger-fill",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a button with the "danger-outline" variant.
 */
export const DarkDangerOutline: Story = createStory(
  {
    variant: "danger-outline",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a button with the "danger-ghost" variant.
 */
export const DarkDangerGhost: Story = createStory(
  {
    variant: "danger-ghost",
    children: "Teruskan",
    className: "dark",
  },
  "dark",
);
