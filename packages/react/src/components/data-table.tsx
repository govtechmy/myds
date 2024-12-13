import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  Header,
  getSortedRowModel,
  Table as TTable,
  getFacetedUniqueValues,
  Row,
  Cell,
  RowData,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableTooltip,
} from "./table";
import { ReactNode, useEffect, useState } from "react";
import { ArrowDownIcon } from "../icons/arrow-down";
import { ArrowUpIcon } from "../icons/arrow-up";
import { ColumnCollapseIcon } from "../icons/column-collapse";
import { ColumnExpandIcon } from "../icons/column-expand";
import { clx, pick } from "../utils";
import { Button } from "./button";
import { FilterAscIcon, FilterDescIcon, FilterIcon } from "../icons";

/**
 * Way to define the ColumnMeta type in @tanstack/react-table
 * @see https://tanstack.com/table/v8/docs/api/core/column-def#meta
 */
declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    className?: {
      header?: string;
      cell?: string;
    };
    sortable?: boolean;
    expandable?: boolean;
    tooltip?: ReactNode;
  }
}

interface DataTableProps<TData> {
  className?: string;
  columns: ColumnDef<TData>[];
  data: TData[];
  filterable?: boolean;
  filter?: (
    table: TTable<TData>,
    headers: Header<TData, unknown>[],
  ) => ReactNode;
  onRowSelection?: (value: string[]) => void;
  isMerged?: (row: Row<TData>) => Cell<TData, unknown> | false | undefined;
}

const DataTable = <TData,>({
  columns,
  data,
  filter,
  isMerged,
}: DataTableProps<TData>) => {
  const [expandableColumns, setExpandableColumns] = useState(
    pick(columns, "id", (item) => item.meta?.expandable || false),
  );

  const toggleColumnWidth = (columnId: string) => {
    setExpandableColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    enableColumnFilters: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    debugTable: false,
    debugHeaders: false,
  });

  const headerGroups = table.getHeaderGroups();
  const tableRow = table.getRowModel().rows;

  useEffect(() => {
    const mergedObj = { ...expandableColumns };
    Object.keys(expandableColumns).forEach((columnId) => {
      const longVisibleRows = table.getRowModel().rows.filter((row) => {
        const value = row.getValue(columnId) as string | null;
        return value !== null && value?.length >= 30;
      });

      if (longVisibleRows.length == 0) {
        mergedObj[columnId] = null;
      } else {
        mergedObj[columnId] = false;
      }
    });
    setExpandableColumns(mergedObj);
  }, [tableRow]);

  return (
    <>
      {filter ? filter(table, headerGroups[0]!.headers) : <></>}

      <Table className="w-[inherit]">
        <TableHeader>
          {headerGroups.map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const { tooltip, expandable, sortable } =
                    header.column.columnDef.meta || {};
                  return (
                    <TableHead
                      id={header.id}
                      key={header.id}
                      colSpan={header.colSpan}
                      data-expanded={expandableColumns[header.id]}
                      className={clx(
                        "group transition",
                        [expandable, sortable].some(Boolean) &&
                          "hover:border-otl-primary-300 data-[expanded=true]:border-otl-primary-300",
                        header.column.columnDef.meta?.className?.header,
                      )}
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center justify-between gap-2 whitespace-nowrap">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {/* */}

                          <div className="flex justify-end gap-1">
                            {/* Expand */}
                            {expandable && (
                              <Button
                                size="small"
                                variant={"primary-outline"}
                                onClick={() => toggleColumnWidth(header.id)}
                                className="invisible hidden rounded-md px-1 py-0 group-hover:visible data-[expanded=true]:visible lg:block"
                                data-expanded={expandableColumns[header.id]}
                              >
                                {expandableColumns[header.id] ? (
                                  <ColumnCollapseIcon className="text-txt-primary size-4" />
                                ) : (
                                  <ColumnExpandIcon className="text-txt-primary size-4" />
                                )}
                              </Button>
                            )}

                            {/* Sortable */}
                            {sortable && (
                              <Button
                                size="small"
                                variant={"primary-outline"}
                                onClick={header.column.getToggleSortingHandler()}
                                className="invisible hidden rounded-md px-1 py-0 group-hover:visible data-[sorted=true]:visible lg:block"
                                data-sorted={Boolean(
                                  header.column.getIsSorted(),
                                )}
                              >
                                {{
                                  desc: <FilterDescIcon className="size-4" />,
                                  asc: <FilterAscIcon className="size-4" />,
                                }[header.column.getIsSorted() as string] ?? (
                                  <FilterIcon className="size-4" />
                                )}
                              </Button>
                            )}

                            {/* Tooltip */}
                            {tooltip && <TableTooltip>{tooltip}</TableTooltip>}
                          </div>
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>
        <TableBody>
          {table?.getRowModel()?.rows?.length > 0 ? (
            table.getRowModel().rows.map((row) => {
              const mergedRow = isMerged ? isMerged(row) : undefined;

              return (
                <TableRow key={row.id}>
                  {mergedRow ? (
                    <TableCell
                      id={mergedRow.id}
                      key={mergedRow.id}
                      colSpan={6}
                      className="text-center font-bold"
                    >
                      {flexRender(
                        mergedRow.column.columnDef.cell,
                        mergedRow.getContext(),
                      )}
                    </TableCell>
                  ) : (
                    row.getVisibleCells().map((cell) => {
                      const columnDef = cell.column.columnDef;
                      const headerId = columnDef.id as string;
                      const canExpand = expandableColumns[headerId];
                      return (
                        <TableCell
                          id={cell.id}
                          key={cell.id}
                          className={clx(
                            "sm:whitespace-nowrap",
                            "whitespace-normal break-words",
                            typeof expandableColumns[headerId] === "boolean" &&
                              `truncate ${!canExpand && "max-w-[230px]"}`,
                            cell.column.columnDef.meta?.className?.cell,
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      );
                    })
                  )}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllLeafColumns().length}
                className="text-dim-500 h-24 text-center"
              >
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export { DataTable, type ColumnDef };
