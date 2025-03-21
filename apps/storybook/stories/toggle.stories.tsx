import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle, ToggleThumb } from "@govtechmy/myds-react/toggle";
import { createRender, createStory } from "../utils";

/**
 * ### Overview
 * The Toggle component is a versatile switch that allows users to toggle between two states.
 * It's commonly used for enabling or disabling features, settings, or preferences.
 *
 *
 * ### Usage
 *
 * ```tsx
 * import { Toggle, ToggleThumb } from "@govtechmy/myds-react/toggle"
 *
 * function MyComponent() {
 *   const [isChecked, setIsChecked] = React.useState(false);
 *   return (
 *     <Toggle checked={isChecked} onCheckedChange={setIsChecked}>
 *       <ToggleThumb />
 *     </Toggle>
 *   );
 * }
 * ```
 */

const meta: Meta<typeof Toggle> = {
  title: "@govtechmy/myds-react/Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    defaultChecked: {
      control: "boolean",
      description: "The default checked state of the toggle (uncontrolled)",
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
      control: "inline-radio",
      options: ["medium", "large"],
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
  },
};

export default meta;

const Base = () => (
  <Toggle>
    <ToggleThumb />
  </Toggle>
);
export const DefaultMedium = createRender(Base, "light");

const BaseDark = () => (
  <div className="dark">
    <Toggle>
      <ToggleThumb />
    </Toggle>
  </div>
);
export const DefaultMediumDark = createRender(BaseDark, "dark");

const Small = () => (
  <Toggle size="small">
    <ToggleThumb />
  </Toggle>
);
export const SmallToggle = createRender(Small, "light");

const SmallDark = () => (
  <div className="dark">
    <Toggle size="small">
      <ToggleThumb />
    </Toggle>
  </div>
);
export const SmallToggleDark = createRender(SmallDark, "dark");

const Large = () => (
  <Toggle size="large">
    <ToggleThumb />
  </Toggle>
);
export const LargeToggle = createRender(Large, "light");

const LargeDark = () => (
  <div className="dark">
    <Toggle size="large">
      <ToggleThumb />
    </Toggle>
  </div>
);
export const LargeToggleDark = createRender(LargeDark, "dark");

const Checked = () => (
  <Toggle defaultChecked={true}>
    <ToggleThumb />
  </Toggle>
);
export const CheckedToggle = createRender(Checked, "light");

const DisabledWhileOff = () => (
  <Toggle disabled={true}>
    <ToggleThumb />
  </Toggle>
);
export const DisabledToggleOff = createRender(DisabledWhileOff, "light");

const DisabledWhileOn = () => (
  <Toggle disabled={true} defaultChecked={true}>
    <ToggleThumb />
  </Toggle>
);
export const DisabledToggleOn = createRender(DisabledWhileOn, "light");

const DisabledWhileOffDark = () => (
  <div className="dark">
    <Toggle disabled={true}>
      <ToggleThumb />
    </Toggle>
  </div>
);
export const DisabledToggleOffDark = createRender(DisabledWhileOffDark, "dark");

const DisabledWhileOnDark = () => (
  <div className="dark">
    <Toggle disabled={true} defaultChecked={true}>
      <ToggleThumb />
    </Toggle>
  </div>
);
export const DisabledToggleOnDark = createRender(DisabledWhileOnDark, "dark");

const ControlledToggle = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Current state: {isChecked ? "On" : "Off"}</p>
      <Toggle checked={isChecked} onCheckedChange={setIsChecked}>
        <ToggleThumb />
      </Toggle>
    </div>
  );
};

export const ControlledToggleExample = createRender(() => {
  return <ControlledToggle></ControlledToggle>;
}, "light");

const Uncontrolled = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Toggle defaultChecked={false}>
        <ToggleThumb />
      </Toggle>
      <p className="">This toggle manages its own state internally.</p>
    </div>
  );
};
export const UncontrolledToggle = createRender(Uncontrolled, "light");
