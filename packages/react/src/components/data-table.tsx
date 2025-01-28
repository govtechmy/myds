import {
  type Table as TTable,
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
  CellContext,
  ExpandedState,
  getExpandedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableSkeleton,
  TableTooltip,
} from "./table";
import {
  createContext,
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ColumnCollapseIcon } from "../icons/column-collapse";
import { ColumnExpandIcon } from "../icons/column-expand";
import { clx, pick } from "../utils";
import { Button, ButtonIcon } from "./button";
import {
  ChevronRightIcon,
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
  pin?: {
    left?: string[];
    right?: string[];
  };
  nest?: {
    id_by: keyof TData;
  };
  emptyState?: ReactNode;
}

const pin_cva = cva(["bg-bg-white"], {
  variants: {
    pin_direction: {
      left: "sticky z-10",
      right: "sticky z-10 pl-2",
      false: "",
    },
    pin_last: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      pin_direction: ["left"],
      pin_last: true,
      className:
        "before:right-0 before:border-none before:outline-none before:bottom-0 before:pointer-events-none before:contents-[''] before:absolute top-0 before:w-1 before:bg-transparent before:h-full before:py-0 before:shadow-[inset_3px_0_8px_-8px]",
    },
    {
      pin_direction: ["right"],
      pin_last: true,
      className:
        "before:left-0 before:border-none before:outline-none before:bottom-0 before:pointer-events-none before:contents-[''] before:absolute top-0 before:w-1 before:bg-transparent before:h-full before:py-0 before:shadow-[inset_-3px_0_8px_-8px]",
    },
  ],
});

const th_cva = cva(
  ["group transition data-[expanded=true]:border-otl-primary-300"],
  {
    variants: {
      expandable: {
        true: "hover:border-otl-primary-300",
      },
      sortable: {
        true: "hover:border-otl-primary-300",
      },
    },
  },
);

const cell_cva = cva([
  "md:whitespace-nowrap whitespace-normal break-words",
  "data-[expanded=false]:truncate data-[expanded=false]:max-w-[230px]",
]);

interface DataTableContextProps<TData extends Record<string, any>> {
  table: TTable<TData> | null;
  expandableColumns: Record<string, any>;
  toggleColumnWidth: (columnId: string) => void;
  loading?: DataTableProps<TData>["loading"];
  emptyState?: DataTableProps<TData>["emptyState"];
}

const DataTableContext = createContext<DataTableContextProps<any>>({
  table: null,
  expandableColumns: {},
  toggleColumnWidth: () => {},
});

interface DataTableProviderProps<TData extends Record<string, any>>
  extends DataTableProps<TData> {
  children: ReactNode;
}
const DataTableProvider = <TData extends Record<string, any>>({
  children,
  className,
  ...props
}: DataTableProviderProps<TData>) => {
  const { columns, data, selection, pin, nest } = props;
  const [expandableColumns, setExpandableColumns] = useState(
    pick(columns, "id", () => false),
  );
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [expandedSelection, setExpandedSelection] = useState<ExpandedState>({});

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
      expanded: expandedSelection,
      rowSelection: rowSelection,
      columnPinning: {
        left: pin?.left,
        right: pin?.right,
      },
    },
    enableRowSelection: selection?.enableRowSelection,
    enableSubRowSelection: selection?.enableSubRowSelection,
    enableMultiRowSelection: selection?.mode === "checkbox",
    getRowId: selection?.id_by
      ? (row) => row[selection.id_by] as string
      : undefined,
    getSubRows: nest ? (row) => row[nest.id_by] : undefined,
    onExpandedChange: setExpandedSelection,
    onRowSelectionChange: setRowSelection,
    getExpandedRowModel: getExpandedRowModel(),
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
    <DataTableContext.Provider
      value={{ table, expandableColumns, toggleColumnWidth, ...props }}
    >
      <Table
        className={className}
        style={{
          width: Boolean(props.pin) ? table.getTotalSize() : undefined,
        }}
      >
        {children}
      </Table>
    </DataTableContext.Provider>
  );
};

