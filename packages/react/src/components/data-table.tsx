import {
  type Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFacetedUniqueValues,
  RowData,
  RowSelectionState,
  createColumnHelper,
  Row,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
  TableSkeleton,
  TableTooltip,
} from "./table";
import { CSSProperties, ReactNode, useEffect, useMemo, useState } from "react";
import { ColumnCollapseIcon } from "../icons/column-collapse";
import { ColumnExpandIcon } from "../icons/column-expand";
import { clx, pick } from "../utils";
import { Button } from "./button";
import {
  FilterAscIcon,
  FilterDescIcon,
  FilterIcon,
  ReloadIcon,
} from "../icons";
import { Checkbox } from "./checkbox";
import { cva } from "class-variance-authority";
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

interface DataTableProps<TData extends Record<string, any>> {
  className?: string;
  columns: ColumnDef<TData>[];
  data: TData[];
  loading?: boolean;
  selection?: {
    id_by: keyof TData;
    mode: "checkbox" | "radio";
    onSelectionChange?: (value: string[]) => void;
    enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
    enableSubRowSelection?: boolean | ((row: Row<TData>) => boolean);
  };
  pins?: {
    left?: string[];
    right?: string[];
  };
  emptyState?: ReactNode;
}

const column_pinning_cva = cva(["bg-bg-white"], {
  variants: {
    direction: {
      left: "sticky z-10",
      right: "sticky z-10 pl-2",
      false: "",
    },
    isLast: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      direction: ["left"],
      isLast: true,
      className:
        "before:right-0 before:border-none before:outline-none before:bottom-0 before:pointer-events-none before:contents-[''] before:absolute top-0 before:w-1 before:bg-transparent before:h-full before:py-0 before:shadow-[inset_3px_0_8px_-8px]",
    },
    {
      direction: ["right"],
      isLast: true,
      className:
        "before:left-0 before:border-none before:outline-none before:bottom-0 before:pointer-events-none before:contents-[''] before:absolute top-0 before:w-1 before:bg-transparent before:h-full before:py-0 before:shadow-[inset_-3px_0_8px_-8px]",
    },
  ],
});

const DataTable = <TData extends Record<string, any>>({
  columns,
  data,
  selection,
  pins,
  loading,
  className,
  emptyState,
}: DataTableProps<TData>) => {
  // const { gridProps, getCellProps } = useGridKeyboardNavigation(5, 5);
  const [expandableColumns, setExpandableColumns] = useState(
    pick(columns, "id", () => false),
  );
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const toggleColumnWidth = (columnId: string) => {
    setExpandableColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  const _columns = useMemo(() => {
    switch (selection?.mode) {
      case "checkbox":
        return [Column.Checkbox<TData>(), ...columns];
      case "radio":
        return [Column.Radio<TData>(), ...columns];
      default:
        return columns;
    }
  }, [columns, selection?.mode]);

  const table = useReactTable<TData>({
    data,
    columns: _columns,
    state: {
      rowSelection,
      columnPinning: {
        left: pins?.left,
        right: pins?.right,
      },
    },
    enableRowSelection: selection?.enableRowSelection,
    enableSubRowSelection: selection?.enableSubRowSelection,
    enableMultiRowSelection: selection?.mode === "checkbox",
    getRowId: selection?.id_by
      ? (row) => row[selection.id_by] as string
      : undefined,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    debugTable: false,
    debugHeaders: false,
  });

  useEffect(() => {
    if (!selection) return;
    selection?.onSelectionChange?.(Object.keys(table.getState().rowSelection));
  }, [table.getState().rowSelection]);

  return (
    <>
      {/* {filter ? filter(table, headerGroups[0]!.headers) : <></>} */}
      <Table
        className={className}
        style={{
          width: Boolean(pins) ? table.getTotalSize() : undefined,
        }}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => {
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
                        column_pinning_cva({
                          direction: header.column.getIsPinned(),
                          isLast: header.column.getIsLastColumn(
                            header.column.getIsPinned(),
                          ),
                        }),
                        header.column.columnDef.meta?.className?.header,
                      )}
                      style={{ ...getCommonPinningStyles(header.column) }}
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center justify-between gap-2 whitespace-nowrap">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}

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
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                {table.getAllLeafColumns().map((column) => (
                  <TableCell key={column.id} className="py-3">
                    <TableSkeleton />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : table?.getRowModel()?.rows?.length > 0 ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
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
                          cell.column.getIsPinned() && "bg-bg-white",
                          column_pinning_cva({
                            direction: cell.column.getIsPinned(),
                            isLast: cell.column.getIsLastColumn(
                              cell.column.getIsPinned(),
                            ),
                          }),
                        )}
                        style={{ ...getCommonPinningStyles(cell.column) }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableEmpty colSpan={table.getAllLeafColumns().length}>
                {emptyState || "No data available"}
              </TableEmpty>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

const checkboxColumn = <TData extends Record<string, any>>() => {
  const columnHelper = createColumnHelper<TData>();
  return columnHelper.display({
    id: "checkbox",
    size: 46,
    enableResizing: true,
    header: ({ table }) => (
      <Checkbox
        key="checkbox-all"
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomeRowsSelected() && "indeterminate")
        }
        onClick={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        key={`checkbox-${row.id}`}
        checked={row.getIsSelected()}
        value={row.id}
        disabled={!row.getCanSelect()}
        onClick={row.getToggleSelectedHandler()}
      />
    ),
  });
};

const radioColumn = <TData extends Record<string, any>>() => {
  const columnHelper = createColumnHelper<TData>();
  return columnHelper.display({
    id: "radio",
    size: 46,
    enableResizing: false,
    header: ({ table }) => (
      <div className="flex items-center gap-1">
        <Button
          size="small"
          variant="default-ghost"
          onClick={() => table.resetRowSelection(false)}
          className="invisible px-1 py-0 transition data-[selected=true]:visible"
          data-selected={table.getIsSomeRowsSelected()}
        >
          <ReloadIcon className="text-txt-black-500 size-4 rotate-45" />
        </Button>
      </div>
    ),
    cell: ({ row, getValue, table }) => (
      <div
        className={clx(
          "shadow-button hover:border-otl-gray-300 border-otl-gray-200 flex aspect-square size-4 items-center justify-center rounded-full border",
          "focus-within:ring-fr-primary focus-within:ring-4 focus-within:ring-opacity-40 focus:outline-none",
          "has-[:checked]:bg-primary-600 has-[:disabled]:has-[:checked]::bg-primary-600 has-[:checked]:border-none has-[:disabled]:opacity-30",
        )}
      >
        <input
          type="radio"
          role="radio"
          id={row.id}
          value={row.id}
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onClick={row.getToggleSelectedHandler()}
          className={clx(
            "disabled:bg-bg-washed relative h-full w-full disabled:cursor-not-allowed",
            "before:bg-bg-white before:contents-[''] appearance-none before:absolute before:left-[5px] before:top-[5px] before:size-[6px] before:rounded-full",
          )}
        />
      </div>
    ),
  });
};

const getCommonPinningStyles = <TData extends Record<string, any>>(
  column: Column<TData>,
): CSSProperties => {
  const isPinned = column.getIsPinned();
  return {
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    width: column.getSize(),
  };
};

const Column = {
  Checkbox: checkboxColumn,
  Radio: radioColumn,
};

export { DataTable, type ColumnDef };
