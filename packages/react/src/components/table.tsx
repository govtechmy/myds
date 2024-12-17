import { QuestionCircleIcon } from "../icons";
import { clx } from "../utils";
import { forwardRef, ForwardRefExoticComponent, ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const Table: ForwardRefExoticComponent<ComponentProps<"table">> = forwardRef(
  ({ className, ...props }, ref) => (
    <div className={clx("relative w-full overflow-auto", className)}>
      <table
        ref={ref}
        className="w-full caption-bottom border-separate border-spacing-0 text-sm"
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader: ForwardRefExoticComponent<ComponentProps<"thead">> =
  forwardRef(({ className, ...props }, ref) => (
    <thead ref={ref} className={clx("sticky top-0", className)} {...props} />
  ));
TableHeader.displayName = "TableHeader";

const TableBody: ForwardRefExoticComponent<ComponentProps<"tbody">> =
  forwardRef(({ className, ...props }, ref) => (
    <tbody ref={ref} className={clx(className)} {...props} />
  ));
TableBody.displayName = "TableBody";

const TableFooter: ForwardRefExoticComponent<ComponentProps<"tfoot">> =
  forwardRef(({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={clx("border-t font-medium", className)}
      {...props}
    />
  ));
TableFooter.displayName = "TableFooter";

const TableRow: ForwardRefExoticComponent<ComponentProps<"tr">> = forwardRef(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={clx(
        "*:border-otl-gray-200 *:border-b [&_th]:first:border-t-2 [&_th]:last:border-b-2 [&_th]:only:border-t-0",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead: ForwardRefExoticComponent<ComponentProps<"th">> = forwardRef(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={clx(
        "text-txt-black-500 min-h-[30px] py-3 pr-3 text-left align-middle text-xs font-medium",
        "[&:has([role=checkbox])]:w-8 [&:has([role=checkbox])]:pl-1",
        "[&:has([role=radio])]:w-8 [&:has([role=radio])]:pl-1",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell: ForwardRefExoticComponent<ComponentProps<"td">> = forwardRef(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      role="gridcell"
      tabIndex={-1}
      className={clx(
        "border-otl-gray-200 text-black-700 border-b py-1.5 pr-3 align-middle text-sm leading-[33.11px]",
        "focus:outline-primary-600/20 rounded-[1px] focus:z-20 focus:outline-[3px] focus:outline-offset-0",
        "[&:has([role=checkbox])]:w-8 [&:has([role=checkbox])]:pl-1",
        "[&:has([role=radio])]:w-8 [&:has([role=radio])]:pl-1",
        className,
      )}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption: ForwardRefExoticComponent<ComponentProps<"caption">> =
  forwardRef(({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={clx("text-txt-black-500 mt-4 text-sm", className)}
      {...props}
    />
  ));
TableCaption.displayName = "TableCaption";

const TableTooltip: ForwardRefExoticComponent<ComponentProps<typeof Tooltip>> =
  forwardRef(({ children, ...props }, ref) => {
    return (
      <Tooltip {...props}>
        <TooltipTrigger>
          <QuestionCircleIcon className="text-txt-black-500 size-4 cursor-help" />
        </TooltipTrigger>
        <TooltipContent side="top" align="center">
          {children}
        </TooltipContent>
      </Tooltip>
    );
  });
TableTooltip.displayName = "TableTooltip";

const TableSkeleton: ForwardRefExoticComponent<ComponentProps<"div">> =
  forwardRef(({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="animate-shimmer direction-reverse from-bg-black-100 via-bg-black-300 to-bg-black-100 min-h-3 w-full rounded-full bg-gradient-to-r bg-[length:200%_50%]"
        {...props}
      />
    );
  });

TableSkeleton.displayName = "TableSkeleton";

const TableEmpty: ForwardRefExoticComponent<ComponentProps<"td">> = forwardRef(
  ({ className, children, colSpan = 100, ...props }, ref) => {
    return (
      <TableCell
        ref={ref}
        colSpan={colSpan}
        className="text-txt-black-500 py-8 text-center"
        {...props}
      >
        {children || "No data available"}
      </TableCell>
    );
  },
);
TableEmpty.displayName = "TableEmpty";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableTooltip,
  TableSkeleton,
  TableEmpty,
};
