import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@govtechmy/myds-react/hooks";
// import { ThemeToggler } from "@govtechmy/myds-react/theme-toggler";
import { MoonIcon, PlaceholderIcon, SunIcon } from "@govtechmy/myds-react/icon";
import { clx } from "@govtechmy/myds-react/utils";
import { createStory } from "../utils";

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
  title: "@govtechmy/myds-react/Components/ThemeToggler",
  tags: ["!dev"],
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
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

// /**
//  * Default ThemeToggler story.
//  */
// export const Default: Story = {
//   render: () => {
//     const htmlClass = document.documentElement.className;
//     return (
//       <div
//         className={clx(
//           htmlClass,
//           "bg-bg-white flex items-center justify-center py-8",
//         )}
//       >
//         -- WIP --
//         {/* <ThemeToggler /> */}
//       </div>
//     );
//   },
// };

// /**
//  * ThemeToggler with custom themes.
//  */

// export const CustomContent: Story = {
//   render: () => {
//     const htmlClass = document.documentElement.className;
//     return (
//       <div
//         className={clx(
//           htmlClass,
//           "bg-bg-white flex items-center justify-center py-8",
//         )}
//       >
//         -- WIP --
//         {/* <ThemeToggler
//           themes={[
//             { theme: "light", icon: <SunIcon /> },
//             { theme: "dark", icon: <MoonIcon /> },
//             { theme: "pastel", icon: <PlaceholderIcon /> },
//             { theme: "retro", icon: <PlaceholderIcon /> },
//           ]}
//         /> */}
//       </div>
//     );
//   },
// };
