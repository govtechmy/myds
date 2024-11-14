import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, button_cva } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { CrossIcon } from "../icons";
import { clx } from "../utils";

interface CookieBannerProps {
  open?: boolean;
  className?: string;
  children?: React.ReactNode;
}
type CookieBannerRef = React.ComponentRef<typeof DialogContent>;

/**
 * Root component for the Cookie Banner compound component.
 * Provides context and base layout for all cookie banner subcomponents.
 * Must be used as the parent of all other CookieBanner.* components.
 *
 * @component
 * @example
 * <CookieBanner open={isOpen}>
 *   <CookieBanner.Header>
 *     <CookieBanner.Title>
 *       Cookies on example.gov.my
 *     </CookieBanner.Title>
 *     <CookieBanner.Close />
 *   </CookieBanner.Header>
 *
 *   <CookieBanner.Description>
 *     We use cookies to improve your experience.
 *   </CookieBanner.Description>
 *
 *   <CookieBanner.Preference className="flex flex-col gap-2 py-3">
 *     <div className="flex flex-row gap-2.5">
 *       <Checkbox
 *         id="necessary"
 *         checked={true}
 *         className="mt-0.5 flex-shrink-0"
 *         disabled
 *       />
 *       <div className="flex flex-col justify-start gap-1">
 *         <label
 *           htmlFor="necessary"
 *           className="text-txt-black-900 text-body-sm font-semibold"
 *         >
 *           Necessary
 *         </label>
 *         <p className="text-txt-black-500 text-body-sm">
 *           Enable essential site features like secure log-ins and cookies
 *           consent settings. We do not store personal data.
 *         </p>
 *       </div>
 *     </div>
 *   </CookieBanner.Preference>
 *
 *   <CookieBanner.Footer
 *     fillWidth={false}
 *     className="flex-col justify-start gap-[0.5rem] p-0 pt-3 sm:flex-row"
 *   >
 *     <Button
 *       variant="primary-fill"
 *       size="medium"
 *       onClick={handleAcceptAll}
 *       className="w-full justify-center sm:w-auto"
 *     >
 *       Accept All
 *     </Button>
 *     <CookieBanner.Customiser asChild>
 *       <Button
 *         variant="primary-outline"
 *         size="medium"
 *         className="w-full justify-center sm:w-auto"
 *       >
 *         Customize
 *       </Button>
 *     </CookieBanner.Customiser>
 *   </CookieBanner.Footer>
 * </CookieBanner>
 *
 * @typedef {Object} CookieBannerProps
 * @property {boolean} [open=false] - Controls the visibility state of the cookie banner
 * @property {string} [className] - Optional CSS class name for styling the banner container
 * @property {React.ReactNode} children - The subcomponents that make up the cookie banner's content
 * @property {React.Ref<HTMLDivElement>} [ref] - Optional ref that will be forwarded to the underlying DialogContent component
 *
 * @context CookieBannerContext
 * @property {boolean} showPreferences - Current state of preferences visibility
 * @property {function} setShowPreferences - Function to toggle preferences visibility
 *
 * @subcomponents
 * - CookieBanner.Header - Container for the banner title and close button
 * - CookieBanner.Title - The banner's title component
 * - CookieBanner.Description - Component for the banner's descriptive text
 * - CookieBanner.Close - The close button component
 * - CookieBanner.Preferences - Container for cookie preference options
 * - CookieBanner.Customiser - Component to trigger preference customization
 * - CookieBanner.Actions - Container for action buttons (Accept/Reject All)
 */

interface CookieBannerContextValue {
  showPreferences: boolean;
  setShowPreferences: (show: boolean) => void;
}

const CookieBannerContext = createContext<CookieBannerContextValue | undefined>(
  undefined,
);

interface CookieBannerPreferencesProps {
  children: React.ReactNode;
  className?: string;
}

type RenderProps = {
  togglePreferences: () => void;
};

