import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Callout, CalloutInner1, CalloutInner1Button, CalloutInner1Content, CalloutInner1Header, CalloutInner2} from "@myds/react/callout";
import { Success } from "./tag.stories";
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
  component: Callout,
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
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const calloutDefault: Story = {
  ...createStory({}),
  render: () => (
<Callout>
  <CalloutInner1>
    <CalloutInner1Header>Information</CalloutInner1Header>
  </CalloutInner1>
  <CalloutInner2> 
  </CalloutInner2>
</Callout>
  ),
};

export const calloutDefaultWithPrimaryButton: Story = {
  ...createStory({}),
  render: () => (
<Callout >
  <CalloutInner1>
    <CalloutInner1Header>Information</CalloutInner1Header>
  </CalloutInner1>
  <CalloutInner2> 
  <Button variant="default-outline">Primary Button</Button>
  </CalloutInner2>
</Callout>
  ),
};

export const calloutDefaultWithDescriptionAndButton: Story = {
  ...createStory({}),
  render: () => (
<Callout variant={"information"}>
  <CalloutInner1>
  <CalloutInner1Header>Information</CalloutInner1Header>
  <CalloutInner1Content> A space for the explaination of the success, warning, info or error </CalloutInner1Content>
  <CalloutInner1Button>
  <Button variant="default-outline">Primary Button</Button>
  <Button variant="default-ghost">Secondary Button</Button>
  </CalloutInner1Button>

  </CalloutInner1>
  <CalloutInner2>
  </CalloutInner2>
</Callout>
  ),
};

export const calloutSuccess: Story = {
  ...createStory({}),
  render: () => (
<Callout variant={"success"}>
  <CalloutInner1>
    <CalloutInner1Header>Success!</CalloutInner1Header>
  </CalloutInner1>
  <CalloutInner2></CalloutInner2>
</Callout>
  ),
};


export const calloutWarning: Story = {
  ...createStory({}),
  render: () => (
<Callout variant={"warning"}>
  <CalloutInner1>
  <CalloutInner1Header>Warning</CalloutInner1Header>
  </CalloutInner1>
  <CalloutInner2></CalloutInner2>
</Callout>
  ),
};

export const calloutInformation: Story = {
  ...createStory({}),
  render: () => (
<Callout variant={"information"}>
  <CalloutInner1>
  <CalloutInner1Header>Information</CalloutInner1Header>
  </CalloutInner1>
  <CalloutInner2></CalloutInner2>
</Callout>
  ),
};

export const calloutError: Story = {
  ...createStory({}),
  render: () => (
<Callout variant={"error"}>
  <CalloutInner1>
  <CalloutInner1Header>Error</CalloutInner1Header>
  </CalloutInner1>
  <CalloutInner2></CalloutInner2>
</Callout>
  ),
};


