import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@govtechmy/myds-react/breadcrumb";
import React from "react";

/**
 * ### Overview
 * A navigation aid that helps users understand their current location within a website or application and allows them to easily navigate back to previous levels.
 *
 * > Ke pasar pagi beli selasih,
 * > Singgah sebentar di kedai rempah;
 * > Navigasi mudah, langkah tersisih,
 * > Breadcrumb penunjuk, jalan terarah. -- ChatGPT
 *
 * ### Usage
 * ```ts
 * import {
 *    Breadcrumb,
 *    BreadcrumbList,
 *    BreadcrumbItem,
 *    BreadcrumbLink,
 *    BreadcrumbPage,
 *    BreadcrumbSeparator,
 *    BreadcrumbEllipsis,
 *  } from "@govtechmy/myds-react/breadcrumb";
 *
 * <Breadcrumb>
 *  <BreadcrumbList>
 *    <BreadcrumbItem>
 *      <BreadcrumbLink href={routes.home}>
 *          Home
 *       </BreadcrumbLink>
 *     </BreadcrumbItem>
 *    <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>
 *        Your Page
 *       </BreadcrumbPage>
 *     </BreadcrumbItem>
 *  </BreadcrumbList>
 * </Breadcrumb>
 * ```
 */
const meta: Meta = {
  title: "@govtechmy/myds-react/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
    children: "basic",
  },
  argTypes: {
    variant: {
      table: {
        type: {
          summary: "enum",
        },
        category: "myds API",
      },
      description: "Available variants",
      control: "inline-radio",
      options: ["default", "fill"],
    },
    children: {
      type: "string",
      control: "select",
      options: ["basic", "alternative", "long-text"],
      description: "Select different scenario to breadcrumb",
      mapping: {
        basic: (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Your Page</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ),
        alternative: (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Google</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Project A</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Task</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ),
        "long-text": (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Category</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                A really really long page name here
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ),
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the breadcrumb component with default variant.
 * This is the most basic implementation of breadcrumb
 */
export const Basic: Story = createStory({
  variant: "default",
  children: "basic",
});

/**
 * This story represents the breadcrumb component with the "fill" variant. The breadcrumb come with a solid background color wrapping it
 *
 */
export const SimpleFill: Story = createStory({
  variant: "fill",
  children: "basic",
});
/**
 * This story represents the breadcrumb component with the "fill" variant in different child variation
 *
 */
export const Fill: Story = createStory({
  variant: "fill",
  children: "alternative",
});

/**
 * This story represents the breadcrumb component with very long text in the current page
 *
 */
export const LongText: Story = createStory({
  variant: "default",
  children: "long-text",
});
/**
 * This story represents the breadcrumb component with very long text in the current page in "fill" variant.
 *
 */
export const LongTextFill: Story = createStory({
  variant: "fill",
  children: "long-text",
});

/**
 * This story represents the breadcrumb component with default variant.
 * This is the most basic implementation of breadcrumb
 * Version: Dark Mode
 */
export const DarkBasic: Story = createStory(
  {
    variant: "default",
    children: "basic",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents the breadcrumb component with the "fill" variant. The breadcrumb come with a solid background color wrapping it
 * Version: Dark Mode
 *
 */
export const DarkSimpleFill: Story = createStory(
  {
    variant: "fill",
    children: "basic",
    className: "dark",
  },
  "dark",
);
/**
 * This story represents the breadcrumb component with the "fill" variant. The breadcrumb come with a solid background color wrapping it
 * Version: Dark Mode
 *
 */
export const DarkFill: Story = createStory(
  {
    variant: "fill",
    children: "alternative",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents the breadcrumb component with long text
 * Version: Dark Mode
 *
 */
export const DarkLongText: Story = createStory(
  {
    variant: "default",
    children: "long-text",
    className: "dark",
  },
  "dark",
);
/**
 * This story represents the breadcrumb component with the "fill" variant. The breadcrumb come with a solid background color wrapping it
 * Version: Dark Mode
 *
 */
export const DarkLongTextFill: Story = createStory(
  {
    variant: "fill",
    children: "long-text",
    className: "dark",
  },
  "dark",
);
