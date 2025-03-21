import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@govtechmy/myds-react/tooltip";
import { QuestionCircleIcon } from "@govtechmy/myds-react/icon";

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
 * import { Tooltip, TooltipTrigger, TooltipContent } from "@govtechmy/myds-react/tooltip";
 *
 * <Tooltip>
 *     <TooltipTrigger aria-label="Tooltip">
 *      <QuestionCircleIcon />
 *    </TooltipTrigger>
 *    <TooltipContent>What does the fox says?</TooltipContent>,
 * </Tooltip>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Components/Tooltip",
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
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent>What does the fox says?</TooltipContent>,
        ],
        top: [
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="top" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        bottom: [
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="bottom" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        left: [
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="left" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        right: [
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>,
          <TooltipContent side="right" align="center">
            What does the fox says?
          </TooltipContent>,
        ],
        basicDark: [
          <TooltipTrigger aria-label="Tooltip">
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

const EdgeTooltipDemo = (props: any) => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-4 p-10">
      <div className="flex w-full">
        <div className="flex-1" />
        <Tooltip>
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>
          <TooltipContent side="right">
            This tooltip has side assigned as "right" but shown on the left side
            as collision boundary prevents from colliding
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex w-full">
        <div className="flex-1" />
        <Tooltip>
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            This tooltip has side assigned as "bottom"
          </TooltipContent>
        </Tooltip>
      </div>
      <Tooltip>
        <TooltipTrigger aria-label="Tooltip">
          <QuestionCircleIcon />
        </TooltipTrigger>
        <TooltipContent>Hello world</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger aria-label="Tooltip">
          <QuestionCircleIcon />
        </TooltipTrigger>
        <TooltipContent side="right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger aria-label="Tooltip">
          <QuestionCircleIcon />
        </TooltipTrigger>
        <TooltipContent side="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger aria-label="Tooltip">
          <QuestionCircleIcon />
        </TooltipTrigger>
        <TooltipContent side="bottom">Hello world</TooltipContent>
      </Tooltip>
      <div className="w-full">
        <Tooltip>
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>
          <TooltipContent side="left">Hello world</TooltipContent>
        </Tooltip>
      </div>
      <div className="w-full">
        <Tooltip>
          <TooltipTrigger aria-label="Tooltip">
            <QuestionCircleIcon />
          </TooltipTrigger>
          <TooltipContent side="top" align="start">
            Hello wodsdasdsadsarld
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export const EdgeTooltips: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        height: "500px",
      },
    },
  },
  render: () => <EdgeTooltipDemo />,
};

export const BasicDark: Story = createStory(
  {
    children: "basicDark",
  },
  "dark",
);
