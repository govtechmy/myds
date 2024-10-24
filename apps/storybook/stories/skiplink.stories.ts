import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Skiplink } from "@myds/react/skiplink";

/**
 * ### Overview
 * Insert a brief description of the component here.
 *
 * > Insert a ChatGPT pantun here 
 *
 * ### Usage
 * ```ts
 * import Skiplink from "@myds/react/skiplink";
 *
 * <Skiplink />
 * ```
 */
const meta = {
  title: "@myds/react/Skiplink",
  component: Skiplink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  argTypes: {
    type: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "inline-radio",
      options: ["option-1", "option-2", "option-3"],
    },
  }
} satisfies Meta<typeof Skiplink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({ ... });
 * export const DarkDefault: Story = createStory({ ... , className="dark"}, "dark");
 */

// export const Default: Story = createStory({
//  children: "Example",
// });