import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { DateField } from "@myds/react/date-field";

/**
 * ### Overview
 * The Date Field component allows users to input a date in a structured format
 * using separate fields for day, month, and year.
 *
 * _Based on [HTML's date input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)_
 *
 * ### Usage
 * ```tsx
 * import DateField from "@myds/react/date-field";
 *
 * const [date, setDate] = useState("1957-08-31")
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
    invalid: false,
  },
  argTypes: {
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
    invalid: {
      table: { category: "myds API" },
      type: "boolean",
      description: "Whether the DateField is invalid.",
      control: "boolean",
    },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = createStory({ defaultValue: "1957-08-31" });

export const DisabledLight: Story = createStory({ disabled: true });

export const ErrorLight: Story = createStory({ invalid: true });

export const Dark: Story = createStory(
  {
    className: "dark",
    defaultValue: "1957-08-31",
  },
  "dark",
);

export const DisabledDark: Story = createStory(
  { disabled: true, className: "dark" },
  "dark",
);

export const ErrorDark: Story = createStory(
  { invalid: true, className: "dark" },
  "dark",
);