type CookieBannerCustomiserProps = {
  children: React.ReactElement<ChildProps>;
  className?: string;
  asChild?: boolean;
};
interface ChildProps {
  // THe children of the CookieBannerCustomiser must has an onClick props
  onClick?: (e: React.MouseEvent) => void;
}

const CookieBannerRoot = forwardRef<CookieBannerRef, CookieBannerProps>(
  ({ open = false, className, children }, ref) => {
    const [showPreferences, setShowPreferences] = useState(false);
    // Reset showPreferences when dialog closes
    useEffect(() => {
      if (!open) {
        setShowPreferences(false);
      }
    }, [open]);

    return (
      <CookieBannerContext.Provider
        value={{ showPreferences, setShowPreferences }}
      >
        <Dialog open={open}>
          <DialogContent
            className={clx(
              "bg-bg-white bottom-[18px] top-auto w-[calc(100%-36px)] translate-y-0 rounded-lg p-[18px] sm:bottom-[24px] sm:left-[24px] sm:max-w-[502px] sm:translate-x-0 sm:p-6",
              className,
            )}
            ref={ref}
          >
            {children}
          </DialogContent>
        </Dialog>
      </CookieBannerContext.Provider>
    );
  },
);

const CookieBannerHeader = DialogHeader;
const CookieBannerTitle = DialogTitle;
const CookieBannerClose = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      variant={"default-ghost"}
      size={"small"}
      className={clx(
        "size-[1.25rem]",
        "grid place-content-center",
        "text-txt-black-900",
        "disabled:pointer-events-none",
        "flex-shrink-0",
        className,
      )}
    >
      <CrossIcon className="stroke-current" />
    </Button>
  );
};
const CookieBannerFooter = DialogFooter;
const CookieBannerDescription = DialogDescription;

const CookieBannerPreferences = forwardRef<
  HTMLDivElement,
  CookieBannerPreferencesProps
>(({ children, className }, ref) => {
  const context = useContext(CookieBannerContext);

  if (!context) {
    throw new Error("Must be used within CookieBanner");
  }

  if (!context.showPreferences) {
    return null;
  }

  return (
    <div ref={ref} className={clx("flex flex-col gap-2 py-3", className)}>
      {children}
    </div>
  );
});

const CookieBannerCustomiser = forwardRef<
  HTMLElement,
  CookieBannerCustomiserProps
>(({ children, className, asChild = false }, ref) => {
  const context = useContext(CookieBannerContext);
  console.log(context?.showPreferences);
  if (!context) {
    throw new Error("Must be used within CookieBanner");
  }

  const togglePreferences = () => {
    context.setShowPreferences(!context.showPreferences);
  };

  if (context.showPreferences) {
    // To hide the cutomizer buttons once clicked to reveal cookie preferences
    return null;
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ref,
      onClick: (e: React.MouseEvent) => {
        if (
          "onClick" in children.props &&
          typeof children.props.onClick === "function"
        ) {
          children.props.onClick(e);
        }
        togglePreferences();
      },
    });
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {React.cloneElement(children, {
        onClick: togglePreferences,
      })}
    </div>
  );
});

CookieBannerRoot.displayName = "CookieBannerRoot";
CookieBannerCustomiser.displayName = "CookieBannerCustomiser";
CookieBannerFooter.displayName = "CookieBannerFooter";
CookieBannerDescription.displayName = "CookieBannerDescription";
CookieBannerClose.displayName = "CookieBannerClose";
CookieBannerPreferences.displayName = "CookieBannerPreferences";
CookieBannerTitle.displayName = "CookieBannerTitle";
CookieBannerHeader.displayName = "CookieBannerHeader";

const CookieBanner = Object.assign(CookieBannerRoot, {
  Header: CookieBannerHeader,
  Title: CookieBannerTitle,
  Description: CookieBannerDescription,
  Close: CookieBannerClose,
  Preference: CookieBannerPreferences,
  Customiser: CookieBannerCustomiser,
  Footer: CookieBannerFooter,
});

export { CookieBanner };
