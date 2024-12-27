import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Tag } from "@govtechmy/myds-react/tag";

/**
 * ### Overview
 * Tag is a visual indicator. It can be used to show the current state or status of an item, process, or entity. It likely comes in various styles to represent different states. Available in multiple sizes to fit your design needs. Use the appropriate variant to effectively communicate status at a glance.
 *
 * > Memetik bunga di taman sari,
 * > Warna-warni indah dipandang mata.
 * > Status terpampang bagai mentari,
 * > 'Tag' memberi makna tak terduga. -- Claude
 *
 * ### Usage
 * ```ts
 * import Tag from "@govtechmy/myds-react/tag";
 *
 * <Tag size="medium" dot={true}>Gray</Tag>
 * <Tag size="medium" mode="default" dot={true}>Gray</Tag>
 * <Tag size="medium">Gray</Tag>
 * <Tag size="medium" style="default">Gray</Tag>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the tag",
    },
    variant: {
      control: "select",
      options: ["default", "primary", "success", "danger", "warning"],
      description: "The visual style variant of the tag",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "The size of the tag",
    },
    mode: {
      control: "radio",
      options: ["pill", "default"],
      description: "The style of the tag (rounded or not)",
    },
    dot: {
      control: "boolean",
      description: "Whether to show a status dot",
    },
  },
  args: {
    children: "Tag Content",
    variant: "default",
    size: "small",
    mode: "pill",
    dot: false,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents a tag component with the "default" variant, which is the default.
 */
export const Gray: Story = createStory({
  variant: "default",
  size: "medium",
  children: <span>default</span>,
});

/**
 * This story represents a tag component with the "primary" variant, which is related to product's brand.
 */
export const Brand: Story = createStory({
  variant: "primary",
  size: "medium",
  children: <span>primary</span>,
});

/**
 * This story represents a tag component with the "success" variant, which is to indicate successful status.
 */
export const Success: Story = createStory({
  variant: "success",
  size: "medium",
  children: <span>success</span>,
});

/**
 * This story represents a tag component with the "danger" variant, which is used to indicate a critical issue or error.
 */
export const Danger: Story = createStory({
  variant: "danger",
  size: "medium",
  children: <span>danger</span>,
});

/**
 * This story represents a tag component with the "warning" variant, which is to alert the user to a potential issue or cautionary state.
 */
export const Warning: Story = createStory({
  variant: "warning",
  size: "medium",
  children: <span>warning</span>,
});

/**
 * This story represents a tag component with the "default" variant, which is the default.
 */
export const DarkGray: Story = createStory(
  {
    variant: "default",
    size: "medium",
    children: <span>default</span>,
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "primary" variant, which is related to product's brand.
 */
export const DarkBrand: Story = createStory(
  {
    variant: "primary",
    size: "medium",
    children: <span>primary</span>,
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "success" variant, which is to indicate successful status.
 */
export const DarkSuccess: Story = createStory(
  {
    variant: "success",
    size: "medium",
    children: <span>success</span>,
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "danger" variant, which is used to indicate a critical issue or error.
 */
export const DarkDanger: Story = createStory(
  {
    variant: "danger",
    size: "medium",
    children: <span>danger</span>,
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "warning" variant, which is to alert the user to a potential issue or cautionary state.
 */
export const DarkWarning: Story = createStory(
  {
    variant: "warning",
    size: "medium",
    children: <span>warning</span>,
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "primary" variant with mode equals default. Each of the tag component can have a choice of pill or style 2.
 *
 * Pill style has fully rounded appearance. It is being used to display status independently, positioned absolutely on image or container.
 *
 * Default tag style has 6px of border radius. It is typically used to display a status inline, positioned side by side with text.
 */
export const primaryDefaultTagStyle: Story = createStory({
  variant: "primary",
  size: "medium",
  children: <span>primary</span>,
  mode: "default",
});

/**
 * This story represents a tag component with the "primary" variant with mode equals default. Each of the tag component can have a choice of pill or default tag style.
 *
 * Pill style has fully rounded appearance. It is being used to display status independently, positioned absolutely on image or container.
 *
 * Default tag style has 6px of border radius. It is typically used to display a status inline, positioned side by side with text.
 */
export const DarkPrimaryDefaultTagStyle: Story = createStory(
  {
    variant: "primary",
    size: "medium",
    children: <span>primary</span>,
    mode: "default",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "primary" variant with mode equals pill and dot.
 */
export const primaryPillWithDot: Story = createStory({
  variant: "primary",
  size: "medium",
  children: <span>primary</span>,
  dot: true,
});

/**
 * This story represents a tag component with the "primary" variant with mode equals default tag style and dot.
 */
export const primaryDefaultTagStyleWithDot: Story = createStory({
  variant: "primary",
  size: "medium",
  children: <span>primary</span>,
  dot: true,
  mode: "default",
});
