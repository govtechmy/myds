import React, {
  FunctionComponent,
  ComponentProps,
  useContext,
  forwardRef,
  useState,
  useEffect,
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
  onQueryChange: (query: string) => void;
  isDropdownOpen: boolean;
};

const SearchBarContext = React.createContext<Context>({
  size: DEFAULT_SIZE,
  onQueryChange: () => {},
  isDropdownOpen: false,
});

interface SearchBarProps extends ComponentProps<typeof Command> {
  size?: SearchBarSize;
}

/**
 * Uses cmdk's Command API.
 * @see https://github.com/pacocoursey/cmdk#command-cmdk-root
 */
const SearchBar: FunctionComponent<SearchBarProps> = forwardRef(
  (
    { children, className, size = DEFAULT_SIZE, onFocus, onBlur, ...props },
    ref,
  ) => {
    const [hasFocus, setHasFocus] = useState(false);
    const [query, setQuery] = useState("");
    const isDropdownOpen = query.length > 0 && hasFocus;

    return (
      <SearchBarContext.Provider
        value={{ size, isDropdownOpen, onQueryChange: setQuery }}
      >
        <Command
          ref={ref}
          className={clx("relative", className)}
          shouldFilter={false}
          onFocus={(e) => {
            onFocus?.(e);
            if (!e.isDefaultPrevented()) {
              setHasFocus(true);
            }
          }}
          onBlur={(e) => {
            onBlur?.(e);
            if (!e.isDefaultPrevented()) {
              const blurredByChild = e.currentTarget.contains(e.relatedTarget);
              if (blurredByChild) return;
              setHasFocus(false);
            }
          }}
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
    "flex items-center gap-1 bg-bg-white border border-otl-gray-200 shadow-button",
    "has-[input:focus]:ring has-[input:focus]:ring-otl-primary-200 has-[input:focus]:border-otl-primary-300",
  ],
  {
    variants: {
      size: {
        small: "px-[10px] py-[3px] rounded-sm text-sm",
        medium: "px-[12px] py-[7px] rounded-md text-md",
        large: "px-[18px] py-[6px] rounded-full text-md",
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
> = forwardRef(({ className, value, onValueChange, ...props }, ref) => {
  const { onQueryChange } = useContext(SearchBarContext);

  useEffect(() => {
    onQueryChange(value || "");
  }, [value]);

  return (
    <Command.Input
      ref={ref}
      className={clx(
        "text-txt-black-900 placeholder:text-txt-black-500 flex-1 bg-transparent focus:outline-none",
        className,
      )}
      value={value}
      onValueChange={(value) => {
        onQueryChange(value);
        onValueChange?.(value);
      }}
      {...props}
    />
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
export const SearchBarResults: FunctionComponent<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  const { size, isDropdownOpen } = useContext(SearchBarContext);
  return (
    <div
      className={clx(
        search_bar_results_dropdown_cva({ size, className }),
        !isDropdownOpen && "hidden",
      )}
      {...props}
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
        "[&_[cmdk-group-heading]]:text-txt-black-500 [&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:ml-2 [&_[cmdk-group-heading]]:font-medium",
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
        "data-[selected=true]:bg-bg-washed text-txt-black-900 flex cursor-pointer items-center gap-2 rounded px-2 py-1",
        className,
      )}
      {...props}
    />
  );
};

export { SearchBar };
