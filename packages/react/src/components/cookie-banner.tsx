import React, { forwardRef, FunctionComponent, useState } from "react";
import { Button, button_cva } from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Checkbox } from "./checkbox";
import { CrossIcon } from "../icons";
import { clx } from "../utils";

/**
 * Props for CookieBanner component.
 * @typedef CookieBannerProps
 * @property {type} propName - Description of propName
 */
interface CookieBannerProps {
  open?: boolean;
  title?: string;
  description?: string;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => {};
  onAcceptAll?: (preferences: PreferencesProps) => void;
  onRejectAll?: (preferences: PreferencesProps) => void;
  onSavePreferences?: (preferences: PreferencesProps) => void;
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
  ({
    open = true,
    title = "Customise Cookie Preferences",
    description = "This website uses cookies to improve user experience. We need your consent to use some of the cookies.",
    onOpenChange,
    onClose,
    onAcceptAll,
    onRejectAll,
    onSavePreferences,
  }) => {
    const [showCustomize, setShowCustomize] = useState(false);
    const [preferences, setPreferences] = useState({
      necessary: true,
      analytics: true,
      performance: true,
    });

    const handleOpenChange = (open: boolean) => {
      console.log("open");
      onOpenChange?.(open);
      if (!open) {
        // TODO: check if I have to pass onClose to the X button or not
        // TODO: remove console log
        console.log("close");
        onClose?.();
      }
    };

    const handleAcceptAll = () => {
      const preferences = {
        necessary: true,
        analytics: true,
        performance: true,
      };
      onAcceptAll?.(preferences);
    };

    const handleRejectAll = () => {
      const preferences = {
        necessary: true,
        analytics: false,
        performance: false,
      };
      onRejectAll?.(preferences);
    };
    return (
      <Dialog defaultOpen={true} onOpenChange={handleOpenChange}>
        {/* TODO: change position */}
        {/* TODO: check padding */}
        {/* TODO: provide open, onOpenChange, defaultOpen */}
        {/* TODO: check how to do open and onOpenChange in component testing */}
        {/* TODO: check alignment of checkbox */}
        {/* TODO: check button alignment */}
        {/* TODO: check if there is better way than copy from Dialog */}
        <DialogContent className="max-w-[502px] gap-1 p-6">
          <DialogHeader className="p-0">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <DialogClose
            className={clx(
              button_cva({ variant: "default-ghost", size: "small" }),
              "absolute right-4 top-4",
              "size-[2rem]",
              "grid place-content-center",
              "text-txt-black-900",
              "disabled:pointer-events-none",
            )}
          >
            <CrossIcon className="size-[20px] stroke-current" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {showCustomize ? (
            <>
              <div className="flex flex-col gap-2 py-3">
                <div className="flex flex-row gap-2.5">
                  <Checkbox
                    id="necessary"
                    checked={true}
                    disabled
                    className="mt-0.5 flex-shrink-0"
                  />
                  <div className="flex flex-col justify-start gap-1">
                    <label
                      htmlFor="necessary"
                      className="text-txt-black-900 text-body-sm leading-tight"
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
                      className="text-txt-black-900 text-body-sm"
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
                      className="text-txt-black-900 text-body-sm"
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
                className="justify-start p-0 pt-3"
              >
                <DialogClose asChild>
                  <Button
                    variant="primary-fill"
                    size="medium"
                    onClick={handleAcceptAll}
                  >
                    Accept All
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    variant="primary-fill"
                    size="medium"
                    onClick={handleRejectAll}
                  >
                    Reject All
                  </Button>
                </DialogClose>
              </DialogFooter>
            </>
          ) : (
            <DialogFooter
              fillWidth={false}
              className="justify-start gap-[0.5rem] px-0 py-0 pt-4"
            >
              <DialogClose asChild>
                <Button
                  variant="primary-fill"
                  size="medium"
                  onClick={handleAcceptAll}
                >
                  Accept All
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="primary-fill"
                  size="medium"
                  onClick={handleRejectAll}
                >
                  Reject All
                </Button>
              </DialogClose>
              <Button
                variant="primary-outline"
                size="medium"
                onClick={() => setShowCustomize(!showCustomize)}
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
