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
 *   <CalloutContent> A space for explaination of the success, warning, info or error </CalloutContent>
 *   <CalloutAction>
 *    <Button variant="default-outline">Primary Button</Button>
 *   </CalloutAction>
 * </Callout>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Callout",
  component: Callout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description:
        "Determines the visual style and semantic meaning of the callout",
      control: "inline-radio",
      options: ["success", "warning", "info", "error"],
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
  ...createStory({}),
  render: () => (
    <Callout>
      <CalloutTitle>Title</CalloutTitle>
      <CalloutContent>
        A space for explaination of the success, warning, info or error
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
          A space for explaination of the success, warning, info or error
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
          A space for explaination of the success, warning, info or error
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
            A space for explaination of the success, warning, info or error
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
