import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { AnnounceBar, AnnounceBarDescription, AnnounceBarProps, AnnounceBarTag } from "@myds/react/announce-bar";
import { Link } from "@myds/react/link";

/**
 * ### Overview
 * This is an announce bar, it is typicallyplaced below the navigation menu to display the current status of the service, such as Alpha, Beta or Maintenance. It informs the users about the service's development stage and includes a link for submitting feedback.
 *
 * > Burung merpati terbang ke hulu,
 * > Hinggap sebentar di dahan jati;
 * > Status projek sentiasa dipandu,
 * > Maklum balas kami menanti.
 *
 * ### Usage
 * ```tsx
 * import { AnnounceBar, AnnounceBarDescription, AnnounceBarProps, AnnounceBarTag } from "@myds/react/announce-bar";
 *
 * <AnnounceBar {...args}>
 *       <AnnounceBarTag variant="primary">
 *         Alpha
 *       </AnnounceBarTag>
 *       <AnnounceBarDescription>
 *         <p>This is a new service. Help us improve it. <Link underline="always" primary * *href="#">Send us your feedback here.</Link></p>
 *       </AnnounceBarDescription>
 * </AnnounceBar>
 * ```
 */
const meta = {
  title: "@myds/react/AnnounceBar",
  // component: (args: React.ComponentProps<typeof AnnounceBar>) => {
  //   return (
  //     <AnnounceBar {...args}>
  //       <AnnounceBarTag variant="primary">
  //         Alpha
  //       </AnnounceBarTag>
  //       <AnnounceBarDescription>
  //         <p>This is a new service. Help us improve it. <Link underline="always" primary href="#">Send us your feedback here.</Link></p>
  //       </AnnounceBarDescription>
  //     </AnnounceBar>
  //   );
  // },
  component: AnnounceBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AnnounceBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the implementation of AnnounceBar in light mode..
 */
export const Default: Story = {
  args: {children: null, className:""},
  render: () => {return (
    <AnnounceBar>
         <AnnounceBarTag variant="warning">
           Fikri
         </AnnounceBarTag>
         <AnnounceBarDescription>
           <p>This is a new service. Help us improve it. <Link underline="always" primary href="#">Send us your feedback here.</Link></p>
         </AnnounceBarDescription>
       </AnnounceBar>
  )}
};

/**
 * This story represents the implementation of CookieBanner for desktop viewport in light mode.
 */

export const LightBeta: Story = createStory({});