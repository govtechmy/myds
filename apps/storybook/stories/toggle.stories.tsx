import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "@myds/react/toggle";
import { createStory } from "../utils";

/**
 * The Toggle component is a versatile switch that allows users to toggle between two states.
 * It's commonly used for enabling or disabling features, settings, or preferences.
 *
 * ## Key Features
 * - Available in two sizes: medium (default) and large
 * - Supports both controlled and uncontrolled usage
 * - Can be disabled for read-only scenarios
 * - Optional label for clear context
 * - Dark mode support for all variants
 * - Fully accessible with keyboard navigation and ARIA attributes
 *
 * ## Usage Guidelines
 * - Use clear, concise labels to describe the toggle's function
 * - Consider using the larger size for touch-friendly interfaces
 * - Provide immediate visual feedback when the state changes
 * - Use the disabled state sparingly and provide context when necessary
 * - Implement dark mode variants for better user experience in different lighting conditions
 *
 * ## Examples
 *
 * Basic usage:
 * ```tsx
 * import Toggle from "@myds/react/toggle"
 *
 * function MyComponent() {
 *   const [isChecked, setIsChecked] = React.useState(false);
 *   return <Toggle checked={isChecked} onCheckedChange={setIsChecked} />;
 * }
 * ```
 *
 * With label:
 * ```tsx
 * <Toggle label="Enable notifications" defaultChecked={true} onCheckedChange={handleChange} />
 * ```
 *
 * Large size:
 * ```tsx
 * <Toggle size="large" defaultChecked={false} onCheckedChange={handleChange} />
 * ```
 *
 * Disabled state:
 * ```tsx
 * <Toggle disabled defaultChecked={true} />
 * ```
 *
 * Dark mode:
 * ```tsx
 * <div className="dark">
 *   <Toggle defaultChecked={false} />
 * </div>
 * ```
 */

const meta: Meta<typeof Toggle> = {
  title: "@myds/react/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable toggle switch component for binary choices, with support for both light and dark modes.",
      },
    },
  },
  argTypes: {
    defaultChecked: {
      control: "boolean",
      description: "The default checked state of the toggle (uncontrolled)",
    },
    label: {
      control: "text",
      description: "The label for the toggle (optional)",
    },
    checked: {
      control: "boolean",
      description: "The controlled checked state of the toggle",
    },
    onCheckedChange: {
      action: "checked changed",
      description: "Callback function when the checked state changes",
    },
    size: {
      control: { type: "radio", options: ["medium", "large"] },
      description: "The size of the toggle",
    },
    disabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for customization",
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child component (advanced usage)",
    },
    value: {
      control: "text",
      description: "The value attribute of the hidden input element",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = createStory(
  {
    defaultChecked: false,
  },
  "light",
);
Default.storyName = "Default (Medium)";

export const DefaultDark: Story = createStory(
  {
    defaultChecked: false,
    className: "dark",
  },
  "dark",
);
DefaultDark.storyName = "Default (Medium) - Dark Mode";

export const LargeSize: Story = createStory(
  {
    defaultChecked: false,
    size: "large",
  },
  "light",
);
LargeSize.storyName = "Large Size";

export const LargeSizeDark: Story = createStory(
  {
    defaultChecked: false,
    size: "large",
    className: "dark",
  },
  "dark",
);
LargeSizeDark.storyName = "Large Size - Dark Mode";

export const WithLabel: Story = createStory(
  {
    defaultChecked: false,
    label: "Enable feature",
  },
  "light",
);
WithLabel.storyName = "With Label";

export const WithLabelDark: Story = createStory(
  {
    defaultChecked: false,
    label: "Enable feature",
    className: "dark",
  },
  "dark",
);
WithLabelDark.storyName = "With Label - Dark Mode";

export const Checked: Story = createStory(
  {
    defaultChecked: true,
  },
  "light",
);
Checked.storyName = "Checked State";

export const CheckedDark: Story = createStory(
  {
    defaultChecked: true,
    className: "dark",
  },
  "dark",
);
CheckedDark.storyName = "Checked State - Dark Mode";

export const Disabled: Story = createStory(
  {
    defaultChecked: false,
    disabled: true,
  },
  "light",
);
Disabled.storyName = "Disabled (Unchecked)";

export const DisabledDark: Story = createStory(
  {
    defaultChecked: false,
    disabled: true,
    className: "dark",
  },
  "dark",
);
DisabledDark.storyName = "Disabled (Unchecked) - Dark Mode";

export const DisabledChecked: Story = createStory(
  {
    defaultChecked: true,
    disabled: true,
  },
  "light",
);
DisabledChecked.storyName = "Disabled (Checked)";

export const DisabledCheckedDark: Story = createStory(
  {
    defaultChecked: true,
    disabled: true,
    className: "dark",
  },
  "dark",
);
DisabledCheckedDark.storyName = "Disabled (Checked) - Dark Mode";

export const CustomValue: Story = createStory(
  {
    defaultChecked: false,
    value: "custom-value",
  },
  "light",
);
CustomValue.storyName = "With Custom Value";

export const CustomValueDark: Story = createStory(
  {
    defaultChecked: false,
    value: "custom-value",
    className: "dark",
  },
  "dark",
);
CustomValueDark.storyName = "With Custom Value - Dark Mode";

export const AsChild: Story = createStory(
  {
    defaultChecked: false,
    asChild: true,
  },
  "light",
);
AsChild.storyName = "As Child Component";

export const AsChildDark: Story = createStory(
  {
    defaultChecked: false,
    asChild: true,
    className: "dark",
  },
  "dark",
);
AsChildDark.storyName = "As Child Component - Dark Mode";

export const ControlledToggle: Story = {
  render: () => {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
      <div>
        <Toggle
          checked={isChecked}
          onCheckedChange={setIsChecked}
          label={`Controlled Toggle (${isChecked ? "On" : "Off"})`}
        />
        <p>Current state: {isChecked ? "On" : "Off"}</p>
      </div>
    );
  },
};
ControlledToggle.storyName = "Controlled Toggle Example";

export const ControlledToggleDark: Story = {
  render: () => {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
      <div className="dark bg-gray-800 p-4 text-white">
        <Toggle
          checked={isChecked}
          onCheckedChange={setIsChecked}
          label={`Controlled Toggle (${isChecked ? "On" : "Off"})`}
        />
        <p>Current state: {isChecked ? "On" : "Off"}</p>
      </div>
    );
  },
};
ControlledToggleDark.storyName = "Controlled Toggle Example - Dark Mode";

ControlledToggleDark.parameters = {
  backgrounds: { default: "dark" },
};
