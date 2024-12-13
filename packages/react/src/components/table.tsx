import { QuestionCircleIcon } from "../icons";
import { clx } from "../utils";
import { forwardRef, ForwardRefExoticComponent, ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const Table: ForwardRefExoticComponent<ComponentProps<"table">> = forwardRef(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-x-auto">
      <table
        ref={ref}
        className={clx(
          "w-full caption-bottom border-separate border-spacing-0 text-sm",
          className,
        )}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader: ForwardRefExoticComponent<ComponentProps<"thead">> =
  forwardRef(({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={clx("[&_tr]:border-b-2", className)}
      {...props}
    />
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
    <tr ref={ref} className={clx("border-b", className)} {...props} />
  ),
);
TableRow.displayName = "TableRow";

const TableHead: ForwardRefExoticComponent<ComponentProps<"th">> = forwardRef(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={clx(
        "text-txt-black-500 border-otl-gray-200 h-[30px] border-b-2 pb-2 pr-3 text-left align-middle text-xs font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
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
      className={clx(
        "border-otl-gray-200 text-black-700 border-b py-4 pr-3 align-middle text-sm font-medium sm:py-3 [&>[role=checkbox]]:translate-y-[2px]",
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
};
