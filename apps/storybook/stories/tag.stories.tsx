import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Tag } from "@myds/react/tag";

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
 * import Tag from "@myds/react/tag";
 *
 * <Tag size="medium" showStatusDot={true}>Gray</Tag>
 * <Tag size="medium" tagStyle="style2" showStatusDot={true}>Gray</Tag>
 * <Tag size="medium">Gray</Tag>
 * <Tag size="medium" style="style2">Gray</Tag>
 * ```
 */
const meta = {
  title: "@myds/React/Tag",
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
      options: ["gray", "brand", "success", "danger", "warning"],
      description: "The visual style variant of the tag",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "The size of the tag",
    },
    tagStyle: {
      control: "radio",
      options: ["style1", "style2"],
      description: "The style of the tag (rounded or not)",
    },
    showStatusDot: {
      control: "boolean",
      description: "Whether to show a status dot",
    },
  },
  args: {
    children: "Tag Content",
    variant: "gray",
    size: "small",
    tagStyle: "style1",
    showStatusDot: false,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents a tag component with the "gray" variant, which is the default.
 */
export const Gray: Story = createStory({
  variant: "gray",
  size: "medium",
  children: <span>gray</span>,
});

/**
 * This story represents a tag component with the "brand" variant, which is related to product's brand.
 */
export const Brand: Story = createStory({
  variant: "brand",
  size: "medium",
  children: <span>brand</span>,
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
 * This story represents a tag component with the "gray" variant, which is the default.
 */
export const DarkGray: Story = createStory(
  {
    variant: "gray",
    size: "medium",
    children: <span>gray</span>,
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "brand" variant, which is related to product's brand.
 */
export const DarkBrand: Story = createStory(
  {
    variant: "brand",
    size: "medium",
    children: <span>brand</span>,
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
 * This story represents a tag component with the "brand" variant with tagStyle equals style2. Each of the tag component can have a choice of style1 or style 2.
 *
 * Style1 is the default style. It is being used to display status independently, positioned absolutely on image or container. It has fully rounded appearance.
 *
 * Style2 is typically used to display a status inline, positioned side by side with text. It has 6px of border radius.
 */
export const brandSecondStyle: Story = createStory({
  variant: "brand",
  size: "medium",
  children: <span>brand</span>,
  tagStyle: "style2",
});

/**
 * This story represents a tag component with the "brand" variant with tagStyle equals style2. Each of the tag component can have a choice of style1 or style 2.
 *
 * Style1 is the default style. It is being used to display status independently, positioned absolutely on image or container. It has fully rounded appearance.
 *
 * Style2 is typically used to display a status inline, positioned side by side with text. It has 6px of border radius.
 */
export const DarkBrandSecondStyle: Story = createStory(
  {
    variant: "brand",
    size: "medium",
    children: <span>brand</span>,
    tagStyle: "style2",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents a tag component with the "brand" variant with tagStyle equals style1 and dot.
 */
export const brandFirstStyleDot: Story = createStory({
  variant: "brand",
  size: "medium",
  children: <span>brand</span>,
  showStatusDot: true,
});

/**
 * This story represents a tag component with the "brand" variant with tagStyle equals style2 and dot.
 */
export const brandSecondStyleDot: Story = createStory({
  variant: "brand",
  size: "medium",
  children: <span>brand</span>,
  showStatusDot: true,
  tagStyle: "style2",
});
