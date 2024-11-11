import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { CookieBanner } from "@myds/react/cookie-banner";
import { useState } from "react";
import { Button } from "@myds/react/button";

const CookieBannerDemo = (args: React.ComponentProps<typeof CookieBanner>) => {
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
};
const meta = {
  title: "@myds/React/CookiesBanner",
  component: CookieBannerDemo,
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
      description: "Callback when banner visibility changes",
      table: {
        type: { summary: "function" },
      },
    },
    onClose: {
      action: "onClose",
      description: "Callback when banner is closed",
      table: {
        type: { summary: "function" },
      },
    },
    onAcceptAll: {
      action: "onAcceptAll",
      description: "Callback when all cookies are accepted",
      table: {
        type: { summary: "function" },
      },
    },
    onRejectAll: {
      action: "onRejectAll",
      description: "Callback when non-essential cookies are rejected",
      table: {
        type: { summary: "function" },
      },
    },
    onSavePreferences: {
      action: "onSavePreferences",
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

export const Default: Story = createStory({});
// export const DesktopDark: Story = createStory({ className: "dark" }, "dark");
