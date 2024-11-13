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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Checkbox } from "./checkbox";
import { CrossIcon } from "../icons";
import { clx } from "../utils";

// TODO: refactor the comment as well
/**
 * Props for CookieBanner component.
 * @typedef CookieBannerProps
 * @property {boolean} open - Controls the visibility state of the cookie banner.
 * @property {string} title - The main heading text displayed at the top of the cookie banner. The template for the title should be in the form of "Cookies on {websiteName}.gov.my".
 * @property {string} description - The descriptive text explaining the purpose of cookies and data collection to users.
 * @property {function} onOpenChange - Callback function triggered when the banner's open state changes.
 * @property {function} onClose - Callback function triggered when the banner is closed.
 * @property {function} onAcceptAll - Callback function triggered when the user clicks Accept All button without customising the type of cookies to accept.
 * @property {function} onRejectAll - Callback function triggered when the user clicks Reject All button.
 * @property {function} onSavePreferences - Callback function triggered when the user clicks Accept All button after customising the type of cookies to accept.
 */
interface CookieBannerProps {
  open?: boolean;
  className?: string;
  children?: React.ReactNode;
}
type CookieBannerRef = React.ComponentRef<typeof DialogContent>;

// TODO: complete the description
/**
 * CookieBanner component description.
 * @component
 * @example
 * <CookieBanner propName="value" />
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
  children: (props: RenderProps) => React.ReactNode;
  className?: string;
};

const CookieBanner = forwardRef<CookieBannerRef, CookieBannerProps>(
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
const CookieBannerPreferences = ({
  children,
  className,
}: CookieBannerPreferencesProps) => {
  const context = useContext(CookieBannerContext);

  if (!context) {
    throw new Error("Must be used within CookieBanner");
  }

  if (!context.showPreferences) {
    return null;
  }

  return (
    <div className={clx("flex flex-col gap-2 py-3", className)}>{children}</div>
  );
};
const CookieBannerCustomiser = ({
  children,
  className,
}: CookieBannerCustomiserProps) => {
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

  return (
    // TODO: Check to see if className is required here.
    <div className={className}>
      {children({
        togglePreferences,
      })}
    </div>
  );
};

export {
  CookieBanner,
  CookieBannerHeader,
  CookieBannerFooter,
  CookieBannerTitle,
  CookieBannerClose,
  CookieBannerDescription,
  CookieBannerPreferences,
  CookieBannerCustomiser,
};
