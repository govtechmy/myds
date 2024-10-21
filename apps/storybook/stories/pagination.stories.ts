import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Pagination } from "@myds/react/pagination";

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
 * <Pagination
 *    page={1}
 *    limit={10}
 *    count={199}
 *    type="number"
 *    maxDisplay={4}
 * />
 * ```
 */
const meta = {
  title: "@myds/react/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  args: {
    onPageChange: (page) => console.log(page),
    page: 1,
    limit: 10,
    count: 199,
    type: "number",
    maxDisplay: 4,
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
      options: ["number", "basic", "basic-alternate"],
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the pagination component in "basic" type.
 * This is the most basic implementation of pagination
 */

export const Basic: Story = createStory({
  type: "basic",
});
/**
 * This story represents the pagination component in "basic-alternate" type.
 * This is the most basic implementation of pagination
 */

export const BasicAlternate: Story = createStory({
  type: "basic-alternate",
});
/**
 * This story represents the pagination component in "number" type.
 * This is the most basic implementation of pagination
 */

export const Number: Story = createStory({
  type: "number",
});
/**
 * This story represents the pagination component in "number" type.
 * Where there is only 1 page.
 */

export const SinglePage: Story = createStory({
  type: "number",
  page: 1,
  count: 1,
});
/**
 * This story represents the pagination component in "basic" type.
 * Where there is only 1 page.
 */

export const SinglePageBasic: Story = createStory({
  type: "basic",
  page: 1,
  count: 1,
});
/**
 * This story represents the pagination component in "number" type.
 * Where the page is currently around the middle of the total pages
 */

export const MiddleOfPagination: Story = createStory({
  type: "number",
  page: 7,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "basic" type.
 * Where the page is currently around the middle of the total pages
 */

export const MiddleOfPaginationBasic: Story = createStory({
  type: "basic",
  page: 10,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "number" type.
 * Where the current page is at the end of the pagination
 */

export const EndOfPagination: Story = createStory({
  type: "number",
  page: 15,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "basic" type.
 * Where the current page is at the end of the pagination
 */

export const EndOfPaginationBasic: Story = createStory({
  type: "basic",
  page: 15,
  limit: 4,
  count: 60,
});
/**
 * This story represents the pagination component in "number" type.
 * Where the "maxDisplay" to set how many number to show
 */

export const ControlledNumberPagination: Story = createStory({
  type: "number",
  page: 1,
  limit: 4,
  count: 60,
  maxDisplay: 2,
});

/**
 * This story represents the pagination component in "basic" type.
 * This is the most basic implementation of pagination
 */

export const BasicDark: Story = createStory(
  {
    type: "basic",
    className: "dark",
  },
  "dark",
);
/**
 * This story represents the pagination component in "basic-alternate" type.
 * This is the most basic implementation of pagination
 */

export const BasicAlternateDark: Story = createStory(
  {
    type: "basic-alternate",
    className: "dark",
  },
  "dark",
);
/**
 * This story represents the pagination component in "number" type.
 * This is the most basic implementation of pagination
 */

export const NumberDark: Story = createStory(
  {
    type: "number",
    className: "dark",
  },
  "dark",
);
