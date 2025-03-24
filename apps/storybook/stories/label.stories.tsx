import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory, createRender } from "../utils";
import { Label } from "@govtechmy/myds-react/label";
import { Checkbox } from "@govtechmy/myds-react/checkbox";
import { Toggle, ToggleThumb } from "@govtechmy/myds-react/toggle";

/**
 * ### Overview
 *
 * The Label component from @govtechmy/myds-react/label is a customizable UI element used to associate text with form controls like checkboxes and toggles. It accepts props such as htmlFor to link it to a specific form element and size to adjust its appearance. This component ensures accessibility and consistent styling across the application.
 *
 *
 * > Label cantik dipandang mata,
 * Menghiasi form dengan gaya tersendiri,
 * Mudah digunakan, mesra semua,
 * Aksesibiliti terjaga, seragam rapi. --Copilot
 *
 *
 * ### Usage
 * ```tsx
 * import Label from "@govtechmy/myds-react/label";
 *
 *  <Label htmlFor="checkbox" size={size}>
 *   Auto-delete notifications
 * </Label>
 * <Checkbox id="checkbox" size={size}></Checkbox>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: ({ size }) => {
    return (
      <div className="min-w-[360px] space-y-3">
        <div className="flex justify-between">
          <Label htmlFor="checkbox" size={size}>
            Auto-delete notifications
          </Label>
          <Checkbox id="checkbox" size={size}></Checkbox>
        </div>
        <div className="flex justify-between">
          <Label htmlFor="toggle" size={size}>
            Enable 2FA security?
          </Label>
          <Toggle id="toggle" size={size}>
            <ToggleThumb />
          </Toggle>
        </div>
      </div>
    );
  },
  args: { onClick: fn() },
  argTypes: {
    size: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "Available sizes",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = createStory({});

export const DefaultDark: Story = createRender(
  ({ size = "medium" as const }) => (
    <div className="dark min-w-[360px] space-y-3">
      <div className="flex justify-between">
        <Label htmlFor="checkbox-dark" size={size}>
          Auto-delete notifications
        </Label>
        <Checkbox id="checkbox-dark" size={size}></Checkbox>
      </div>
      <div className="group flex justify-between">
        <Label htmlFor="toggle-dark" size={size}>
          Enable 2FA security?
        </Label>
        <Toggle id="toggle-dark" size={size}>
          <ToggleThumb />
        </Toggle>
      </div>
    </div>
  ),
  "dark",
);
