import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  AnnounceBar,
  AnnounceBarDescription,
  AnnounceBarTag,
} from "@govtechmy/myds-react/announce-bar";
import { Link } from "@govtechmy/myds-react/link";

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
 * import { AnnounceBar, AnnounceBarDescription, AnnounceBarProps, AnnounceBarTag } from "@govtechmy/myds-react/announce-bar";
 *
 * <AnnounceBar {...args}>
 *       <AnnounceBarTag variant="primary" mode="pill">
 *         Alpha
 *       </AnnounceBarTag>
 *       <AnnounceBarDescription>
 *         <p>This is a new service. Help us improve it. <Link underline="always" primary href="#">Send us your feedback here.</Link></p>
 *       </AnnounceBarDescription>
 * </AnnounceBar>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Components/AnnounceBar",
  component: AnnounceBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof AnnounceBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the implementation of AnnounceBar in light primary mode. It can be utilized in indicating the Alpha stage.
 */
export const WithBorder: Story = {
  ...createStory({}),
  render: () => {
    return (
      <AnnounceBar border>
        <AnnounceBarTag variant="primary" mode="pill">
          Alpha
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>
            This is a new service. Help us improve it.{" "}
            <Link underline="always" primary href="#">
              Send us your feedback here.
            </Link>
          </p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};
/**
 * This story represents the implementation of AnnounceBar in light primary mode. It can be utilized in indicating the Alpha stage.
 */
export const LightPrimary: Story = {
  ...createStory({}),
  render: () => {
    return (
      <AnnounceBar>
        <AnnounceBarTag variant="primary" mode="pill">
          Alpha
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>
            This is a new service. Help us improve it.{" "}
            <Link underline="always" primary href="#">
              Send us your feedback here.
            </Link>
          </p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};

/**
 * This story represents the implementation of AnnounceBar in light success mode. It can be utilized in indicating Public Beta stage.
 */

export const LightSuccess: Story = {
  ...createStory({}),
  render: () => {
    return (
      <AnnounceBar>
        <AnnounceBarTag variant="success" mode="pill">
          Public Beta
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>
            Welcome to Public Beta! Try out the service and share your feedback.{" "}
            <Link underline="always" primary href="#">
              Send us your feedback here.
            </Link>
          </p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};

/**
 * This story represents the implementation of AnnounceBar in light warning mode. It can be utilized in indicating the Maintenance stage.
 */

export const LightWarning: Story = {
  ...createStory({}),
  render: () => {
    return (
      <AnnounceBar>
        <AnnounceBarTag variant="warning" mode="pill">
          Maintenance
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>
            This service is undergoing maintenance. Thank you for your patience.{" "}
            <Link underline="always" primary href="#">
              Send us your feedback here.
            </Link>
          </p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};

/**
 * This story represents the implementation of AnnounceBar in light danger mode. It can be utilized in indicating the Retired stage.
 */

export const LightDanger: Story = {
  ...createStory({}),
  render: () => {
    return (
      <AnnounceBar>
        <AnnounceBarTag variant="danger" mode="pill">
          Retired
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>This service has been retired and is no longer available.</p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};

/**
 * This story represents the implementation of AnnounceBar in dark primary mode. It can be utilized in indicating the Alpha stage.
 */
export const DarkPrimary: Story = {
  ...createStory({ className: "dark" }, "dark"),
  render: ({ className }) => {
    return (
      <AnnounceBar className={className}>
        <AnnounceBarTag variant="primary" mode="pill">
          Alpha
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>
            This is a new service. Help us improve it.{" "}
            <Link underline="always" primary href="#">
              Send us your feedback here.
            </Link>
          </p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};

/**
 * This story represents the implementation of AnnounceBar in dark success mode. It can be utilized in indicating Public Beta stage.
 */

export const DarkSuccess: Story = {
  ...createStory({ className: "dark" }, "dark"),
  render: ({ className }) => {
    return (
      <AnnounceBar className={className}>
        <AnnounceBarTag variant="success" mode="pill">
          Public Beta
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>
            Welcome to Public Beta! Try out the service and share your feedback.{" "}
            <Link underline="always" primary href="#">
              Send us your feedback here.
            </Link>
          </p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};
/**
 * This story represents the implementation of AnnounceBar in dark warning mode. It can be utilized in indicating the Maintenance stage.
 */

export const DarkWarning: Story = {
  ...createStory({ className: "dark" }, "dark"),
  render: ({ className }) => {
    return (
      <AnnounceBar className={className}>
        <AnnounceBarTag variant="warning" mode="pill">
          Maintenance
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>
            This service is undergoing maintenance. Thank you for your patience.{" "}
            <Link underline="always" primary href="#">
              Send us your feedback here.
            </Link>
          </p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};

/**
 * This story represents the implementation of AnnounceBar in dark danger mode. It can be utilized in indicating the Retired stage.
 */

export const DarkDanger: Story = {
  ...createStory({ className: "dark" }, "dark"),
  render: ({ className }) => {
    return (
      <AnnounceBar className={className}>
        <AnnounceBarTag variant="danger" mode="pill">
          Retired
        </AnnounceBarTag>
        <AnnounceBarDescription>
          <p>This service has been retired and is no longer available.</p>
        </AnnounceBarDescription>
      </AnnounceBar>
    );
  },
};
