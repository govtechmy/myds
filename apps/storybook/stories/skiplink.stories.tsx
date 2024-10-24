import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Skiplink } from "@myds/react/skiplink";
import { clx } from "@myds/react/utils";

/**
 * ### Overview
 * The skip link component enables users to bypass repetitive navigation links and jumps directly to the main content. It enhances accessibility for keyboard and screen reader users by improving navigation efficiency and is typically hidden until focused.
 *
 * > Melompat jauh di padang permainan,
 * > Langkah ringan menuju destinasi.
 * > Skiplink memberi kemudahan,
 * > Pengguna melayari tanpa frustrasi. -- Claude
 *
 * ### Usage
 * ```ts
 * import Skiplink from "@myds/react/skiplink";
 *
 * <Skiplink href="#main-content" text="Skip to main content"/>
 * ```
 */
const meta = {
  title: "@myds/React/Skiplink",
  component: Skiplink,
  decorators: [
    (Story, context) => {
      const contentId = context.args.href?.replace("#", "");

      return (
        <div
          className={clx(
            "min-h-[60px]",
            contentId == "main-dark-content" && "text-white",
          )}
        >
          <Story />
          <nav className="h-[300px] bg-slate-800">
            <div className="items-center justify-between">
              <div className="text-xl font-bold">Logo</div>
              <ul className="flex gap-6">
                <li>
                  <a href="#" className="text-black-700">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main content with dynamic id */}
          <main id={contentId} className="flex-1" tabIndex={-1}>
            <div className="mx-auto max-w-7xl">
              <h1 className="mb-4 text-2xl font-bold">Main Content</h1>
              <p className="text-slate-600">
                Use tab to navigate to the skipLink element, and press Enter to
                be directed to the div with the correct id. This div has the id
                of <span className="font-bold">{contentId}</span>
              </p>
            </div>
          </main>
        </div>
      );
    },
  ],
  argTypes: {
    text: {
      description: "The text content displayed in the skiplink button",
      control: "text",
    },
    href: {
      description: "The target URL or anchor ID that the skiplink navigates to",
      control: "text",
    },
  },
  args: {
    text: "Skip to main content",
    href: "#main-content",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skiplink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents a skiplink component with light mode
 */

export const LightSkipLink: Story = createStory({
  href: "#main-light-content",
});

/**
 * This story represents a skiplink component with dark mode
 */

export const DarkSkipLink: Story = createStory(
  {
    text: "Skip to main content",
    href: "#main-dark-content",
    className: "dark",
  },
  "dark",
);
