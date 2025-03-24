import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  AutoPagination,
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@govtechmy/myds-react/pagination";
import React from "react";

import { GovtOfficeIcon } from "@govtechmy/myds-react/icon";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import ArrowBack from "../react/arrow-back";

/**
 * ### Overview
 * Allows users to navigate through a large set of content divided into discrete pages.
 *
 * > Bunga melur harum di taman,
 * > Mekar berseri di waktu pagi;
 * > Halaman banyak tak jadi beban,
 * > Pagination memudah, kandungan rapi. -- ChatGPT
 *
 * ### Usage
 * ```ts
 * import Pagination from "@govtechmy/myds-react/pagination";
 *
 * <Pagination
 *    page={1}
 *    limit={10}
 *    count={199}
 *    type="simple"
 *    maxDisplay={4}
 * />
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Pagination",
  component: AutoPagination,
  parameters: {
    layout: "centered",
    query: {
      page: "2",
    },
  },
  args: {
    onPageChange: (page) => console.log("page", page),
    page: 1,
    limit: 10,
    count: 199,
    type: "default",
    maxDisplay: 4,
    next: undefined,
    previous: undefined,
    fullText: undefined,
  },
  argTypes: {
    page: {
      table: {
        category: "myds API",
      },
      description: "The current page number",
    },
    count: {
      table: {
        category: "myds API",
      },
      description: "The total number of items",
    },
    limit: {
      table: {
        category: "myds API",
      },
      description: "The number of items per page",
    },
    maxDisplay: {
      table: {
        category: "myds API",
        type: {
          summary: "number",
        },
      },
      description:
        "The number of items to display for paginated number before ellipsis",
    },
    type: {
      table: {
        type: {
          summary: "enum",
        },
        category: "myds API",
      },
      description: "The multiple types available for pagination",
      control: "inline-radio",
      type: "string",
      options: ["default", "simple", "full"],
    },
  },
} satisfies Meta<typeof AutoPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the pagination component in "simple" type.
 * This is the most basic implementation of pagination
 */

export const Simple: Story = createStory({
  type: "simple",
});
/**
 * This story represents the pagination component in "full" type.
 * This is the most basic implementation of pagination
 */

export const Full: Story = createStory({
  type: "full",
});
/**
 * This story represents the pagination component in "default" type.
 * This is the most basic implementation of pagination
 */

export const Default: Story = createStory({
  type: "default",
});
/**
 * This story represents the pagination component in "default" type.
 * Where there is only 1 page.
 */

export const SinglePage: Story = createStory({
  type: "default",
  page: 1,
  count: 1,
});
/**
 * This story represents the pagination component in "simple" type.
 * Where there is only 1 page.
 */

export const SinglePageSimple: Story = createStory({
  type: "simple",
  page: 1,
  count: 1,
});
/**
 * This story represents the pagination component in "default" type.
 * Where the page is currently around the middle of the total pages
 */

export const MiddleOfPagination: Story = createStory({
  type: "default",
  page: 7,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "simple" type.
 * Where the page is currently around the middle of the total pages
 */

export const MiddleOfPaginationSimple: Story = createStory({
  type: "simple",
  page: 10,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "default" type.
 * Where the current page is at the end of the pagination
 */

export const EndOfPagination: Story = createStory({
  type: "default",
  page: 15,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "simple" type.
 * Where the current page is at the end of the pagination
 */

export const EndOfPaginationSimple: Story = createStory({
  type: "simple",
  page: 15,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "default" type.
 * Where the "maxDisplay" to set how many number to show
 */

export const ControlledNumberPagination: Story = createStory({
  type: "default",
  page: 1,
  limit: 4,
  count: 60,
  maxDisplay: 2,
});
/**
 * This story represents the pagination component in "full" type.
 * Where using customized buttons and labels
 */
export const CustomizedButtonAndLabel: Story = createStory({
  type: "full",
  page: 1,
  limit: 4,
  count: 60,
  maxDisplay: 2,
  previous: (
    <PaginationPrevious asChild>
      <Button variant="danger-fill">
        <ButtonIcon>
          <ArrowBack />
        </ButtonIcon>
        Stop
      </Button>
    </PaginationPrevious>
  ),
  next: (
    <PaginationNext asChild>
      <Button variant="primary-fill">
        <ButtonIcon>
          <GovtOfficeIcon />
        </ButtonIcon>
        Go
      </Button>
    </PaginationNext>
  ),
  fullText: `Muka Surat 1 daripada 20`,
});

/**
 *
 * ```ts
 * import Pagination from "@govtechmy/myds-react/pagination";
 *
 * const urlParams = new URLSearchParams(document.location.search);
 *
 *  // In storybook, query params is added here in meta
 *  parameters: { query: { page: "6" } },
 *
 * return (
 *  <Pagination
 *    page={Number(urlParams.get("page")) || 1}
 *    limit={10}
 *    count={199}
 *    type="default"
 *    maxDisplay={4}
 *    onPageChange={(page) => {
 *      console.log("will run this: urlParams.set('page', page.toString());");
 *      urlParams.set("page", page.toString());
 *    }}
 * />
 * );
 * ```
 */

export const ServerSidePagination: Story = {
  parameters: {
    query: { page: "6" },
    backgrounds: {
      default: "light",
      values: [{ name: "dark", value: "#18181B" }],
    },
  },
  render: (args, context) => {
    const urlParams = new URLSearchParams(document.location.search);
    return (
      <AutoPagination
        page={Number(urlParams.get("page")) || 1}
        limit={10}
        count={199}
        type="default"
        onPageChange={(page) => {
          console.log(
            "will run this: urlParams.set('page', page.toString()) which is",
            page,
          );
          urlParams.set("page", page.toString());
        }}
      />
    );
  },
};

/**
 * This story represents the pagination component in "simple" type.
 * This is the most basic implementation of pagination
 */

export const SimpleDark: Story = createStory(
  {
    type: "simple",
    className: "dark",
  },
  "dark",
);
/**
 * This story represents the pagination component in "full" type.
 * This is the most basic implementation of pagination
 */

export const FullDark: Story = createStory(
  {
    type: "full",
    className: "dark",
  },
  "dark",
);
/**
 * This story represents the pagination component in "default" type.
 * This is the most basic implementation of pagination
 */

export const DefaultDark: Story = createStory(
  {
    type: "default",
    className: "dark",
  },
  "dark",
);
