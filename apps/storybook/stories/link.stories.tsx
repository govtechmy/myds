import { Button, ButtonIcon } from "@myds/react/button";
import Link from "@myds/react/link";
import type { Meta, StoryObj } from "@storybook/react";
import ArrowBack from "../react/arrow-back";
import { createStory } from "../utils";

/**
 * ### Overview
 * The Link component allows you to easily customize anchor elements.
 *
 * ### Usage
 * ```ts
 * import Link from "@myds/react/link";
 *
 * <Link href="https://design.digital.gov.my">MYDS</Link>
 * ```
 */
const meta = {
  title: "@myds/react/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "The text indicating the link's destination.",
    },
    href: {
      description: "The URL that the link points to.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    newTab: {
      table: {
        category: "MYDS API",
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
      description: "Controls whether the link opens in a new tab.",
      control: "boolean",
    },
    primary: {
      table: {
        category: "MYDS API",
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
      description:
        "Sets the text colour to primary or inherit it from parent.",
      control: "boolean",
    },
    underline: {
      table: {
        category: "MYDS API",
        defaultValue: {
          summary: "always",
        },
        type: {
          summary: "enum",
        },
      },
      description: "Controls when the link should have an underline.",
      control: "inline-radio",
      options: ["always", "hover", "none"],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default link, used in rich text etc. 
 */
export const Default: Story = createStory({
  children: "Malaysia's Official Design System",
  href: "https://design.digital.gov.my",
  newTab: true,
  primary: true,
  underline: "always",
});

/**
 * An example using Button with Icon
 */  
export const Backlink: Story = {
  args: {
    primary: true,
    underline: "hover",
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "dark", value: "#18181B" }],
    },
  },
  render: (args) => (
    <Button asChild variant="unset">
      <Link {...args}>
        <ButtonIcon>
          <ArrowBack />
        </ButtonIcon>
        Back
      </Link>
    </Button>
  ),
};

export const FooterLink: Story = createStory({
  children: "Privacy Policy",
  underline: "hover",
  className: "text-txt-black-700 text-sm",
});

export const NavbarLink: Story = {
  args: {
    underline: "none",
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "dark", value: "#18181B" }],
    },
  },
  render: (args) => (
    <Button asChild variant="default-ghost">
      <Link {...args}>Contact Us</Link>
    </Button>
  ),
};
