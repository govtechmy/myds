import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsPage,
  BreadcrumbsSeparator,
} from "@myds/react/breadcrumbs";
import React from "react";

/**
 * ### Overview
 * Breadcrumbs
 *
 * > Insert a ChatGPT pantun here
 *
 * ### Usage
 * ```ts
 * import {
 *    Breadcrumbs,
 *    BreadcrumbsList,
 *    BreadcrumbsItem,
 *    BreadcrumbsLink,
 *    BreadcrumbsPage,
 *    BreadcrumbsSeparator,
 *    BreadcrumbsEllipsis,
 *  } from "@myds/react/breadcrumbs";
 *
 * <Breadcrumbs>
 *  <BreadcrumbsList>
 *    <BreadcrumbsItem>
 *      <BreadcrumbsLink href={routes.home}>
 *          Home
 *       </BreadcrumbsLink>
 *     </BreadcrumbsItem>
 *    <BreadcrumbsSeparator />
 *     <BreadcrumbsItem>
 *       <BreadcrumbsPage>
 *        Your Page
 *       </BreadcrumbsPage>
 *     </BreadcrumbsItem>
 *  </BreadcrumbsList>
 * </Breadcrumbs>
 * ```
 */
const meta: Meta = {
  title: "@myds/react/Breadcrumbs",
  component: Breadcrumbs,
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
      options: ["default", "alternative"],
    },
    children: {
      type: "string",
      control: "select",
      options: ["basic", "alternative", "long-text"],
      description: "Select different scenario to breadcrumbs",
      mapping: {
        basic: (
          <>
            <BreadcrumbsItem>
              <BreadcrumbsLink>Home</BreadcrumbsLink>
            </BreadcrumbsItem>
            <BreadcrumbsSeparator />
            <BreadcrumbsItem>
              <BreadcrumbsPage>Your Page</BreadcrumbsPage>
            </BreadcrumbsItem>
          </>
        ),
        alternative: (
          <>
            <BreadcrumbsItem>
              <BreadcrumbsLink>Home</BreadcrumbsLink>
            </BreadcrumbsItem>
            <BreadcrumbsSeparator />
            <BreadcrumbsItem>
              <BreadcrumbsLink href="/">Google</BreadcrumbsLink>
            </BreadcrumbsItem>
            <BreadcrumbsSeparator />
            <BreadcrumbsItem>
              <BreadcrumbsLink>Project A</BreadcrumbsLink>
            </BreadcrumbsItem>
            <BreadcrumbsSeparator />
            <BreadcrumbsItem>
              <BreadcrumbsPage>Task</BreadcrumbsPage>
            </BreadcrumbsItem>
          </>
        ),
        "long-text": (
          <>
            <BreadcrumbsItem>
              <BreadcrumbsLink>Home</BreadcrumbsLink>
            </BreadcrumbsItem>
            <BreadcrumbsSeparator />
            <BreadcrumbsItem>
              <BreadcrumbsLink>Category</BreadcrumbsLink>
            </BreadcrumbsItem>
            <BreadcrumbsSeparator />
            <BreadcrumbsItem>
              <BreadcrumbsPage>
                A really really long page name here
              </BreadcrumbsPage>
            </BreadcrumbsItem>
          </>
        ),
      },
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the breadcrumb component with default variant.
 * This is the most basic implementation of breadcrumbs
 */
export const Basic: Story = createStory({
  variant: "default",
  children: "basic",
});

/**
 * This story represents the breadcrumb component with the "alternative" variant. The breadcrumbs come with a solid background color wrapping it
 *
 */
export const SimpleAlternative: Story = createStory({
  variant: "alternative",
  children: "basic",
});
/**
 * This story represents the breadcrumb component with the "alternative" variant in different child variation
 *
 */
export const Alternative: Story = createStory({
  variant: "alternative",
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
 * This story represents the breadcrumb component with very long text in the current page in "alternative" variant.
 *
 */
export const LongTextAlternative: Story = createStory({
  variant: "alternative",
  children: "long-text",
});

/**
 * This story represents the breadcrumb component with default variant.
 * This is the most basic implementation of breadcrumbs
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
 * This story represents the breadcrumb component with the "alternative" variant. The breadcrumbs come with a solid background color wrapping it
 * Version: Dark Mode
 *
 */
export const DarkSimpleAlternative: Story = createStory(
  {
    variant: "alternative",
    children: "basic",
    className: "dark",
  },
  "dark",
);
/**
 * This story represents the breadcrumb component with the "alternative" variant. The breadcrumbs come with a solid background color wrapping it
 * Version: Dark Mode
 *
 */
export const DarkAlternative: Story = createStory(
  {
    variant: "alternative",
    children: "alternative",
    className: "dark",
  },
  "dark",
);

/**
 * This story represents the breadcrumb component with the "alternative" variant. The breadcrumbs come with a solid background color wrapping it
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
 * This story represents the breadcrumb component with the "alternative" variant. The breadcrumbs come with a solid background color wrapping it
 * Version: Dark Mode
 *
 */
export const DarkLongTextAlternative: Story = createStory(
  {
    variant: "alternative",
    children: "long-text",
    className: "dark",
  },
  "dark",
);
