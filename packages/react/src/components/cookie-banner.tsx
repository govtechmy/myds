import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "./button";
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
import { Slot } from "@radix-ui/react-slot";

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
 * - CookieBannerHeader - Container for the banner title and close button
 * - CookieBannerTitle - The banner's title component
 * - CookieBannerDescription - Component for the banner's descriptive text
 * - CookieBannerClose - The close button component
 * - CookieBannerPreferences - Container for cookie preference options
 * - CookieBannerCustomiser - Component to trigger preference customization
 * - CookieBannerActions - Container for action buttons (Accept/Reject All)
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

type CookieBannerCustomiserProps = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

const CookieBanner = forwardRef<CookieBannerRef, CookieBannerProps>(
  ({ open = false, className, children, ...props }, ref) => {
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
            {...props}
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
  ...props
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
      {...props}
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
>(({ children, className, ...props }, ref) => {
  const context = useContext(CookieBannerContext);

  if (!context) throw new Error("Must be used within CookieBanner");

  if (!context.showPreferences) return null;

  return (
    <div
      ref={ref}
      className={clx("flex flex-col gap-2 py-3", className)}
      {...props}
    >
      {children}
    </div>
  );
});

const CookieBannerCustomiser = forwardRef<
  HTMLElement,
  CookieBannerCustomiserProps
>(({ children, className, asChild = false, ...props }, ref) => {
  const context = useContext(CookieBannerContext);
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

  const Comp = asChild ? Slot : Button;
  return (
    <Comp
      variant="primary-outline"
      size="medium"
      className={clx("w-full justify-center sm:w-auto", className)}
      onClick={togglePreferences}
      {...props}
    >
      {children}
    </Comp>
  );
});

CookieBanner.displayName = "CookieBanner";
CookieBannerCustomiser.displayName = "CookieBannerCustomiser";
CookieBannerFooter.displayName = "CookieBannerFooter";
CookieBannerDescription.displayName = "CookieBannerDescription";
CookieBannerClose.displayName = "CookieBannerClose";
CookieBannerPreferences.displayName = "CookieBannerPreferences";
CookieBannerTitle.displayName = "CookieBannerTitle";
CookieBannerHeader.displayName = "CookieBannerHeader";

export {
  CookieBanner,
  CookieBannerHeader,
  CookieBannerTitle,
  CookieBannerDescription,
  CookieBannerClose,
  CookieBannerPreferences,
  CookieBannerCustomiser,
  CookieBannerFooter,
};
