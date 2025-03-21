import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Cell, ColumnDef, DataTable } from "@govtechmy/myds-react/data-table";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";
import { Button } from "@govtechmy/myds-react/button";
import { Tag } from "@govtechmy/myds-react/tag";

type EmployeeProps = {
  id: number;
  name: string;
  age: number;
  position: string;
};

/**
 * ### Overview
 *  `DataTable` component is used to display tabular data with various features such as expandable rows, sortable columns, and custom cell rendering.
 *
 * Features include:
 * - ✅ Expandable rows
 * - ✅ Sortable columns
 * - ✅ Custom cell rendering
 * - ✅ Selection modes: `checkbox` | `radio`
 * - ✅ Nested rows
 * - ✅ Footer
 * - ✅ Pinned columns
 * - ✅ Loading state
 * - ✅ Empty state
 * - ✅ Grouped headers
 * - ✅ Fixed header
 *
 * ### Usage
 * ```tsx
 * import Table from "@govtechmy/myds-react/table";
 *
 * <DataTable
 * columns={[
 *   {
 *     accessorKey: 'name',
 *     header: 'Name',
 *     id: 'name',
 *     meta: {
 *       expandable: true
 *     }
 *   },
 *   {
 *     accessorKey: 'age',
 *     header: 'Age',
 *     id: 'age',
 *     meta: {
 *       expandable: false,
 *       tooltip: 'Age of the employee'
 *     }
 *   },
 *   {
 *     accessorKey: 'position',
 *     header: 'Position',
 *     id: 'position',
 *     meta: {
 *       expandable: true,
 *       sortable: true,
 *       tooltip: 'Position of the employee'
 *     }
 *   },
 *   {
 *     cell: () => {},
 *     header: 'Status',
 *     id: 'status'
 *   },
 *   {
 *     cell: () => {},
 *     header: 'Action',
 *     id: 'action'
 *   }
 * ]}
 * data={[
 *   {
 *     age: 25,
 *     id: 1,
 *     name: 'John Doe',
 *     position: 'Software Engineer'
 *   },
 *   {
 *     age: 30,
 *     id: 2,
 *     name: 'Jane Doe',
 *     position: 'Product Manager'
 *   },
 *   {
 *     age: 22,
 *     id: 3,
 *     name: 'Alice',
 *     position: 'Designer'
 *   },
 *   {
 *     age: 35,
 *     id: 4,
 *     name: 'Bob',
 *     position: 'Software Engineer'
 *   },
 *   {
 *     age: 28,
 *     id: 5,
 *     name: 'Charlie',
 *     position: 'Data Scientist'
 *   }
 * ]}
 * />
 * ```
 */

const meta: Meta<typeof DataTable> = {
  title: "@govtechmy/myds-react/Components/DataTable",
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
        name: "Bob 'Very Long Middle Namesdsdsdsd' dasdsadsad  asdsadsad  Smith",
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
      header: "Application",
      columns: [
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

export const EmptyState: Story = createStory({ data: [] });

export const FixedHeader: Story = createStory({
  className: "max-h-[300px]",
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
      header: "Application",
      columns: [
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
    {
      id: 6,
      name: "Ali",
      age: 25,
      position: "Software Engineer",
    },
    {
      id: 7,
      name: "Jane",
      age: 30,
      position: "Product Manager",
    },
    {
      id: 8,
      name: "Alicia",
      age: 22,
      position: "Designer",
    },
    {
      id: 9,
      name: "Bobby",
      age: 35,
      position: "Software Engineer",
    },
    {
      id: 10,
      name: "Charlie",
      age: 28,
      position: "Data Scientist",
    },
  ],
});

const nested_data = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    position: "Software Engineer",
    children: [
      {
        id: 11,
        name: "John Doe Jr.",
        age: 5,
        position: "Software Engineer",
        children: [
          {
            id: 111,
            name: "John Doe-raemon",
            age: 5,
            position: "Software Engineer",
          },
          {
            id: 112,
            name: "John 'Penat' Doe",
            age: 5,
            position: "Software Engineer",
          },
        ],
      },
      {
        id: 12,
        name: "John Doe Jr.",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
    position: "Product Manager",
    children: [
      {
        id: 21,
        name: "Jane Doe Jr.",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 22,
        name: "Jane Doe Jr.",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 3,
    name: "Alice",
    age: 22,
    position: "Designer",
    children: [
      {
        id: 31,
        name: "Alice Jr.",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 32,
        name: "Alice Jr.",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 4,
    name: "Bob",
    age: 35,
    position: "Software Engineer",
    children: [
      {
        id: 41,
        name: "Bob Jr.",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 42,
        name: "Bob Jr.",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 5,
    name: "Charlie",
    age: 28,
    position: "Data Scientist",
    children: [
      {
        id: 51,
        name: "Charlie Jr.",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 52,
        name: "Charlie Jr.",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
];

export const NestedRows: Story = createStory({
  columns: [
    {
      id: "name",
      header: "Name",
      accessorKey: "name",
      size: 180,
      meta: {
        expandable: true,
      },
      cell: Cell.Expand,
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
  ] satisfies ColumnDef<EmployeeProps>[],
  data: nested_data,
  nest: {
    id_by: "children",
  },
});

export const Footer: Story = createStory({
  columns: [
    {
      id: "name",
      header: "Name",
      accessorKey: "name",
      meta: {
        expandable: true,
      },
      footer: ({ table }) => `No. of Employees: ${table.getRowCount()}`,
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
  pin: {
    left: ["_radio", "name", "age"],
    right: ["position"],
  },
});
