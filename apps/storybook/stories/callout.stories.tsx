import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Callout2,
  Callout2Button,
  Callout2Content,
  Callout2Title,
} from "@myds/react/callout";
import { Button } from "@myds/react/button";

/**
 * ### Overview
 * The Callout component is used to display important messages, alerts, or notifications
 * with different semantic meanings through variants. It supports success, warning,
 * information, and error states, each with appropriate styling and icons.
 *
 * > In design we trust, with colors bright and bold,
 * > Each variant tells a story that needs to be told.
 * > From success to warning, information to more,
 * > Our Callout component opens communication's door.
 *
 * ### Usage
 * ```tsx
 * import { Callout, CalloutTitle, CalloutDescription } from "@myds/react/callout";
 *
 * <Callout variant="success">
 *   <CalloutTitle>Success Message</CalloutTitle>
 *   <CalloutDescription>Your action was completed successfully.</CalloutDescription>
 * </Callout>
 * ```
 */
const meta = {
  title: "@myds/react/Callout",
  component: Callout2,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  argTypes: {
    variant: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description:
        "Determines the visual style and semantic meaning of the callout",
      control: "inline-radio",
      options: ["success", "warning", "information", "error"],
    },
    className: {
      description: "Additional CSS classes to apply to the callout",
      control: "text",
    },
    children: {
      description: "Content to be displayed within the callout",
      control: "text",
    },
  },
} satisfies Meta<typeof Callout2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const calloutDefault: Story = {
  ...createStory({}),
  render: () => <Callout2></Callout2>,
};

export const calloutDefaultWithTitle: Story = {
  ...createStory({}),
  render: () => (
    <Callout2>
      <Callout2Title>Title</Callout2Title>
    </Callout2>
  ),
};

export const calloutDefaultWithTitleAndPrimaryButton: Story = {
  ...createStory({}),
  render: () => (
    <Callout2>
      <Callout2Title>Title</Callout2Title>
      <Callout2Button>
        <Button variant="default-outline">Primary Button</Button>
      </Callout2Button>
    </Callout2>
  ),
};

export const calloutDefaultWithTitlePrimaryButtonAndDescription: Story = {
  ...createStory({}),
  render: () => (
    <Callout2>
      <Callout2Title>Title</Callout2Title>
      <Callout2Content>
        A space for explaination of the success, warning, info or error
      </Callout2Content>
      <Callout2Button>
        <Button variant="default-outline">Primary Button</Button>
      </Callout2Button>
    </Callout2>
  ),
};

export const calloutDefaultWithTitleDescriptionPrimaryAndSecondaryButton: Story =
  {
    ...createStory({}),
    render: () => (
      <Callout2>
        <Callout2Title>Title</Callout2Title>
        <Callout2Content>
          A space for explaination of the success, warning, info or error
        </Callout2Content>
        <Callout2Button>
          <Button variant="default-outline">Primary Button</Button>
          <Button variant="default-ghost">Secondary Button</Button>
        </Callout2Button>
      </Callout2>
    ),
  };

export const calloutSuccess: Story = {
  ...createStory({}),
  render: () => (
    <Callout2 variant="success">
      <Callout2Title>Title</Callout2Title>
      <Callout2Button>
        <Button variant="default-outline">Primary Button</Button>
      </Callout2Button>
    </Callout2>
  ),
};

export const calloutWarning: Story = {
  ...createStory({}),
  render: () => (
    <Callout2 variant="warning">
      <Callout2Title>Title</Callout2Title>
      <Callout2Button>
        <Button variant="default-outline">Primary Button</Button>
      </Callout2Button>
    </Callout2>
  ),
};

export const calloutInformation: Story = {
  ...createStory({}),
  render: () => (
    <Callout2 variant="information">
      <Callout2Title>Title</Callout2Title>
      <Callout2Button>
        <Button variant="default-outline">Primary Button</Button>
      </Callout2Button>
    </Callout2>
  ),
};

export const calloutError: Story = {
  ...createStory({}),
  render: () => (
    <Callout2 variant="error">
      <Callout2Title>Title</Callout2Title>
      <Callout2Button>
        <Button variant="default-outline">Primary Button</Button>
      </Callout2Button>
    </Callout2>
  ),
};
