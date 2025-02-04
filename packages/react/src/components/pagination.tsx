import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  useContext,
} from "react";
import { clx } from "../utils";
import { OptionsIcon } from "../icons/options";
import { Button, ButtonIcon } from "./button";
import { ChevronLeftIcon } from "../icons/chevron-left";
import { ChevronRightIcon } from "../icons/chevron-right";
import { Slot } from "@radix-ui/react-slot";

/**
 * Props for Pagination component.
 * @typedef PaginatorProps
 * @property {number} page - The current page number.
 * @property {number} limit - The number of items per page
 * @property {number} count - The total number of items
 * @property {"basic" | "basic-alternate" | "number"}  type - The variation of the pagination
 * @property {function} onPageChange - function which tracks the page
 */
export interface PaginatorProps {
  page: number;
  limit: number;
  count: number;
  onPageChange: (page: number) => void;
  type: "simple" | "full" | "default";
}

const PaginationContext = createContext<
  PaginatorProps & {
    totalPages: number;
  }
>({
  page: 1,
  count: 0,
  limit: 6,
  totalPages: 0,
  type: "default",
  onPageChange: (page) => {},
});

interface PaginationRootProps extends ComponentProps<"nav">, PaginatorProps {}

/**
 * Component that allows users to navigate through a large set of content divided into discrete pages.
 * @component
 * @example
 * <Pagination propName="value" />
 */
const PaginationRoot: ForwardRefExoticComponent<PaginationRootProps> =
  forwardRef(
    (
      { count, limit, page, children, className, type, onPageChange, ...props },
      ref,
    ) => {
      const totalPages = Math.ceil(count / limit);
      return (
        <PaginationContext.Provider
          value={{ count, limit, page, totalPages, type, onPageChange }}
        >
          <nav
            ref={ref}
            role="navigation"
            aria-label="pagination"
            className={clx(
              "text-body-md flex w-full justify-center",
              className,
            )}
            {...props}
          >
            {children}
          </nav>
        </PaginationContext.Provider>
      );
    },
  );

PaginationRoot.displayName = "PaginationRoot";

const PaginationContent: ForwardRefExoticComponent<ComponentProps<"ul">> =
  forwardRef(({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={clx("flex flex-row items-center gap-4", className)}
      {...props}
    />
  ));
PaginationContent.displayName = "PaginationContent";

const PaginationItem: ForwardRefExoticComponent<ComponentProps<"li">> =
  forwardRef(({ className, ...props }, ref) => (
    <li ref={ref} className={clx("rounded-md", className)} {...props} />
  ));
PaginationItem.displayName = "PaginationItem";

const PaginationPrevious: ForwardRefExoticComponent<
  ComponentProps<"button"> & { asChild?: boolean }
> = forwardRef(({ asChild, children, ...props }, ref) => {
  const { page, onPageChange } = useContext(PaginationContext);
  const disabled = page <= 1;
  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  if (asChild)
    return (
      <Slot ref={ref} {...props}>
        {children}
      </Slot>
    );

  return (
    <Button
      ref={ref}
      variant={"default-outline"}
      size={"medium"}
      disabled={disabled}
      className={clx(disabled && "shadow-transparent")}
      onClick={handlePreviousPage}
      {...props}
    >
      <ButtonIcon>
        <ChevronLeftIcon />
      </ButtonIcon>
      {children}
    </Button>
  );
});

PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext: ForwardRefExoticComponent<
  ComponentProps<"button"> & { asChild?: boolean }
> = forwardRef(({ asChild, children, ...props }, ref) => {
  const { page, totalPages, onPageChange } = useContext(PaginationContext);
  const disabled = page === totalPages;
  const handleNextPage = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };
  if (asChild)
    return (
      <Slot ref={ref} {...props}>
        {children}
      </Slot>
    );

  return (
    <Button
      ref={ref}
      variant={"default-outline"}
      size={"medium"}
      disabled={disabled}
      className={clx(disabled && "shadow-transparent")}
      onClick={handleNextPage}
      {...props}
    >
      {children}
      <ButtonIcon>
        <ChevronRightIcon />
      </ButtonIcon>
    </Button>
  );
});

PaginationNext.displayName = "PaginationNext";

