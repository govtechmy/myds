"use client";
import { useEffect, useState } from "react";
import {
  CookieBanner,
  CookieBannerClose,
  CookieBannerDescription,
  CookieBannerAction,
  CookieBannerPreferences,
  CookieBannerTitle,
  CookieBannerPreferencesTrigger,
} from "@govtechmy/myds-react/cookie-banner";
import { Button } from "@govtechmy/myds-react/button";
import { Checkbox } from "@govtechmy/myds-react/checkbox";

const CookiesBannerPreview = () => {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    performance: true,
  });

  // Reset preferences back to default when dialog closes
  useEffect(() => {
    if (!open) {
      setPreferences({
        necessary: true,
        analytics: true,
        performance: true,
      });
    }
  }, [open]);

  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="primary-fill" onClick={() => setOpen(true)}>
        Open Cookie Settings
      </Button>
      <CookieBanner open={open} onOpenChange={setOpen}>
        <CookieBannerTitle className="text-body-md pb-1">
          Cookie Preferences
        </CookieBannerTitle>
        <CookieBannerDescription>
          This website uses cookies to improve user experience. We need your
          consent to use some of the cookies.
        </CookieBannerDescription>

        <CookieBannerPreferences className="flex flex-col gap-2 py-3">
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
                Enable essential site features like secure log-ins and cookies
                consent settings. We do not store personal data.
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
                Help analyze key website metrics, improving the user experience.
              </p>
            </div>
          </div>
        </CookieBannerPreferences>

        <CookieBannerAction>
          <CookieBannerClose asChild>
            <Button
              variant="primary-fill"
              size="medium"
              onClick={() => alert("Accept all cookies.")}
              className="w-full justify-center sm:w-auto"
            >
              Accept All
            </Button>
          </CookieBannerClose>
          <CookieBannerClose asChild>
            <Button
              variant="primary-fill"
              size="medium"
              onClick={() => alert("Reject all cookies.")}
              className="w-full justify-center sm:w-auto"
            >
              Reject All
            </Button>
          </CookieBannerClose>

          <CookieBannerPreferencesTrigger>
            Customise
          </CookieBannerPreferencesTrigger>
        </CookieBannerAction>

        <CookieBannerAction preferences>
          <CookieBannerClose asChild>
            <Button
              variant="primary-fill"
              size="medium"
              onClick={() => alert("Accept saved preferences.")}
              className="w-full justify-center sm:w-auto"
            >
              Save preferences
            </Button>
          </CookieBannerClose>
          <CookieBannerClose asChild>
            <Button
              variant="primary-fill"
              size="medium"
              onClick={() => alert("Necessary cookies accepted.")}
              className="w-full justify-center sm:w-auto"
            >
              Accept necessary cookies
            </Button>
          </CookieBannerClose>
        </CookieBannerAction>
      </CookieBanner>
    </div>
  );
};

const CookiesPreferencesDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button variant="primary-fill" onClick={() => setOpen(true)}>
        Open Cookie Settings
      </Button>
      <CookieBanner open={open} onOpenChange={setOpen}>
        <CookieBannerTitle className="text-body-md pb-1">
          Cookie Preferences
        </CookieBannerTitle>
        <CookieBannerDescription>
          This website uses cookies to improve user experience. We need your
          consent to use some of the cookies.
        </CookieBannerDescription>

        <CookieBannerPreferences className="bg-bg-washed px-2 font-mono">
          Hello from MYDS!
        </CookieBannerPreferences>

        <CookieBannerAction>
          <CookieBannerClose asChild>
            <Button
              variant="primary-fill"
              size="medium"
              onClick={() => alert("Accept all cookies.")}
              className="w-full justify-center sm:w-auto"
            >
              Accept All
            </Button>
          </CookieBannerClose>
          <CookieBannerClose asChild>
            <Button
              variant="primary-fill"
              size="medium"
              onClick={() => alert("Reject all cookies.")}
              className="w-full justify-center sm:w-auto"
            >
              Reject All
            </Button>
          </CookieBannerClose>

          <CookieBannerPreferencesTrigger>
            Customise
          </CookieBannerPreferencesTrigger>
        </CookieBannerAction>

        <CookieBannerAction preferences>
          <CookieBannerPreferencesTrigger>Back</CookieBannerPreferencesTrigger>
          <CookieBannerClose asChild>
            <Button
              variant="primary-fill"
              size="medium"
              onClick={() => alert("Necessary cookies accepted.")}
              className="w-full justify-center sm:w-auto"
            >
              Accept necessary cookies
            </Button>
          </CookieBannerClose>
        </CookieBannerAction>
      </CookieBanner>
    </div>
  );
};

export { CookiesBannerPreview, CookiesPreferencesDemo };
