import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@myds/react/checkbox";
import { createStory } from "../utils";

/**
 * ### Overview
 * The Checkbox component is a fundamental UI element that allows users to make binary choices.
 * It's commonly used in forms, settings panels, and list interfaces where users can select
 * one or multiple options from a set. This component supports various states including default,
 * checked, disabled, indeterminate, and combinations thereof, providing flexibility for different use cases.
 *
 * ### Key Features
 * - Customizable label text
 * - Support for checked, unchecked, and indeterminate states
 * - Disabled state for read-only scenarios
 * - Two sizes: small and medium
 * - Accessible design, following WCAG guidelines for interactive elements
 *
 * ### Usage
 * ```tsx
 * import { Checkbox } from "./checkbox";
 *
 * // Default checkbox (small size)
 * <Checkbox>Default Checkbox</Checkbox>
 *
 * // Medium checkbox
 * <Checkbox size="medium">Medium Checkbox</Checkbox>
 *
 * // Checked checkbox
 * <Checkbox checked>Checked Checkbox</Checkbox>
 *
 * // Indeterminate checkbox
 * <Checkbox indeterminate>Indeterminate Checkbox</Checkbox>
 *
 * // Disabled checkbox
 * <Checkbox disabled>Disabled Checkbox</Checkbox>
 *
 * // Disabled and checked checkbox
 * <Checkbox disabled checked>Disabled Checked Checkbox</Checkbox>
 *
 * // Disabled and indeterminate checkbox
 * <Checkbox disabled indeterminate>Disabled Indeterminate Checkbox</Checkbox>
 * ```
 *
 * This versatile component is designed to seamlessly integrate into various parts of your
 * application, providing a consistent and intuitive user experience for selection tasks.
 */
const meta: Meta<typeof Checkbox> = {
  title: "@myds/react/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const DefaultSmall: Story = createStory({
  children: "Small Checkbox",
  size: "small",
});

export const Medium: Story = createStory({
  children: "Medium Checkbox",
  size: "medium",
});

export const Checked: Story = createStory({
  children: "Checked Checkbox",
  checked: true,
});

export const Indeterminate: Story = createStory({
  children: "Indeterminate Checkbox",
  indeterminate: true,
});

export const Disabled: Story = createStory({
  children: "Disabled Checkbox",
  disabled: true,
});

export const DisabledChecked: Story = createStory({
  children: "Disabled Checked Checkbox",
  disabled: true,
  checked: true,
});

export const DisabledIndeterminate: Story = createStory({
  children: "Disabled Indeterminate Checkbox",
  disabled: true,
  indeterminate: true,
});

export const MediumIndeterminate: Story = createStory({
  children: "Medium Indeterminate Checkbox",
  size: "medium",
  indeterminate: true,
});