const DataTableHeader: FunctionComponent = () => {
  const { table, expandableColumns, toggleColumnWidth } =
    useContext(DataTableContext);

  if (!table) return null;

  return (
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
                  data-pinned={header.column.getIsPinned()}
                  className={clx(
                    th_cva({ expandable, sortable }),
                    pin_cva({
                      pin_direction: header.column.getIsPinned(),
                      pin_last: header.column.getIsLastColumn(
                        header.column.getIsPinned(),
                      ),
                    }),
                    header.column.columnDef.meta?.className?.header,
                  )}
                  style={{ ...getCommonPinningStyles(header.column) }}
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex w-full items-center justify-between gap-2 whitespace-nowrap">
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
                            data-sorted={Boolean(header.column.getIsSorted())}
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
  );
};

const DataTableBody: FunctionComponent = () => {
  const { table, expandableColumns, loading, emptyState } =
    useContext(DataTableContext);

  if (!table)
    throw new Error("Table instance failed to initialize. Please check");

  return (
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
                return (
                  <TableCell
                    id={cell.id}
                    key={cell.id}
                    data-expanded={expandableColumns[cell.column.id]}
                    data-pinned={cell.column.getIsPinned()}
                    className={clx(
                      cell_cva(),
                      pin_cva({
                        pin_direction: cell.column.getIsPinned(),
                        pin_last: cell.column.getIsLastColumn(
                          cell.column.getIsPinned(),
                        ),
                      }),
                      cell.column.columnDef.meta?.className?.cell,
                    )}
                    style={{ ...getCommonPinningStyles(cell.column) }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
  );
};

const DataTableFooter: FunctionComponent = () => {
  const { table, expandableColumns } = useContext(DataTableContext);

  if (!table) return null;

  const footers = table
    .getFooterGroups()
    .map((group) =>
      group.headers.map((header) => header.column.columnDef.footer),
    )
    .flat()
    .filter(Boolean);

  if (footers.length === 0) return;

  return (
    <TableFooter>
      {table.getFooterGroups().map((footerGroup) => (
        <TableRow key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <TableCell
              key={header.id}
              colSpan={header.colSpan}
              data-expanded={expandableColumns[header.column.id]}
              data-pinned={header.column.getIsPinned()}
              className={clx(
                cell_cva(),
                pin_cva({
                  pin_direction: header.column.getIsPinned(),
                  pin_last: header.column.getIsLastColumn(
                    header.column.getIsPinned(),
                  ),
                }),
                header.column.columnDef.meta?.className?.cell,
              )}
              style={{ ...getCommonPinningStyles(header.column) }}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.footer,
                    header.getContext(),
                  )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableFooter>
  );
};

const CheckboxColumn = <TData extends Record<string, any>>() => {
  const columnHelper = createColumnHelper<TData>();
  return columnHelper.display({
    id: "_checkbox",
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

const RadioColumn = <TData extends Record<string, any>>() => {
  const columnHelper = createColumnHelper<TData>();
  return columnHelper.display({
    id: "_radio",
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
    cell: ({ row }) => (
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

const ExpandCell = <TData extends Record<string, any>>(
  { row, getValue }: CellContext<TData, unknown>,
  cell?: ReactNode,
) => {
  const useDefault = !cell || JSON.stringify(cell) === JSON.stringify({});
  return (
    <div
      className="flex gap-1"
      style={{ paddingLeft: `calc(${row.depth}rem + 4px)` }}
    >
      {row.getCanExpand() && (
        <Button
          size="small"
          variant="default-ghost"
          onClick={row.getToggleExpandedHandler()}
          data-expanded={row.getIsExpanded()}
        >
          <ButtonIcon
            data-expanded={row.getIsExpanded()}
            className="transform transition-transform data-[expanded=true]:rotate-90"
          >
            <ChevronRightIcon />
          </ButtonIcon>
        </Button>
      )}
      {useDefault ? (getValue() as string) : cell}
    </div>
  );
};

const getCommonPinningStyles = <TData extends Record<string, any>>(
  column: Column<TData>,
): CSSProperties => {
  const isPinned = column.getIsPinned();
  return {
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    width: isPinned ? column.getSize() : undefined,
  };
};

/**
 * Reserved columns for DataTable
 */
const Column = {
  Checkbox: CheckboxColumn,
  Radio: RadioColumn,
};

/**
 * Reserved cells for DataTable
 */
const Cell = {
  Expand: ExpandCell,
};

const DataTable = <TData extends Record<string, any>>(
  props: DataTableProps<TData>,
) => {
  return (
    <DataTableProvider<TData> {...props}>
      <DataTableHeader />
      <DataTableBody />
      <DataTableFooter />
    </DataTableProvider>
  );
};

export { DataTable, Cell, type ColumnDef };
