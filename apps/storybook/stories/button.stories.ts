import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "@myds/react/button";

const meta = {
  title: "@myds/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Tutup",
  },
};
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Teruskan",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Padam",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Kemaskini",
  },
};
