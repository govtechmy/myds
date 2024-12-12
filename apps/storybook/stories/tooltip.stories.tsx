import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@myds/react/tooltip";
import { InfoIcon } from "@myds/react/icon";
import { Button } from "@myds/react/button";

/**
 * ### Overview
 * Insert a brief description of the component here.
 *
 * > Insert a ChatGPT pantun here
 *
 * ### Usage
 * ```tsx
 * import Tooltip from "@myds/react/tooltip";
 *
 * <Tooltip />
 * ```
 */
const meta = {
  title: "@myds/react/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { children: "basic" },
  argTypes: {
    children: {
      type: "string",
      control: "select",
      options: [
        "basic",
        "custom-trigger",
        "top-start",
        "top-center",
        "top-end",
        "bottom-start",
        "bottom-center",
        "bottom-end",
        "left-start",
        "left-center",
        "left-end",
        "right-start",
        "right-center",
        "right-end",
      ],
      mapping: {
        basic: [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "custom-trigger": [
          <TooltipTrigger>
            <Button>Hello</Button>
          </TooltipTrigger>,
          <TooltipContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "top-start": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="top" align="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "top-center": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="top" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "top-end": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="top" align="end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "bottom-start": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="bottom" align="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "bottom-center": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="bottom" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "bottom-end": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="bottom" align="end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "left-start": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="left" align="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "left-center": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="left" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "left-end": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="left" align="end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "right-start": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="right" align="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "right-center": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="right" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
        "right-end": [
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>,
          <TooltipContent side="right" align="end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magni esse quis sit laboriosam assumenda saepe reprehenderit omnis
            itaque, recusandae, fugiat non sint ad quam aperiam enim deserunt
            similique quasi.
          </TooltipContent>,
        ],
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({ ... });
 * export const DarkDefault: Story = createStory({ ... , className="dark"}, "dark");
 */

export const Basic: Story = createStory({
  children: "basic",
});

export const CustomTrigger: Story = createStory({
  children: "basic",
});

export const TopStart: Story = createStory({
  children: "top-start",
});
export const TopCenter: Story = createStory({
  children: "top-center",
});

export const TopEnd: Story = createStory({
  children: "top-end",
});

export const BottomStart: Story = createStory({
  children: "bottom-start",
});

export const BottomCenter: Story = createStory({
  children: "bottom-center",
});

export const BottomEnd: Story = createStory({
  children: "bottom-end",
});

export const LeftStart: Story = createStory({
  children: "left-start",
});

export const LeftCenter: Story = createStory({
  children: "left-center",
});

export const LeftEnd: Story = createStory({
  children: "left-end",
});

export const RightStart: Story = createStory({
  children: "right-start",
});

export const RightCenter: Story = createStory({
  children: "right-center",
});

export const RightEnd: Story = createStory({
  children: "right-end",
});
