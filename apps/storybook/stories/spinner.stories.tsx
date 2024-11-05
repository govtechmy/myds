import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import Spinner from "@myds/react/spinner";
import { Button } from "@myds/react/button";

/**
 * ### Overview
 * A customizable loading spinner component that provides visual feedback for loading states.
 *
 * ### Usage
 * ```tsx
 * import { LoadingSpinner } from "@myds/react/spinner";
 *
 * <LoadingSpinner />
 * ```
 */
const meta = {
  title: "@myds/react/LoadingSpinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "Size variant of the spinner",
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    color: {
      table: {
        type: {
          summary: "string",
        },
      },
      description: "Color of the spinner (hex, rgb, or named color)",
      control: "color",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default spinner with small size and default color
 */
export const Default: Story = createStory({});

/**
 * Default spinner with small size and default color
 */
export const DefaultDark: Story = createStory(
  {
    className: "dark",
  },
  "dark",
);

/**
 * Small size spinner variation
 */
export const Small: Story = createStory({
  size: "sm",
});

export const SmallDark: Story = createStory(
  {
    size: "sm",
    className: "dark",
  },
  "dark",
);

export const Medium: Story = createStory({
  size: "sm",
});

export const MediumDark: Story = createStory(
  {
    size: "sm",
    className: "dark",
  },
  "dark",
);
export const Large: Story = createStory({
  size: "sm",
});

export const LargeDark: Story = createStory(
  {
    size: "sm",
    className: "dark",
    color: "white",
  },
  "dark",
);

export const WithButton: Story = {
  ...createStory({}),
  render: () => (
    <Button disabled>
      <Spinner></Spinner>
      Button
    </Button>
  ),
};
WithButton.storyName = "Spinner with Button";
