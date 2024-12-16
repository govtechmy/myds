import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { ColumnDef, DataTable } from "@myds/react/data-table";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";
import { Button } from "@myds/react/button";
import { Tag } from "@myds/react/tag";

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
      {
        id: "status",
        header: "Status",
        cell: () => {
          return (
            <Tag variant="success" size={"small"} mode="pill">
              Success
            </Tag>
          );
        },
      },
      {
        id: "action",
        header: "Action",
        cell: () => {
          return <Button variant="default-outline">Edit</Button>;
        },
      },
    ] satisfies ColumnDef<EmployeeProps>[],
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
  },
} satisfies TypeWithDeepControls<Meta<typeof DataTable>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = createStory({});

export const SelectionCheckbox: Story = createStory({
  selection: {
    rowId: "id",
    mode: "checkbox",
    onSelectionChange: (rows: any) => console.log(rows, "test"),
  },
});

export const SelectionRadio: Story = createStory({
  selection: {
    rowId: "id",
    mode: "radio",
    onSelectionChange: (rows: any) => console.log(rows, "test"),
  },
});

export const Loading: Story = createStory({
  loading: true,
});

export const GroupedHeader: Story = createStory({
  columns: [
    {
      id: "employee",
      header: "Employee",
      columns: [
        {
          id: "name",
          header: "Name",
          accessorKey: "name",
          size: 180,
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
          },
        },
        {
          id: "position",
          header: "Position",
          accessorKey: "position",
          meta: {
            expandable: true,
          },
        },
      ],
    },
    {
      id: "status",
      header: "Status",
      cell: () => {
        return (
          <Tag variant="success" size={"small"} mode="pill">
            Success
          </Tag>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
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
});

export const PinnedColumns: Story = createStory({
  columns: [
    {
      id: "name",
      header: "Name",
      accessorKey: "name",
      size: 180,
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
      },
    },
    {
      id: "position",
      header: "Position",
      accessorKey: "position",
      meta: {
        expandable: true,
      },
    },
    {
      id: "status",
      header: "Status",
      cell: () => {
        return (
          <Tag variant="success" size={"small"} mode="pill">
            Success
          </Tag>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => {
        return <Button variant="default-outline">Edit</Button>;
      },
    },
  ] satisfies ColumnDef<EmployeeProps>[],
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
  selection: {
    rowId: "id",
    mode: "radio",
    onSelectionChange: (rows: any) => console.log(rows, "test"),
  },
  pins: {
    left: ["radio", "name", "age"],
    right: ["position"],
  },
});
