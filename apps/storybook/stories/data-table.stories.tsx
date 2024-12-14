import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { DataTable } from "@myds/react/data-table";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

/**
 * ### Overview
 * Insert a brief description of the component here.
 *
 * > Insert a ChatGPT pantun here
 *
 * ### Usage
 * ```tsx
 * import Table from "@myds/react/table";
 *
 * <Table />
 * ```
 */

type EmployeeProps = {
  id: number;
  name: string;
  age: number;
  position: string;
};

const meta: Meta<typeof DataTable> = {
  title: "@myds/react/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    columns: [
      {
        id: "name",
        header: "Name",
        accessorKey: "name",
        meta: {
          expandable: true,
        },
      },
      {
        id: "age",
        header: "Age",
        accessorKey: "age",
        meta: {
          expandable: false,
          tooltip: "Age of the employee",
        },
      },
      {
        id: "position",
        header: "Position",
        accessorKey: "position",
        meta: {
          expandable: true,
          sortable: true,
          tooltip: "Position of the employee",
        },
      },
    ],
    data: [
      {
        id: 1,
        name: "John Doe",
        age: 25,
        position: "Software Engineer",
      },
      {
        id: 2,
        name: "Jane Doe",
        age: 30,
        position: "Product Manager",
      },
      {
        id: 3,
        name: "Alice",
        age: 22,
        position: "Designer",
      },
      {
        id: 4,
        name: "Bob",
        age: 35,
        position: "Software Engineer",
      },
      {
        id: 5,
        name: "Charlie",
        age: 28,
        position: "Data Scientist",
      },
    ],
    // selection: {
    //   rowId: "id",
    //   mode: "radio",
    //   onSelectionChange: (rows) => console.log(rows, "test"),
    // },
  },
  argTypes: {
    // "selection.mode": {
    //   table: {
    //     defaultValue: {
    //       summary: "none",
    //     },
    //     type: {
    //       summary: "enum",
    //       detail: "small, medium, large",
    //     },
    //     category: "myds API",
    //   },
    //   control: "inline-radio",
    //   options: ["checkbox", "radio"],
    // },
  },
} satisfies TypeWithDeepControls<Meta<typeof DataTable>>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({ ... });
 * export const DarkDefault: Story = createStory({ ... , className="dark"}, "dark");
 */

export const Default: Story = createStory({});

export const Selection_Checkbox: Story = createStory({
  selection: {
    rowId: "id",
    mode: "checkbox",
    onSelectionChange: (rows: any) => console.log(rows, "test"),
  },
});

export const Selection_Radio: Story = createStory({
  selection: {
    rowId: "id",
    mode: "radio",
    onSelectionChange: (rows: any) => console.log(rows, "test"),
  },
});
