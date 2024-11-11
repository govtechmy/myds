import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { CookieBanner } from "@myds/react/cookie-banner";
import { useState } from "react";
import { Button } from "@myds/react/button";

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
 * ### Usage
 * ```tsx
 * import CookieBanner from "@myds/react/cookie-banner";
 *
 * const [open, setOpen] = useState(false);
 *
 * <CookieBanner
 *   open={open}
 *   onOpenChange={setOpen}
 *   onClose={() => setOpen(false)}
 * />
 * ```
 */

const meta = {
  title: "@myds/React/CookiesBanner",
  component: (args: React.ComponentProps<typeof CookieBanner>) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex flex-col items-start gap-4">
        <Button variant="primary-fill" onClick={() => setOpen(true)}>
          Open Cookie Settings
        </Button>
        <CookieBanner
          {...args}
          open={open}
          onOpenChange={setOpen}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls the visibility of the cookie banner",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    title: {
      control: "text",
      description: "The main heading text of the cookie banner",
      defaultValue: "Customise Cookie Preferences",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Customise Cookie Preferences" },
      },
    },
    description: {
      control: "text",
      description: "Explanatory text about cookie usage",
      defaultValue:
        "This website uses cookies to improve user experience. We need your consent to use some of the cookies.",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary:
            "This website uses cookies to improve user experience. We need your consent to use some of the cookies.",
        },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      control: { type: undefined }, // to remove setup controls link on hover in the storybook
      description: "Callback when banner visibility changes",
      table: {
        type: { summary: "function" },
      },
    },
    onClose: {
      action: "onClose",
      control: { type: undefined }, // to remove setup controls link on hover in the storybook
      description: "Callback when banner is closed",
      table: {
        type: { summary: "function" },
      },
    },
    onAcceptAll: {
      action: "onAcceptAll",
      control: { type: undefined }, // to remove setup controls link on hover in the storybook
      description: "Callback when all cookies are accepted",
      table: {
        type: { summary: "function" },
      },
    },
    onRejectAll: {
      action: "onRejectAll",
      control: { type: undefined }, // to remove setup controls link on hover in the storybook
      description: "Callback when non-essential cookies are rejected",
      table: {
        type: { summary: "function" },
      },
    },
    onSavePreferences: {
      action: "onSavePreferences",
      control: { type: undefined }, // to remove setup controls link on hover in the storybook
      description: "Callback when custom preferences are saved",
      table: {
        type: { summary: "function" },
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
