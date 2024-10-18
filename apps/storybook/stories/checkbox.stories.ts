import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@myds/react/checkbox";
import { createStory } from "../utils";

const meta: Meta<typeof Checkbox> = {
  title: "@myds/react/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "Checked state of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state of the checkbox",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
      description: "Size of the checkbox",
    },
    onCheckedChange: { action: "checked changed" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = createStory({
  children: "Default Checkbox",
});

export const DefaultDark: Story = createStory(
  {
    children: "Default Checkbox",
  },
  "dark",
);

export const Medium: Story = createStory({
  children: "Medium Checkbox",
  size: "medium",
});

export const MediumDark: Story = createStory(
  {
    children: "Medium Checkbox",
    size: "medium",
  },
  "dark",
);

export const Checked: Story = createStory({
  children: "Checked Checkbox",
  checked: true,
});

export const CheckedDark: Story = createStory(
  {
    children: "Checked Checkbox",
    checked: true,
  },
  "dark",
);

export const Indeterminate: Story = createStory({
  children: "Indeterminate Checkbox",
  checked: "indeterminate",
});

export const IndeterminateDark: Story = createStory(
  {
    children: "Indeterminate Checkbox",
    checked: "indeterminate",
  },
  "dark",
);

export const Disabled: Story = createStory({
  children: "Disabled Checkbox",
  disabled: true,
});

export const DisabledDark: Story = createStory(
  {
    children: "Disabled Checkbox",
    disabled: true,
  },
  "dark",
);

export const DisabledChecked: Story = createStory({
  children: "Disabled Checked Checkbox",
  disabled: true,
  checked: true,
});

export const DisabledCheckedDark: Story = createStory(
  {
    children: "Disabled Checked Checkbox",
    disabled: true,
    checked: true,
  },
  "dark",
);

export const DisabledIndeterminate: Story = createStory({
  children: "Disabled Indeterminate Checkbox",
  disabled: true,
  checked: "indeterminate",
});

export const DisabledIndeterminateDark: Story = createStory(
  {
    children: "Disabled Indeterminate Checkbox",
    disabled: true,
    checked: "indeterminate",
  },
  "dark",
);
