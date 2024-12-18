import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Tooltip, TooltipTrigger } from "@myds/react/tooltip";
import { QuestionCircleIcon } from "@myds/react/icon";
import { TooltipContent } from "@myds/react/_tooltip";

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
 * import { Tooltip, TooltipTrigger, TooltipContent } from "@myds/react/tooltip";
 *
 * <Tooltip>
 *    <TooltipTrigger>
 *      <QuestionCircleIcon />
 *    </TooltipTrigger>
 *    <TooltipContent>What does the fox says?</TooltipContent>,
 * </Tooltip>
 * ```
 */
const meta = {
  title: "@myds/react/Tooltipz",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { children: "basic", open: undefined },
  argTypes: {
    open: {
      type: "boolean",
      control: "radio",
      options: [true, false, undefined],
    },
    children: {
      type: "string",
      control: "select",
      options: [
        "basic",
        "top",
        "bottom",
        "left",
        "right",
        "edge-right",
        "edge-left",
      ],
      mapping: {
        basic: [
          <TooltipTrigger>
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent>What does the fox says?</TooltipContent>,
        ],
        top: [
          <TooltipTrigger>
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="top" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        bottom: [
          <TooltipTrigger>
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="bottom" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        left: [
          <TooltipTrigger>
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="left" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        right: [
          <TooltipTrigger>
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="right" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        basicDark: [
          <TooltipTrigger>
            <QuestionCircleIcon className="text-bg-white" />
          </TooltipTrigger>,
          <TooltipContent className="dark" side="right">
            What does the fox says?
          </TooltipContent>,
        ],
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represent the basic usage of the tooltip
 *
 */

export const Basic: Story = createStory({
  children: "basic",
});
export const Top: Story = createStory({
  children: "top",
});
export const Right: Story = createStory({
  children: "right",
});
export const Left: Story = createStory({
  children: "left",
});
export const Bottom: Story = createStory({
  children: "bottom",
});
export const BasicDark: Story = createStory(
  {
    children: "basicDark",
  },
  "dark",
);
