import { Button, ButtonIcon } from "@myds/react/button";
import Link from "@myds/react/link";
import type { Meta, StoryObj } from "@storybook/react";
import ArrowBack from "../react/arrow-back";
import { createStory } from "../utils";

/**
 * ### Overview
 * The Link component extends the HTML `<a>` element and allows you to easily customize them.
 *
 * ### Usage
 * ```ts
 * import Link from "@myds/react/link";
 *
 * <Link primary href="https://design.digital.gov.my" underline="always">Malaysia's Official Design System</Link>
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
      description: "Sets the text colour to primary or inherit it from parent.",
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
 * To create a link that looks like a button, you can nest the link component in a Button and set the `asChild` parameter.
 */
export const ButtonAsLink: Story = {
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
    <Button asChild>
      <Link {...args}>
        Ask a question
      </Link>
    </Button>
  ),
};

/**
 * An example of a backlink using Button and Icon
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

/**
 * An example of a Link that is underlined when hovered.
 */
export const FooterLink: Story = createStory({
  children: "Privacy Policy",
  underline: "hover",
  className: "text-txt-black-700 text-sm",
});

/**
 * An example of a Link that has underline disabled.
 */
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
