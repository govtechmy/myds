import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Masthead,
  OfficialIndicator,
  IdentificationToggle,
  OfficialInfo,
  SecureInfo,
} from "@myds/react/masthead";

/**
 * ### Overview
 * The Masthead component is a standardized header for Malaysian government websites.
 * It includes official website verification elements and security information to help
 * users identify legitimate government platforms.
 *
 * > Laman web kerajaan yang sah,
 * > Masthead menjadi penanda arah,
 * > Keselamatan terjamin sudah,
 * > Rakyat boleh berurusan dengan cerah.
 *
 * ### Usage
 * ```tsx
 * import { Masthead } from "@myds/react/masthead";
 *
 * // Basic usage
 * <Masthead />
 *
 * // With custom text
 * <Masthead
 *   officialText="Laman Web Rasmi Kerajaan"
 *   identifyText="Cara mengenal pasti laman web rasmi kerajaan"
 *   officialTitle="Platform Rasmi Kerajaan"
 *   domain=".gov.my"
 * />
 *
 * // Using individual components
 * import { OfficialInfo, SecureInfo } from "@myds/react/masthead";
 *
 * <OfficialInfo
 *   title="Platform Rasmi Kerajaan"
 *   description="Laman web rasmi kerajaan berakhir dengan"
 *   domain=".gov.my"
 * />
 * ```
 */
const meta = {
  title: "@myds/react/Masthead",
  component: Masthead,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A standardized header component for Malaysian government websites that helps users verify official platforms and maintain security awareness.",
      },
    },
  },
  argTypes: {
    officialText: {
      control: "text",
      description: "Text displayed next to the flag icon",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Official Malaysia Government Website" },
      },
    },
    identifyText: {
      control: "text",
      description: "Text for the identification toggle button",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "Here's how you know",
        },
      },
    },
    officialTitle: {
      control: "text",
      description: "Title for the official website information section",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "Official government websites end with .gov.my",
        },
      },
    },
    officialDescription: {
      control: "text",
      description: "Description for the official website information section",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "If the link does not end with ",
        },
      },
    },
    domain: {
      control: "text",
      description: "Domain extension for official government websites",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: ".gov.my, " },
      },
    },
    closeText: {
      control: "text",
      description:
        "Closing description for the official website information section",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "exit the website immediately even if it looks similar.",
        },
      },
    },

    secureTitle: {
      control: "text",
      description: "Title for the secure connection information section",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Secure websites use HTTPS" },
      },
    },

    secureDescription: {
      control: "text",
      description: "Description for the secure connection information section",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Look for a lock (" },
      },
    },

    orText: {
      control: "text",
      description: "Description for the secure connection information section",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: ") or" },
      },
    },
    protocol: {
      control: "text",
      description: "Protocol for the secure connection information section",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "https://" },
      },
    },
    precautionText: {
      control: "text",
      description:
        "Closing description for the secure connection information section",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary:
            "as an added precaution. If not present, do not share any sensitive information.",
        },
      },
    },
  },
} satisfies Meta<typeof Masthead>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default English version of the Masthead component
 */
export const Default: Story = createStory({});

/**
 * Malay language version of the Masthead
 */
export const Malay: Story = createStory({
  officialText: "Portal Rasmi Kerajaan Malaysia",
  identifyText: "Kenal pasti begini",
  officialTitle: "Pautan portal rasmi berakhir dengan .gov.my",
  officialDescription: "Sekiranya anda melihat pautan selain ",
  domain: ".gov.my",
  closeText:
    ", segera tutupkan halaman itu walaupun ia menyerupai portal rasmi!",
  secureTitle: "Portal yang selamat menggunakan HTTPS",
  secureDescription: "Periksa ikon loker ( ",
  orText: ") atau ",
  precautionText:
    " di depan pautan. Sekiranya tiada, jangan kongsikan sebarang maklumat sensitif.",
});

/**
 * Example showing only the Official Indicator Component
 */
export const OfficialIndicatorStory: Story = {
  name: "Official Indicator Component ",
  render: () => (
    <summary className="block cursor-pointer list-none py-2.5 outline-none sm:py-1">
      <div className="px-4.5 text-foreground-primary mx-auto flex max-w-[1280px] items-center gap-1.5 text-sm/4 max-sm:justify-between md:px-6">
        <OfficialIndicator text="Official Malaysia Government Website" />
      </div>
    </summary>
  ),
};

/**
 * Example showing only the Identification Toggle Component
 */
export const IdentificationToggleStory: Story = {
  name: "Identification Toggle Component",
  render: () => (
    <summary className="block cursor-pointer list-none py-2.5 outline-none sm:py-1">
      <div className="px-4.5 text-foreground-primary mx-auto flex max-w-[1280px] items-center gap-1.5 text-sm/4 max-sm:justify-between md:px-6">
        <IdentificationToggle text="Here's how you know" />
      </div>
    </summary>
  ),
};

/**
 * Example showing only the official website information section
 */
export const OfficialInfoStory: Story = {
  name: "Official Info Component",
  render: () => (
    <div className="p-6">
      <OfficialInfo
        title="Official government websites end with .gov.my"
        description="If the link does not end with "
        domain=".gov.my"
        closeText=", exit the website immediately even if it looks similar."
      />
    </div>
  ),
};

/**
 * Example showing only the secure connection information section
 */
export const SecureInfoStory: Story = {
  name: "Secure Info Component",
  render: () => (
    <div className="p-6">
      <SecureInfo
        title="Secure websites use HTTPS"
        description="Look for a lock ("
        orText=") or "
        protocol="https://"
        precautionText=" as an added precaution. If not present, do not share any sensitive information"
      />
    </div>
  ),
};

/**
 * Mobile view of the Masthead
 */
export const Mobile: Story = createStory({
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
});
