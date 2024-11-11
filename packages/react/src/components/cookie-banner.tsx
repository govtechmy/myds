import React, { forwardRef, useState } from "react";
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
  title?: string;
  description?: string;
  onOpenChange?: (open: boolean) => void;
  onClose?: (preferences: PreferencesProps) => void;
  onAcceptAll?: (preferences: PreferencesProps) => void;
  onRejectAll?: (preferences: PreferencesProps) => void;
  onSavePreferences?: (preferences: PreferencesProps) => void;
  className: string;
}
type CookieBannerRef = React.ComponentRef<typeof DialogContent>;
interface PreferencesProps {
  necessary: boolean;
  analytics: boolean;
  performance: boolean;
}

/**
 * CookieBanner component description.
 * @component
 * @example
 * <CookieBanner propName="value" />
 */
const CookieBanner = forwardRef<CookieBannerRef, CookieBannerProps>(
  (
    {
      open = false,
      title = "Customise Cookie Preferences",
      description = "This website uses cookies to improve user experience. We need your consent to use some of the cookies.",
      className,
      onOpenChange,
      onClose,
      onAcceptAll,
      onRejectAll,
      onSavePreferences,
    },
    ref,
  ) => {
    const [showCustomize, setShowCustomize] = useState(false);
    const [preferences, setPreferences] = useState({
      necessary: true,
      analytics: true,
      performance: true,
    });

    const handleOpenChange = (open: boolean) => {
      onOpenChange?.(open);
      if (!open) {
        onClose?.(preferences);
        setShowCustomize(false);
      }
    };

    const handleAcceptAll = () => {
      const preferences = {
        necessary: true,
        analytics: true,
        performance: true,
      };
      onAcceptAll?.(preferences);
      handleOpenChange(false);
    };

    const handleRejectAll = () => {
      const preferences = {
        necessary: true,
        analytics: false,
        performance: false,
      };
      onRejectAll?.(preferences);
      handleOpenChange(false);
    };

    const handleSavePreferences = () => {
      onSavePreferences?.(preferences);
      handleOpenChange(false);
    };
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className={clx(
            "bg-bg-white bottom-[18px] top-auto w-[calc(100%-36px)] translate-y-0 rounded-lg p-[18px] sm:bottom-[24px] sm:left-[24px] sm:max-w-[502px] sm:translate-x-0 sm:p-6",
            className,
          )}
          ref={ref}
        >
          <DialogHeader className="w-full space-y-0 p-0 pb-1">
            <div className="mb-1 flex flex-row justify-between">
              <DialogTitle className="text-body-md pb-1">{title}</DialogTitle>
              <DialogClose
                className={clx(
                  button_cva({ variant: "default-ghost", size: "small" }),
                  "size-[1.25rem]",
                  "grid place-content-center",
                  "text-txt-black-900",
                  "disabled:pointer-events-none",
                  "flex-shrink-0",
                )}
              >
                <CrossIcon className="stroke-current" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {showCustomize ? (
            <>
              <div className="flex flex-col gap-2 py-3">
                <div className="flex flex-row gap-2.5">
                  <Checkbox
                    id="necessary"
                    checked={true}
                    className="mt-0.5 flex-shrink-0"
                    disabled
                  />
                  <div className="flex flex-col justify-start gap-1">
                    <label
                      htmlFor="necessary"
                      className="text-txt-black-900 text-body-sm font-semibold"
                    >
                      Necessary
                    </label>
                    <p className="text-txt-black-500 text-body-sm">
                      Enable essential site features like secure log-ins and
                      cookies consent settings. We do not store personal data.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2.5">
                  <Checkbox
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked: boolean) => {
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: checked,
                      }));
                    }}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="analytics"
                      className="text-txt-black-900 text-body-sm font-semibold"
                    >
                      Analytics
                    </label>
                    <p className="text-txt-black-500 text-body-sm">
                      Track metrics like visitor count, bounce rate, and traffic
                      sources.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2.5">
                  <Checkbox
                    id="performance"
                    checked={preferences.performance}
                    onCheckedChange={(checked: boolean) => {
                      setPreferences((prev) => ({
                        ...prev,
                        performance: checked,
                      }));
                    }}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="performance"
                      className="text-txt-black-900 text-body-sm font-semibold"
                    >
                      Performance
                    </label>
                    <p className="text-txt-black-500 text-body-sm">
                      Help analyze key website metrics, improving the user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter
                fillWidth={false}
                className="flex-col justify-start gap-2 p-0 pt-4 sm:flex-row"
              >
                <Button
                  variant="primary-fill"
                  size="medium"
                  onClick={handleSavePreferences}
                  className="w-full justify-center sm:w-auto"
                >
                  Accept All
                </Button>
                <Button
                  variant="primary-fill"
                  size="medium"
                  onClick={handleRejectAll}
                  className="w-full justify-center sm:w-auto"
                >
                  Reject All
                </Button>
              </DialogFooter>
            </>
          ) : (
            <DialogFooter
              fillWidth={false}
              className="flex-col justify-start gap-[0.5rem] p-0 pt-3 sm:flex-row"
            >
              <Button
                variant="primary-fill"
                size="medium"
                onClick={handleAcceptAll}
                className="w-full justify-center sm:w-auto"
              >
                Accept All
              </Button>
              <Button
                variant="primary-fill"
                size="medium"
                onClick={handleRejectAll}
                className="w-full justify-center sm:w-auto"
              >
                Reject All
              </Button>
              <Button
                variant="primary-outline"
                size="medium"
                onClick={() => setShowCustomize(!showCustomize)}
                className="w-full justify-center sm:w-auto"
              >
                Customize
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  },
);

export { CookieBanner };
