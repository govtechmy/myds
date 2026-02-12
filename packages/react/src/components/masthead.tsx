import {
  ComponentProps,
  FunctionComponent,
  ReactNode,
  MouseEvent,
} from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "../icons/chevron-down";
import { MalaysiaFlagIcon } from "../icons/malaysia-flag";
import { clx } from "../utils";
import { Slot } from "@radix-ui/react-slot";

const Masthead: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     const details = document.getElementById(
  //       "masthead",
  //     ) as HTMLDetailsElement | null;

  //     if (
  //       event.altKey &&
  //       (event.metaKey || event.ctrlKey) &&
  //       event.key === "Enter"
  //     ) {
  //       event.preventDefault();
  //       if (details) {
  //         details.open = !details.open;
  //       }
  //     }

  //     if ((event.metaKey || event.ctrlKey) && event.key === "k") {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => document.removeEventListener("keydown", handleKeyDown);
  // }, []);

  return (
    <Collapsible>
      <div
        id="masthead"
        className={clx("bg-bg-washed print:hidden", className)}
        data-nosnippet
        {...props}
      >
        <div className="mx-auto grid w-full max-w-screen-xl outline-none transition-[grid-template-rows] duration-500 print:hidden">
          {children}
        </div>
      </div>
    </Collapsible>
  );
};

Masthead.displayName = "Masthead";

const MastheadHeader: FunctionComponent<ComponentProps<"div">> = ({
  children,
  ...props
}) => {
  return (
    <div
      className="px-4.5 flex items-center gap-2 overflow-x-hidden py-2 outline-none sm:py-1 md:px-6"
      {...props}
    >
      <MalaysiaFlagIcon className="inline-block aspect-auto w-fit shrink-0" />
      <div className="text-txt-black-700 text-body-sm flex w-full items-center justify-between truncate sm:justify-start">
        {children}
      </div>
    </div>
  );
};

MastheadHeader.displayName = "MastheadHeader";

const MastheadTitle: FunctionComponent<ComponentProps<"p">> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={clx(
        "text-txt-black-700 text-body-sm truncate sm:max-w-full sm:flex-grow-0",
        className,
      )}
      {...props}
    />
  );
};

MastheadTitle.displayName = "MastheadTitle";

const MastheadTrigger: FunctionComponent<ComponentProps<"button">> = ({
  children,
  onClick,
  ...props
}) => {
  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event);
  };

  return (
    <CollapsibleTrigger
      className="text-txt-primary focus:ring-fr-primary bg-otl-gray-200 group flex items-center gap-0.5 rounded-md p-1 px-1 focus:outline-none focus:ring focus:ring-inset sm:bg-transparent sm:pl-1.5 xl:rounded-sm"
      aria-label="Toggle masthead"
      tabIndex={0}
      onClick={handleToggle}
      {...props}
    >
      <span className="text-txt-primary hidden select-none tracking-[-0.01em] sm:block">
        {children}
      </span>
      <ChevronDownIcon className="size-4 transform transition-transform group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
  );
};

MastheadTrigger.displayName = "MastheadTrigger";

const MastheadContent: FunctionComponent<
  ComponentProps<typeof CollapsibleContent>
> = ({ children, className, ...props }) => {
  return (
    <CollapsibleContent
      className={clx(
        "data-[state=open]:animate-collapsible-slide-down data-[state=closed]:animate-collapsible-slide-up overflow-hidden",
        "motion-reduce:animate-none",
        className,
      )}
      {...props}
    >
      <div className="px-4.5 gap-4.5 flex flex-col pb-6 pt-3 sm:grid-cols-2 sm:flex-row sm:pb-8 sm:pt-6 md:px-6">
        {children}
      </div>
    </CollapsibleContent>
  );
};

MastheadContent.displayName = "MastheadContent";

interface MastheadSectionProps extends ComponentProps<"div"> {
  icon: ReactNode;
  title: string;
}

const MastheadSection: FunctionComponent<MastheadSectionProps> = ({
  icon,
  children,
  title,
  className,
  ...props
}) => {
  return (
    <div className={clx("flex w-full gap-3", className)} {...props}>
      <Slot className="text-txt-black-500 size-6 shrink-0">{icon}</Slot>
      <div className="space-y-1.5">
        <p className="text-txt-black-900 text-body-sm sm:text-body-md font-medium">
          {title}
        </p>
        <p className="text-txt-black-700 text-body-sm max-w-[50ch] text-balance">
          {children}
        </p>
      </div>
    </div>
  );
};

MastheadSection.displayName = "MastheadSection";

// Exports
export {
  Masthead,
  MastheadHeader,
  MastheadTitle,
  MastheadTrigger,
  MastheadContent,
  MastheadSection,
};
