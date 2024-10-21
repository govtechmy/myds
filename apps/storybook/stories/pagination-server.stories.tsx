import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Pagination } from "@myds/react/pagination";
import React from "react";

const DemoPagination = (props: any) => {
  const urlParams = new URLSearchParams(document.location.search);

  return (
    <Pagination
      page={Number(urlParams.get("page")) || 1}
      limit={10}
      count={199}
      type="default"
      maxDisplay={4}
      onPageChange={(page) => {
        console.log("will run this: urlParams.set('page', page.toString());");
        urlParams.set("page", page.toString());
      }}
    />
  );
};

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
 * import Pagination from "@myds/react/pagination";
 *
 * const urlParams = new URLSearchParams(document.location.search);
 *
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
 *                   console.log("will run this: urlParams.set('page', page.toString());");
 *                   urlParams.set("page", page.toString());
 *                  }}
 * />
 * );
 * ```
 */
const meta = {
  title: "@myds/react/Pagination-Server",
  component: DemoPagination,
  parameters: {
    layout: "centered",
    query: {
      page: "6",
    },
  },
  args: {
    // onPageChange: (page) => console.log("page", page),
    // page: 1,
    // limit: 10,
    // count: 199,
    // type: "default",
    // maxDisplay: 4,
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
} satisfies Meta<typeof Pagination>;

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