const PaginationNumber: ForwardRefExoticComponent<
  ComponentProps<"button"> & { number: number }
> = forwardRef(({ number, ...props }, ref) => {
  const { page, onPageChange } = useContext(PaginationContext);
  const isActive = page === number;
  const handleClickPage = () => {
    onPageChange(number);
  };
  return (
    <Button
      ref={ref}
      onClick={handleClickPage}
      variant={"default-ghost"}
      size={"medium"}
      className={clx(
        isActive && "bg-bg-washed-active",
        "h-10 w-10 items-center justify-center",
      )}
      {...props}
    >
      {number}
    </Button>
  );
});

PaginationNumber.displayName = "PaginationNumber";

const PaginationLabel: ForwardRefExoticComponent<
  ComponentProps<"p"> & { content?: ReactNode }
> = forwardRef(({ className, content, ...props }, ref) => {
  const { page, totalPages, type } = useContext(PaginationContext);
  return (
    <p ref={ref} className={clx("text-txt-black-700", className)} {...props}>
      {content ? content : type === "full" && `Page ${page} of ${totalPages}`}
    </p>
  );
});

PaginationLabel.displayName = "PaginationLabel";

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={clx("flex size-8 items-center justify-center", className)}
    {...props}
  >
    <OptionsIcon className="text-txt-black-700 size-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

interface PaginationProps extends ComponentProps<"nav">, PaginatorProps {
  maxDisplay?: number;
  next?: ReactNode;
  previous?: ReactNode;
  fullText?: string;
}

const Pagination: ForwardRefExoticComponent<PaginationProps> = forwardRef(
  (
    { type = "default", maxDisplay = 4, next, previous, fullText, ...props },
    ref,
  ) => {
    if (type === "simple") {
      return (
        <PaginationRoot ref={ref} type={type} {...props}>
          <PaginationContent>
            <PaginationItem>
              {previous || <PaginationPrevious>Previous</PaginationPrevious>}
            </PaginationItem>
            <PaginationItem>
              <PaginationLabel />
            </PaginationItem>
            <PaginationItem>
              {next || <PaginationNext>Next</PaginationNext>}
            </PaginationItem>
          </PaginationContent>
        </PaginationRoot>
      );
    }
    if (type === "full") {
      return (
        <PaginationRoot ref={ref} type={type} {...props}>
          <PaginationContent className="w-[512px]">
            <PaginationItem className="flex-1">
              <PaginationLabel content={fullText} />
            </PaginationItem>
            <PaginationItem>
              {previous || <PaginationPrevious>Previous</PaginationPrevious>}
            </PaginationItem>

            <PaginationItem>
              {next || <PaginationNext>Next</PaginationNext>}
            </PaginationItem>
          </PaginationContent>
        </PaginationRoot>
      );
    }

    const { count, limit, page } = props;
    const max = Math.ceil(count / limit);

    const getVisiblePageNumber = () => {
      if (max <= maxDisplay) return createRange(1, max);

      if (page <= maxDisplay - 1) {
        const ellipsis_start = maxDisplay;
        return [...createRange(1, ellipsis_start), "...", max];
      }

      if (page >= max - (maxDisplay - 1))
        return [1, "...", ...createRange(max - (maxDisplay - 1), max)];

      return [1, "...", ...createMiddlePages(), "...", max];
    };

    const createRange = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    };

    const createMiddlePages = () => {
      const mid_start = Math.max(2, page - 1);
      const mid_end = Math.min(page + 1, max - 1);
      return createRange(mid_start, mid_end);
    };

    return (
      <PaginationRoot ref={ref} type={type} {...props}>
        <PaginationContent>
          <PaginationItem>{previous || <PaginationPrevious />}</PaginationItem>
          {getVisiblePageNumber().map((page, index) => (
            <PaginationItem key={page}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                typeof page === "number" && <PaginationNumber number={page} />
              )}
            </PaginationItem>
          ))}
          <PaginationItem>{next || <PaginationNext />}</PaginationItem>
        </PaginationContent>
      </PaginationRoot>
    );
  },
);

export {
  PaginationRoot,
  PaginationContext,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationNumber,
  PaginationPrevious,
  Pagination,
};

export type { PaginationProps };
