import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Input, InputAddon, InputIcon } from "@govtechmy/myds-react/input";
import ArrowBack from "../react/arrow-back";
import ArrowForward from "../react/arrow-forward";

/**
 * ### Overview
 * 
> Bunga mawar di tepi jalan,
> Harum semerbak menyentuh hati,
> Komponen input teks jadi pilihan,
> Memudahkan kerja setiap hari. -- ChatGPT
 *
 * ### Usage
 * ```tsx
 * import { Input } from "@govtechmy/myds-react/input";
 *
 * //* Default
 * <Input />
 *
 * //* With Icon
 * <Input>
 *  <InputIcon position="left"><ArrowBack /></InputIcon>
 *  <InputIcon position="right"><ArrowForward /></InputIcon>
 * </Input>
 *
 *
 * //* With Addon
 * <Input
 *   prepend={<InputAddon>RM</InputAddon>}
 *   append={<InputAddon>Submit<ArrowForward className="size-5" /></InputAddon>}
 * />
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
    size: "small",
    children: "Default",
    prepend: false,
    append: false,
    disabled: false,
  },
  argTypes: {
    children: {
      type: "string",
      control: "select",
      options: ["Default", "Left Icon", "Right Icon", "Left + Right Icon"],
      mapping: {
        Default: null,
        "Left Icon": (
          <InputIcon position="left">
            <ArrowBack />
          </InputIcon>
        ),
        "Right Icon": (
          <InputIcon position="right">
            <ArrowForward />
          </InputIcon>
        ),
        "Left + Right Icon": [
          <InputIcon position="left">
            <ArrowBack />
          </InputIcon>,
          <InputIcon position="right">
            <ArrowForward />
          </InputIcon>,
        ],
      },
    },
    size: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      description: "insert-description-here",
      control: "boolean",
    },
    prepend: {
      type: "boolean",
      control: "boolean",
      mapping: {
        true: <InputAddon>RM</InputAddon>,
        false: null,
      },
    },
    append: {
      type: "boolean",
      control: "boolean",
      mapping: {
        true: (
          <InputAddon className="flex gap-1">
            Submit
            <ArrowForward className="size-5" />
          </InputAddon>
        ),
        false: null,
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({ ... });
 * export const DarkDefault: Story = createStory({ ... , className="dark"}, "dark");
 */

export const Default: Story = createStory({
  placeholder: "Type something here",
});

export const PrefixIcon: Story = createStory({
  placeholder: "Type something here",
  children: (
    <InputIcon position="left">
      <ArrowBack />
    </InputIcon>
  ),
});

export const SuffixIcon: Story = createStory({
  placeholder: "Type something here",
  children: (
    <InputIcon position="right">
      <ArrowForward />
    </InputIcon>
  ),
});

export const PrefixSuffixIcon: Story = createStory({
  placeholder: "Type something here",
  children: [
    <InputIcon position="left">
      <ArrowBack />
    </InputIcon>,
    <InputIcon position="right">
      <ArrowForward />
    </InputIcon>,
  ],
});

export const PrependInput: Story = createStory({
  placeholder: "Type something here",
  prepend: <InputAddon>RM</InputAddon>,
});

export const AppendInput: Story = createStory({
  placeholder: "Type something here",
  append: <InputAddon>Copy</InputAddon>,
});

export const DefaultDark: Story = createStory(
  {
    placeholder: "Type something here",
    className: "dark",
  },
  "dark",
);
