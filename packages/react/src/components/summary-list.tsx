import { ComponentProps, FunctionComponent } from "react";
import { clx } from "../utils";

const SummaryList: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <div className={clx("space-y-6", className)} {...props}>
    {children}
  </div>
);

const SummaryListHeader: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <h1
    className={clx(
      "text-txt-black-900 text-xl font-semibold leading-[30px]",
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

const SummaryListBody: FunctionComponent<ComponentProps<"table">> = ({
  children,
  className,
  ...props
}) => (
  <table
    className={clx(
      "w-full text-sm font-medium",
      "min-h-[40px]",
      "relative",
      className,
    )}
    {...props}
  >
    <tbody>{children}</tbody>
  </table>
);

const SummaryListRow: FunctionComponent<ComponentProps<"tr">> = ({
  children,
  className,
  ...props
}) => (
  <tr className={clx("border-otl-gray-200 border-b", className)} {...props}>
    {children}
  </tr>
);

const SummaryListTerm: FunctionComponent<ComponentProps<"td">> = ({
  children,
  className,
  ...props
}) => (
  <td
    role="term"
    className={clx(
      "text-txt-black-500 flex min-w-[190px] items-start py-3 pr-3",
      className,
    )}
    {...props}
  >
    {children}
  </td>
);

const SummaryListDetail: FunctionComponent<ComponentProps<"td">> = ({
  children,
  className,
  ...props
}) => (
  <td
    role="definition"
    className={clx("text-txt-black-900 w-full py-3 pr-3", className)}
    {...props}
  >
    {children}
  </td>
);

const SummaryListAction: FunctionComponent<ComponentProps<"td">> = ({
  children,
  className,
  ...props
}) => (
  <td
    role="definition"
    className={clx("flex justify-end py-1.5 pr-3 text-right", className)}
    {...props}
  >
    {children}
  </td>
);

const SummaryListAddition: FunctionComponent<ComponentProps<"td">> = ({
  children,
  className,
  ...props
}) => (
  <td
    role="definition"
    className={clx("text-txt-black-900 min-w-36 py-2 pr-3", className)}
    {...props}
  >
    {children}
  </td>
);

export {
  SummaryList,
  SummaryListHeader,
  SummaryListBody,
  SummaryListRow,
  SummaryListTerm,
  SummaryListDetail,
  SummaryListAction,
  SummaryListAddition,
};
