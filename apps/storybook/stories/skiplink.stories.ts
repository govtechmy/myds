import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Skiplink } from "@myds/react/skiplink";

/**
 * ### Overview
 * The skip link component enables users to bypass repetitive navigation links and jumps directly to the main content. It enhances accessibility for keyboard and screen reader users by improving navigation efficiency and is typically hidden until focused.
 *
 * > Melompat jauh di padang permainan,
 * > Langkah ringan menuju destinasi.
 * > Skiplink memberi kemudahan,
 * > Pengguna melayari tanpa frustrasi. -- Claude
 *
 * ### Usage
 * ```ts
 * import Skiplink from "@myds/react/skiplink";
 *
 * <Skiplink href="#main-content" text="Skip to main content"/>
 * ```
 */
const meta = {
  title: "@myds/React/Skiplink",
  component: Skiplink,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      description: "The text content displayed in the skiplink button",
      control: "text",
    },
    href: {
      description: "The target URL or anchor ID that the skiplink navigates to",
      control: "text",
    },
  },
  args: {
    text: "Skip to main content",
    href: "#main",
  },
  tags: ["autodocs"],
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

export const Default: Story = createStory({}); // Uses the default args from meta

export const CustomText: Story = createStory({
  text: "Jump to content", // Overrides just the text
});
