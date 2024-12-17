import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Tooltip } from "@myds/react/tooltip";
import { QuestionCircleIcon } from "@myds/react/icon";

/**
 * ### Overview
 * Tooltips offer brief, contextual info when users hover or focus on an element, enhancing clarity without cluttering the interface. Typically used to explain icons, buttons, or any interactive elements where the meaning might not be immediately clear.
 *
 * Common use case:
 * - to explain icons
 * - to explain any elements in your page that requires further explanation
 *
 * > Pergi ke dusun mencari kelapa,
 * > Dapat sebiji di bawah tangkai;
 * > Tooltip muncul sekilas saja,
 * > Info diberi, tiada berserakai. -- ChatGPT
 *
 * ### Usage
 * ```tsx
 * // Provide tooltip provider for the usage. It can be at root level or within any specific context.
 *
 * // in `app/layout.tsx`
 * import { TooltipProvider } from "@myds/react/tooltip";
 *
 * <TooltipProvider>{children}</TooltipProvider>
 *
 * // usage context
 * import { Tooltip } from "@myds/react/tooltip";
 *
 * <Tooltip content="Hello from the other side">
 *    <QuestionCircleIcon />
 * </Tooltip>
 * ```
 */
const meta = {
  title: "@myds/react/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    side: "top",
    align: "center",
    open: true,
  },
  argTypes: {
    side: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "The position the content will appear",
      control: "inline-radio",
      options: ["top", "left", "right", "bottom"],
    },
    sideOffset: {
      table: {
        defaultValue: {
          summary: "0",
        },
      },
      description: "The offset position of content from the trigger",
      control: "number",
    },
    align: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "The position where the tooltip content will anchor to",
      control: "inline-radio",
      options: ["center", "start", "end"],
    },
    alignOffset: {
      table: {
        defaultValue: {
          summary: "0",
        },
      },
      description: "The offset position of content from the anchor position",
      control: "number",
    },
    children: {
      description: "The trigger component",
    },
    container: {
      description: "Specify a container element to portal the content into.",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represent the basic usage of the tooltip
 *
 */

export const Default: Story = createStory({
  children: <QuestionCircleIcon />,
  content: "Hello from the other side",
});
