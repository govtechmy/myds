import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "@myds/react/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centeredd",
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "The checked state of the toggle",
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
      <Toggle
        {...args}
        checked={isChecked}
        onChange={(checked) => {
          setIsChecked(checked);
          args.onChange?.(checked);
        }}
      />
    );
  },
};
