import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Callout,
  CalloutAction,
  CalloutContent,
  CalloutTitle,
} from "@govtechmy/myds-react/callout";
import { Button } from "@govtechmy/myds-react/button";
import { ComponentProps } from "react";

const CalloutDemo = (props: ComponentProps<typeof Callout>) => {
  return (
    <Callout {...props}>
      <CalloutTitle>Scheduled System Maintenance</CalloutTitle>
      <CalloutContent>
        Online services will be down for maintenance on Saturday from 10 PM to 2
        AM. Thank you for your patience!
      </CalloutContent>
    </Callout>
  );
};

/**
 * ### Overview
 * The Callout component notifies users about important information related to their actions inside a Forms.
 * Callouts can indicate success, warnings, errors, or provide additional information depending on the context inside a form
 *
 * ### Usage
 * ```tsx
 * import { Callout, CalloutTitle, CalloutDescription } from "@govtechmy/myds-react/callout";
 * import { Button } from "@govtechmy/myds-react/button";
 *
 * <Callout>
 *  <CalloutTitle>Title</CalloutTitle>
 *   <CalloutContent> Online services will be down for maintenance on Saturday from 10 PM to 2 AM. Thank you for your patience! </CalloutContent>
 *   <CalloutAction>
 *    <Button variant="default-outline">Primary Button</Button>
 *   </CalloutAction>
 * </Callout>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Callout",
  component: CalloutDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    variant: "info",
  },
  argTypes: {
    variant: {
      description:
        "Determines the visual style and semantic meaning of the callout",
      control: "radio",
      options: ["success", "warning", "info", "danger"],
    },
    className: {
      description: "Additional CSS classes to apply to the callout",
      control: "text",
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalloutDefault: Story = createStory({});

export const calloutDefaultWithTitle: Story = {
  ...createStory({}),
  render: () => (
    <Callout>
      <CalloutTitle>Title</CalloutTitle>
    </Callout>
  ),
};

export const calloutDefaultWithTitleAndPrimaryButton: Story = {
  ...createStory({}),
  render: () => (
    <Callout>
      <CalloutTitle>Title</CalloutTitle>
      <CalloutAction>
        <Button variant="default-outline">Primary Button</Button>
      </CalloutAction>
    </Callout>
  ),
};

export const calloutDefaultWithTitlePrimaryButtonAndDescription: Story = {
  render: () => (
    <Callout>
      <CalloutTitle>Title</CalloutTitle>
      <CalloutContent>
        Online services will be down for maintenance on Saturday from 10 PM to 2
        AM. Thank you for your patience!
      </CalloutContent>
      <CalloutAction>
        <Button variant="default-outline">Primary Button</Button>
      </CalloutAction>
    </Callout>
  ),
};

export const calloutDefaultWithTitleDescriptionPrimaryAndSecondaryButton: Story =
  {
    ...createStory({}),
    render: () => (
      <Callout>
        <CalloutTitle>Title</CalloutTitle>
        <CalloutContent>
          Online services will be down for maintenance on Saturday from 10 PM to
          2 AM. Thank you for your patience!
        </CalloutContent>
        <CalloutAction>
          <Button variant="default-outline">Primary Button</Button>
          <Button variant="default-ghost">Secondary Button</Button>
        </CalloutAction>
      </Callout>
    ),
  };

export const calloutSuccess: Story = {
  ...createStory({}),
  render: () => (
    <Callout variant="success">
      <CalloutTitle>Title</CalloutTitle>
      <CalloutAction>
        <Button variant="default-outline">Primary Button</Button>
      </CalloutAction>
    </Callout>
  ),
};

export const calloutWarning: Story = {
  ...createStory({}),
  render: () => (
    <Callout variant="warning">
      <CalloutTitle>Title</CalloutTitle>
      <CalloutAction>
        <Button variant="default-outline">Primary Button</Button>
      </CalloutAction>
    </Callout>
  ),
};

export const calloutInformation: Story = {
  ...createStory({}),
  render: () => (
    <Callout variant="info">
      <CalloutTitle>Title</CalloutTitle>
      <CalloutAction>
        <Button variant="default-outline">Primary Button</Button>
      </CalloutAction>
    </Callout>
  ),
};

export const calloutError: Story = {
  ...createStory({}),
  render: () => (
    <Callout variant="danger">
      <CalloutTitle>Title</CalloutTitle>
      <CalloutAction>
        <Button variant="default-outline">Primary Button</Button>
      </CalloutAction>
    </Callout>
  ),
};

export const CalloutDefaultDark: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout></Callout>
    </div>
  ),
};

export const calloutDefaultDarkWithTitle: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout>
        <CalloutTitle>Title</CalloutTitle>
      </Callout>
    </div>
  ),
};

export const calloutDefaultDarkWithTitleAndPrimaryButton: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout>
        <CalloutTitle>Title</CalloutTitle>
        <CalloutAction>
          <Button variant="default-outline">Primary Button</Button>
        </CalloutAction>
      </Callout>
    </div>
  ),
};

export const calloutDefaultDarkWithTitlePrimaryButtonAndDescription: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout>
        <CalloutTitle>Title</CalloutTitle>
        <CalloutContent>
          Online services will be down for maintenance on Saturday from 10 PM to
          2 AM. Thank you for your patience!
        </CalloutContent>
        <CalloutAction>
          <Button variant="default-outline">Primary Button</Button>
        </CalloutAction>
      </Callout>
    </div>
  ),
};

export const calloutDefaultDarkWithTitleDescriptionPrimaryAndSecondaryButton: Story =
  {
    ...createStory({}, "dark"),
    render: () => (
      <div className="dark">
        <Callout>
          <CalloutTitle>Title</CalloutTitle>
          <CalloutContent>
            Online services will be down for maintenance on Saturday from 10 PM
            to 2 AM. Thank you for your patience!
          </CalloutContent>
          <CalloutAction>
            <Button variant="default-outline">Primary Button</Button>
            <Button variant="default-ghost">Secondary Button</Button>
          </CalloutAction>
        </Callout>
      </div>
    ),
  };

export const calloutSuccessDark: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout variant="success">
        <CalloutTitle>Title</CalloutTitle>
        <CalloutAction>
          <Button variant="default-outline">Primary Button</Button>
        </CalloutAction>
      </Callout>
    </div>
  ),
};

export const calloutWarningDark: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout variant="warning">
        <CalloutTitle>Title</CalloutTitle>
        <CalloutAction>
          <Button variant="default-outline">Primary Button</Button>
        </CalloutAction>
      </Callout>
    </div>
  ),
};

export const calloutInformationDark: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout variant="info">
        <CalloutTitle>Title</CalloutTitle>
        <CalloutAction>
          <Button variant="default-outline">Primary Button</Button>
        </CalloutAction>
      </Callout>
    </div>
  ),
};

export const calloutErrorDark: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <Callout variant="danger">
        <CalloutTitle>Title</CalloutTitle>
        <CalloutAction>
          <Button variant="default-outline">Primary Button</Button>
        </CalloutAction>
      </Callout>
    </div>
  ),
};
