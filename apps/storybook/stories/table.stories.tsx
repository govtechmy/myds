import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@myds/react/table";

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
const meta = {
  title: "@myds/react/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({ ... });
 * export const DarkDefault: Story = createStory({ ... , className="dark"}, "dark");
 */

const audits = [
  {
    timestamp: "2021-09-01 12:00:00",
    activity: "Login attempt successful",
    user: "Ali",
  },
  {
    timestamp: "2021-09-01 12:01:32",
    activity: "Page visited: /company-a/inventory",
    user: "Ali",
  },
  {
    timestamp: "2021-09-01 12:02:03",
    activity: "New inventory item added: MacBook Pro",
    user: "Ali",
  },
  {
    timestamp: "2021-09-01 12:03:45",
    activity: "Inventory: MacBook Pro stock count updated: 100 units",
    user: "Ali",
  },
];

export const Default: Story = createStory({
  children: [
    <TableCaption>Audit log</TableCaption>,
    <TableHeader>
      <TableRow>
        <TableHead>Timestamp</TableHead>
        <TableHead>Activity</TableHead>
        <TableHead className="text-center">Action Taken</TableHead>
      </TableRow>
    </TableHeader>,
    <TableBody>
      {audits.map((audit) => (
        <TableRow key={audit.timestamp}>
          <TableCell> {audit.timestamp} </TableCell>
          <TableCell> {audit.activity} </TableCell>
          <TableCell className="text-center"> {audit.user} </TableCell>
        </TableRow>
      ))}
    </TableBody>,
  ],
});

export const RowSpan: Story = createStory({
  children: [
    <TableCaption>Tax Assessment Year 2023</TableCaption>,
    <TableHeader>
      <TableRow>
        <TableHead>Category</TableHead>
        <TableHead>Chargeable Income</TableHead>
        <TableHead>Calculation (RM)</TableHead>
        <TableHead className="text-center">Rate</TableHead>
        <TableHead className="text-end">Tax</TableHead>
      </TableRow>
    </TableHeader>,
    <TableBody>
      <TableRow>
        <TableCell> A </TableCell>
        <TableCell> 0 - 5,000 </TableCell>
        <TableCell> On the First 5,000 </TableCell>
        <TableCell className="text-center"> 0% </TableCell>
        <TableCell className="text-end"> RM 0 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan={2}> B </TableCell>
        <TableCell rowSpan={2}> 5,000 - 20,000 </TableCell>
        <TableCell> On the First 5,000 </TableCell>
        <TableCell rowSpan={2} className="text-center">
          1%
        </TableCell>
        <TableCell className="text-end"> RM 0 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell> Next 15,000 </TableCell>
        <TableCell className="text-end"> RM 150 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan={2}> C </TableCell>
        <TableCell rowSpan={2}> 20,001 - 35,000 </TableCell>
        <TableCell> On the First 20,000 </TableCell>
        <TableCell rowSpan={2} className="text-center">
          3%
        </TableCell>
        <TableCell className="text-end"> RM 150 </TableCell>
      </TableRow>
      <TableRow>
        <TableCell> Next 15,000 </TableCell>
        <TableCell className="text-end"> RM 450 </TableCell>
      </TableRow>
    </TableBody>,
  ],
});
