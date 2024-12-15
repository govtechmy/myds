import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFacetedUniqueValues,
  RowData,
  RowSelectionState,
  createColumnHelper,
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
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  selection?: {
    rowId: keyof TData;
    mode: "checkbox" | "radio";
    header?: ReactNode;
    onSelectionChange?: (value: string[]) => void;
  };
  pins?: {
    left?: string[];
    right?: string[];
  };
}

const column_pin_cva = cva([], {
  variants: {},
});

const DataTable = <TData extends Record<string, any>>({
  columns,
  data,
  selection,
  pins,
}: DataTableProps<TData>) => {
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
        return [
          Column.Checkbox<TData>({ header: selection.header }),
          ...columns,
        ];
      case "radio":
        return [Column.Radio<TData>({ header: selection.header }), ...columns];
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
    enableMultiRowSelection: selection?.mode === "checkbox",
    getRowId: selection?.rowId
      ? (row) => row[selection.rowId] as string
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
      <Table className="w-[inherit]">
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
                        header.column.columnDef.meta?.className?.header,
                      )}
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
          {table?.getRowModel()?.rows?.length > 0 ? (
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
                        )}
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

type CheckboxColumnProps<T> = Omit<
  ComponentPropsWithoutRef<typeof Checkbox>,
  "onClick" | "checked" | "onCheckedChange" | "value"
> & {
  header?: ReactNode;
};

const checkboxColumn = <TData extends Record<string, any>>(
  props: CheckboxColumnProps<TData>,
) => {
  const columnHelper = createColumnHelper<TData>();
  return columnHelper.display({
    id: "checkbox",
    header: ({ table }) => (
      <div className="flex items-center gap-1">
        <Checkbox
          checked={
            table.getIsAllRowsSelected() ||
            (table.getIsSomeRowsSelected() && "indeterminate")
          }
          disabled={props?.disabled}
          onClick={table.getToggleAllRowsSelectedHandler()}
        />
        {props?.header}
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        {...props}
        checked={row.getIsSelected()}
        value={row.id}
        disabled={props?.disabled || !row.getCanSelect()}
        onClick={row.getToggleSelectedHandler()}
      />
    ),
  });
};

type RadioColumnProps<T> = Omit<
  ComponentPropsWithoutRef<"input">,
  "value" | "onValueChange"
> & {
  header: ReactNode;
};

const radioColumn = <TData extends Record<string, any>>(
  props: RadioColumnProps<TData>,
) => {
  const columnHelper = createColumnHelper<TData>();
  return columnHelper.display({
    id: "radio",
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
        {props?.header}
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
          disabled={props?.disabled || !row.getCanSelect()}
          onClick={row.getToggleSelectedHandler()}
          className={clx(
            "disabled:bg-bg-washed relative h-full w-full disabled:cursor-not-allowed",
            "before:bg-bg-white before:contents-[''] appearance-none before:absolute before:left-[5px] before:top-[5px] before:size-[6px] before:rounded-full",
          )}
          {...props}
        />
      </div>
    ),
  });
};

const Column = {
  Checkbox: checkboxColumn,
  Radio: radioColumn,
};

export { DataTable, type ColumnDef };
