import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { DateField } from "@myds/react/date-field";

/**
 * ### Overview
 * The Date Field component allows users to input a date in a structured format
 * using separate fields for day, month, and year.
 *
 * _Based on react-aria-components' DateField [(docs)](https://react-spectrum.adobe.com/react-aria/DateField.html)_
 *
 * ### Usage
 * ```tsx
 * import DateField from "@myds/react/date-field";
 *
 * <DateField value={date} onChange={setDate} />
 * ```
 */
const meta = {
  title: "@myds/react/DateField",
  component: DateField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    size: "medium",
    locale: "en-MS",
  },
  argTypes: {
    locale: {
      table: { category: "myds API" },
      control: "select",
      options: ["en-MS", "en-GB", "ms-MY"],
    },
    size: {
      table: {
        defaultValue: {
          summary: "medium",
        },
        type: {
          summary: "enum",
          detail: "small, medium, large",
        },
        category: "myds API",
      },
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    isInvalid: {
      table: { category: "react aria API" },
      type: "boolean",
      description: "Whether the DateField is invalid.",
      control: "boolean",
    },
    isDisabled: {
      table: { category: "react aria API" },
      type: "boolean",
      description: "Whether the DateField is disabled.",
      control: "boolean",
    },
    value: {
      table: { category: "myds API" },
      description: "The current value (controlled).",
    },
    defaultValue: {
      table: { category: "myds API" },
      description: "The default value (uncontrolled).",
    },
    onChange: {
      table: { category: "myds API" },
      description: "Handler that is called when the value changes.",
    },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = createStory({
  defaultValue: new Date(1957, 7, 31),
});

export const DisabledLight: Story = createStory({ isDisabled: true });

export const ErrorLight: Story = createStory({ isInvalid: true });

export const Dark: Story = createStory(
  {
    className: "dark",
    defaultValue: new Date(1957, 7, 31),
  },
  "dark",
);

export const DisabledDark: Story = createStory(
  { isDisabled: true, className: "dark" },
  "dark",
);

export const ErrorDark: Story = createStory(
  { isInvalid: true, className: "dark" },
  "dark",
);
