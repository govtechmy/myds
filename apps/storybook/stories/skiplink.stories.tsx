import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { Skiplink } from "@govtechmy/myds-react/skiplink";
import { clx } from "@govtechmy/myds-react/utils";

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
 * import Skiplink from "@govtechmy/myds-react/skiplink";
 *
 * <Skiplink href="#main-content" text="Skip to main content"/>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Skiplink",
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
          <nav className="h-[200px] bg-slate-800">
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
          <main id={contentId} className="flex-1" tabIndex={-1}>
            <div className="mx-auto max-w-7xl">
              <h1 className="mb-4 text-2xl font-bold">Main Content</h1>
              <p className="text-slate-600">
                To navigate using the skip link: Press the Shift + Tab keys (or
                Tab) after clicking on the story to navigate through the
                tab-able components in the story. A skip link will appear at the
                top of the story's viewport (overlapping the menu bar). This
                skiplink component allows you to bypass the navigation menu and
                jump directly to the main content. Press Enter while the skip
                link is focused to activate it. You'll be taken straight to the
                main content area, saving you from having to tab through all the
                navigation items. This feature is particularly helpful for
                keyboard users and people using screen readers.
              </p>
            </div>
          </main>
        </div>
      );
    },
  ],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the tag",
    },
    href: {
      description: "The target URL or anchor ID that the skiplink navigates to",
      control: "text",
    },
  },
  args: {
    children: <span>Skip to main content</span>,
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
  children: <span>Skip to main content</span>,
});

/**
 * This story represents a skiplink component with dark mode
 */

export const DarkSkipLink: Story = createStory(
  {
    children: <span>Skip to main content</span>,
    href: "#main-dark-content",
    className: "dark",
  },
  "dark",
);
