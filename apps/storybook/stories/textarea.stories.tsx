import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { TextArea } from "@govtechmy/myds-react/textarea";

/**
 * ### Overview
 * TextArea is a multi-line text input component designed for longer form content.
 * Unlike the Input component which is limited to a single line, TextArea expands
 * vertically to accommodate multiple lines of text.
 *
 * > Kertas putih di atas meja,
 * > Tempat menulis kata hati,
 * > TextArea membantu kerja,
 * > Ruang bebas mengisi arti. -- Claude
 *
 * ### Usage
 * ```tsx
 * import TextArea from "@govtechmy/myds-react/text-area";
 *
 * <TextArea />
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    componentSubtitle: "Multi-line text input for longer form content",
  },
  argTypes: {
    size: {
      description: "Controls the size of the textarea",
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    placeholder: {
      description: "Placeholder text displayed when the textarea is empty",
      control: "text",
    },
    disabled: {
      description: "Whether the textarea is disabled",
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message here...",
    size: "medium",
  },
};

export const Dark: Story = createStory(
  {
    placeholder: "Enter your message here...",
    size: "medium",
    className: "dark",
  },
  "dark",
);

export const DisabledLight: Story = {
  args: {
    placeholder: "Enter your message here...",
    size: "medium",
    disabled: true,
  },
};

export const DisabledDark: Story = createStory(
  {
    placeholder: "Enter your message here...",
    size: "medium",
    disabled: true,
    className: "dark",
  },
  "dark",
);
