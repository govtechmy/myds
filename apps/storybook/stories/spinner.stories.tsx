import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Spinner } from "@govtechmy/myds-react/spinner";
import { Button } from "@govtechmy/myds-react/button";

/**
 * ### Overview
 * A customizable loading spinner component that provides visual feedback for loading states.
 *
 * ### Usage
 * ```tsx
 * import { Spinner } from "@govtechmy/myds-react/spinner";
 *
 * <Spinner />
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Spinner",
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
      options: ["small", "medium", "large"],
    },
    color: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "Color variant of the spinner",
      control: "inline-radio",
      options: ["grey", "white"],
    },
    show: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      description: "Show or Hide the spinner",
      control: "inline-radio",
      options: ["true", "false"],
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
  size: "small",
});

export const SmallDark: Story = createStory(
  {
    size: "small",
    className: "dark",
  },
  "dark",
);

export const Medium: Story = createStory({
  size: "medium",
});

export const MediumDark: Story = createStory(
  {
    size: "medium",
    className: "dark",
  },
  "dark",
);
export const Large: Story = createStory({
  size: "large",
});

export const LargeDark: Story = createStory(
  {
    size: "large",
    className: "dark",
  },
  "dark",
);

export const WithButton: Story = {
  ...createStory({}),
  render: () => (
    <Button disabled>
      <Spinner color="white"></Spinner>
      Button
    </Button>
  ),
};
WithButton.storyName = "Spinner with Button Disabled";

export const HiddenAndShow: Story = {
  ...createStory({}),
  render: () => (
    <div className="space-y-2">
      <Button>
        <Spinner show={true} color={"white"}></Spinner>
        Not Hidden Spinner
      </Button>
      <Button>
        <Spinner show={false}></Spinner>
        Hidden Spinner
      </Button>
    </div>
  ),
};
HiddenAndShow.storyName = "Spinner Show or Hidden";
