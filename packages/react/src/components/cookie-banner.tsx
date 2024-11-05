import React, { forwardRef, FunctionComponent, useState } from "react";
import { Button } from "./button";
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
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent withCloseButton={true}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {showCustomize ? (
            <>
              <div className="flex flex-col space-y-2 py-3">
                <div className="flex flex-row space-x-2.5">
                  <Checkbox id="necessary" checked={true} disabled />
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="necessary"
                      className="text-txt-black-900 text-body-sm"
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
              <DialogFooter fillWidth={false}>
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
            <>
              <DialogFooter fillWidth={false}>
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
            </>
          )}
        </DialogContent>
      </Dialog>
    );
  },
);

export { CookieBanner };
