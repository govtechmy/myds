import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { CompleteMasthead } from "@myds/react/masthead";

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
 * import { CompleteMasthead } from "./Masthead";
 *
 * // Basic usage
 * <CompleteMasthead />
 * ```
 */
const meta = {
  title: "@myds/react/Masthead",
  component: CompleteMasthead,
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
    officialIndicator: {
      control: false,
      description: "Official indicator section with flag and text",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    identificationToggle: {
      control: false,
      description: "Toggle button for identification information",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    officialInfo: {
      control: false,
      description: "Official website verification information",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    secureInfo: {
      control: false,
      description: "Security information section",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
} satisfies Meta<typeof CompleteMasthead>;

export default meta;
type Story = StoryObj<typeof meta>;
