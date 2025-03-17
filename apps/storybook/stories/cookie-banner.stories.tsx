import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  CookieBanner,
  CookieBannerClose,
  CookieBannerPreferencesTrigger,
  CookieBannerDescription,
  CookieBannerAction,
  CookieBannerPreferences,
  CookieBannerTitle,
} from "@govtechmy/myds-react/cookie-banner";
import { useEffect, useState } from "react";
import { Button } from "@govtechmy/myds-react/button";
import { Checkbox } from "@govtechmy/myds-react/checkbox";

/**
 * ### Overview
 * This is a cookie banner, your digital gatekeeper for user privacy! It presents cookie preferences in an accessible and
 * user-friendly interface. Use it to collect and manage user consent for various types of cookies on your website.
 *
 * > Laman sesawang penuh privasi,
 * > Pilihan cookie perlu dijaga,
 * > Terima semua atau pilih sendiri,
 * > Keselamatan data terpelihara.
 * > -- Claude
 *
 * ### Anatomy
 * ``` tsx
 * <CookieBanner>
 *   <CookieBannerTitle />
 *   <CookieBannerDescription />
 *   <CookieBannerPreferences />
 *   <CookieBannerAction>
 *     <CookieBannerPreferencesTrigger>
 *   </CookieBannerAction>
 * </CookieBanner>
 * ```
 * 
 
 */

const meta = {
  title: "@govtechmy/myds-react/CookieBanner",
  component: (args: React.ComponentProps<typeof CookieBanner>) => {
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
          <CookieBannerTitle>Cookies Preferences</CookieBannerTitle>
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
                  Help analyze key website metrics, improving the user
                  experience.
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
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    open: false,
    onOpenChange: () => {},
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls the visibility of the cookie banner (controlled)",
      defaultValue: false,
      table: {
        category: "CookieBanner",
      },
    },
    onOpenChange: {
      description:
        "Event listener for when the cookie banner is opened or closed (controlled)",
      action: "onOpenChange",
      control: undefined,
      table: {
        category: "CookieBanner",
      },
    },
  },
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the implementation of CookieBanner for desktop viewport in light mode.
 */

export const DesktopLight: Story = createStory({});

/**
 * This story represents the implementation of CookieBanner for desktop viewport in dark mode.
 */
export const DesktopDark: Story = createStory({ className: "dark" }, "dark");
