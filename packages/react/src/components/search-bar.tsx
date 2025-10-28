import React, {
  FunctionComponent,
  ComponentProps,
  useContext,
  forwardRef,
} from "react";
import { Command } from "cmdk";
import { Button, ButtonProps } from "./button";
import { CrossIcon, SearchIcon } from "../icons";
import { clx } from "../utils";
import { cva } from "class-variance-authority";

type SearchBarSize = "small" | "medium" | "large";
const DEFAULT_SIZE: SearchBarSize = "medium";

type Context = {
  size: SearchBarSize;
};

const SearchBarContext = React.createContext<Context>({
  size: DEFAULT_SIZE,
});

interface SearchBarProps extends ComponentProps<typeof Command> {
  size?: SearchBarSize;
  splwpkSearchFunction?: boolean;
  splwpkAdvancedSearchFunction?: boolean;
}

/**
 * Uses cmdk's Command API.
 * @see https://github.com/pacocoursey/cmdk#command-cmdk-root
 */
const SearchBar: FunctionComponent<SearchBarProps> = forwardRef(
  (
    {
      children,
      className,
      size = DEFAULT_SIZE,
      splwpkSearchFunction = false,
      splwpkAdvancedSearchFunction = false,
      ...props
    },
    ref,
  ) => {
    return (
      <SearchBarContext.Provider value={{ size }}>
        <Command
          ref={ref}
          className={clx("relative z-0", className)}
          shouldFilter={false}
          {...(splwpkSearchFunction
            ? { "splwpk-search-function": "splwpk-search-function" }
            : {})}
          {...(splwpkAdvancedSearchFunction
            ? {
                "splwpk-advanced-search-function":
                  "splwpk-advanced-search-function",
              }
            : {})}
          {...props}
        >
          {children}
        </Command>
      </SearchBarContext.Provider>
    );
  },
);

const search_bar_input_container_cva = cva(
  [
    "flex items-center bg-bg-white border border-otl-gray-200 shadow-button",
    "has-[input:focus]:ring has-[input:focus]:ring-otl-primary-200 has-[input:focus]:border-otl-primary-300",
  ],
  {
    variants: {
      size: {
        small: "pl-[10px] pr-2 py-[6px] gap-2 rounded-sm text-sm",
        medium: "px-[12px] pr-2.5 py-[7px] gap-2 rounded-md text-md",
        large: "pl-[18px] pr-1.5 py-[6px] gap-2.5 rounded-full text-md",
      },
    },
    defaultVariants: {
      size: DEFAULT_SIZE,
    },
  },
);
export const SearchBarInputContainer: FunctionComponent<
  ComponentProps<"div">
> = ({ className, ...props }) => {
  const { size } = useContext(SearchBarContext);
  return (
    <div
      className={search_bar_input_container_cva({ size, className })}
      {...props}
    />
  );
};

/**
 * Uses cmdk's Command.Input API.
 * @see https://github.com/pacocoursey/cmdk#input-cmdk-input
 */
export const SearchBarInput: FunctionComponent<
  ComponentProps<typeof Command.Input>
> = forwardRef(({ className, ...props }, ref) => {
  return (
    <Command.Input
      ref={ref}
      className={clx(
        "text-txt-black-900 placeholder:text-txt-black-500 flex-1 bg-transparent focus:outline-none",
        className,
      )}
      asChild
      {...props}
    >
      <input
        aria-controls="search-input"
        // The hardcoded aria-controls here is a temporary fix such that it matches the id of SearchBarResults. It is related to this error (https://github.com/dequelabs/axe-core/issues/4172)
      />
    </Command.Input>
  );
});

export const SearchBarSearchButton: FunctionComponent<ButtonProps> = ({
  className,
  ...props
}) => {
  const { size } = useContext(SearchBarContext);
  if (size === "large") {
    return (
      <Button
        className={clx(
          "border-primary-600 from-primary-400 to-primary-600 rounded-full border bg-gradient-to-b p-1",
          className,
        )}
        {...props}
      >
        <SearchIcon className="text-white" />
      </Button>
    );
  }
  return (
    <Button
      variant="default-ghost"
      className={clx("p-0", className)}
      {...props}
    >
      <SearchIcon className="text-txt-black-500" />
    </Button>
  );
};

export const SearchBarClearButton: FunctionComponent<ButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <Button
      variant="default-ghost"
      className={clx("p-0", className)}
      {...props}
    >
      <CrossIcon className="text-txt-black-500" />
    </Button>
  );
};

export const SearchBarHint: FunctionComponent<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={clx(
        "text-txt-black-500 flex items-center gap-1 text-sm",
        className,
      )}
      {...props}
    />
  );
};

const search_bar_results_dropdown_cva = cva(
  [
    "-z-10 bg-bg-white absolute w-full border border-t-0 border-otl-gray-200 shadow px-[6px] py-[8px] shadow-context-menu",
    "before:bg-bg-white before:-left-px before:-right-px before:-top-4 before:border-x before:border-otl-gray-200  before:h-4 before:absolute",
  ],
  {
    variants: {
      size: {
        small: "rounded-b-sm",
        medium: "rounded-b-md",
        large: "rounded-b-2xl",
      },
    },
    defaultVariants: {
      size: DEFAULT_SIZE,
    },
  },
);
export const SearchBarResults: FunctionComponent<
  ComponentProps<"div"> & {
    open: boolean;
  }
> = ({ className, open, ...props }) => {
  const { size } = useContext(SearchBarContext);
  return (
    <div
      className={clx(
        search_bar_results_dropdown_cva({ size, className }),
        !open && "hidden",
      )}
      // The hardcoded id here is a temporary fix such that it matches the value of aria-controls props of SearchBarInput. It is related to this error (https://github.com/dequelabs/axe-core/issues/4172)
      {...props}
      id="search-input"
    />
  );
};

/**
 * Uses cmdk's Command.List API.
 * @see https://github.com/pacocoursey/cmdk#list-cmdk-list
 */
export const SearchBarResultsList: FunctionComponent<
  ComponentProps<typeof Command.List>
> = ({ children, ...props }) => {
  return (
    <Command.List {...props}>
      {/* We include a hidden item to prevent cmdk from focusing on the first item automatically. */}
      <Command.Item className="hidden">--</Command.Item>
      {children}
    </Command.List>
  );
};

/**
 * Uses cmdk's Command.Group API.
 * @see https://github.com/pacocoursey/cmdk#group-cmdk-group-hidden
 */
export const SearchBarResultsGroup: FunctionComponent<
  ComponentProps<typeof Command.Group>
> = ({ className, ...props }) => {
  return (
    <Command.Group
      className={clx(
        "my-2 text-sm first:mt-0 last:mt-0",
        "[&_[cmdk-group-heading]]:text-txt-black-500 [&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:ml-3 [&_[cmdk-group-heading]]:font-medium",
        className,
      )}
      {...props}
    />
  );
};

/**
 * Uses cmdk's Command.Item API.
 * @see https://github.com/pacocoursey/cmdk#item-cmdk-item-data-disabled-data-selected
 */
export const SearchBarResultsItem: FunctionComponent<
  ComponentProps<typeof Command.Item>
> = ({ className, ...props }) => {
  return (
    <Command.Item
      className={clx(
        "data-[selected=true]:bg-bg-washed text-txt-black-900 flex cursor-pointer items-center gap-2 rounded px-3 py-2",
        className,
      )}
      {...props}
    />
  );
};

export { SearchBar };
