import React, { ComponentProps, FunctionComponent } from "react";
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

const SummaryListBody: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clx(
      "grid w-full grid-cols-[minmax(120px,_180px)_1fr_minmax(120px,_1fr)]",
      "text-sm font-medium",
      "grid-rows-auto min-h-[40px]",
      "relative",
      "[&>*:nth-child(n+1)]:border-otl-gray-200 [&>*:nth-child(n+1)]:border-b",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const SummaryListKey: FunctionComponent<ComponentProps<"dt">> = ({
  children,
  className,
  ...props
}) => (
  <dt className={clx("text-txt-black-500 py-3 pr-3", className)} {...props}>
    {children}
  </dt>
);

const SummaryListValue: FunctionComponent<ComponentProps<"dd">> = ({
  children,
  className,
  ...props
}) => (
  <dd className={clx("text-txt-black-900 py-3 pr-3", className)} {...props}>
    {children}
  </dd>
);

const SummaryListAction: FunctionComponent<ComponentProps<"dd">> = ({
  children,
  className,
  ...props
}) => (
  <dd
    className={clx("inline-flex justify-end py-2 pr-3", className)}
    {...props}
  >
    {children}
  </dd>
);
export {
  SummaryList,
  SummaryListHeader,
  SummaryListBody,
  SummaryListKey,
  SummaryListValue,
  SummaryListAction,
};
