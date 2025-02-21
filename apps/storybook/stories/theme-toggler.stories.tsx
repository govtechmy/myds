import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeToggler,
  ThemeProvider,
} from "@govtechmy/myds-react/theme-toggler";
import { MoonIcon, PlaceholderIcon, SunIcon } from "@govtechmy/myds-react/icon";
import { clx } from "@govtechmy/myds-react/utils";

/**
 * ### Overview
 * The `ThemeToggler` component allows users to toggle between different themes.
 * It cycles through a list of provided themes, each represented by an icon.
 * ### Usage
 * ```tsx
 * import { ThemeToggler, ThemeProvider } from "@govtechmy/myds-react/theme-toggler";
 *
 * <ThemeProvider>
 *   <ThemeToggler />
 * </ThemeProvider>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/ThemeToggler",
  component: ThemeToggler,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    themes: {
      table: {
        type: { summary: "Themes[]" },
      },
      description:
        "Array of theme objects containing theme name and associated icon.",
      control: "object",
    },
  },
} satisfies Meta<typeof ThemeToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default ThemeToggler story.
 */

export const Default: Story = {
  render: () => {
    const htmlClass = document.documentElement.className;
    return (
      <div
        className={clx(
          htmlClass,
          "bg-bg-white flex items-center justify-center py-8",
        )}
      >
        <ThemeProvider>
          <ThemeToggler />
        </ThemeProvider>
      </div>
    );
  },
};

/**
 * ThemeToggler with custom themes.
 */

export const CustomContent: Story = {
  render: () => {
    const htmlClass = document.documentElement.className;
    return (
      <div
        className={clx(
          htmlClass,
          "bg-bg-white flex items-center justify-center py-8",
        )}
      >
        <ThemeProvider>
          <ThemeToggler
            themes={[
              { theme: "light", icon: <SunIcon /> },
              { theme: "dark", icon: <MoonIcon /> },
              { theme: "pastel", icon: <PlaceholderIcon /> },
              { theme: "retro", icon: <PlaceholderIcon /> },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  },
};
