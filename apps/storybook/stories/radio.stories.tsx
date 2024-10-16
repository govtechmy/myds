import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Radio,
  RadioButton,
  RadioHintText,
  RadioItem,
  RadioLabel,
  RadioProps,
} from "@myds/react/radio";

/**
 * ### Overview
 * Radio buttons allow users to select exactly one choice from a group.
 *
 * ### Usage
 * ```tsx
 * import {
 *   Radio,
 *   RadioButton,
 *   RadioHintText,
 *   RadioItem,
 *   RadioLabel,
 * } from "@myds/react/radio";
 *
 * <Radio>
 *   <RadioItem>
 *     <RadioButton value="apple" id="apple" />
 *     <RadioLabel htmlFor="apple">Apple</RadioLabel>
 *   </RadioItem>
 *   <RadioItem>
 *     <RadioButton value="banana" id="banana" />
 *     <div>
 *       <RadioLabel htmlFor="banana">Banana</RadioLabel>
 *       <RadioHelpText htmlFor="banana">Comes pre-packaged.</RadioHelpText>
 *     </div>
 *   </RadioItem>
 * </Radio>
 * ```
 */
const meta = {
  title: "@myds/react/Radio",
  component: ({ ...props }) => {
    return (
      <Radio {...props}>
        <RadioItem>
          <RadioButton value="email" id="email" />
          <div style={{ display: "grid" }}>
            <RadioLabel htmlFor="email">Email</RadioLabel>
            <RadioHintText htmlFor="email">
              We will send notifications to your registered email address.
            </RadioHintText>
          </div>
        </RadioItem>
        <RadioItem>
          <RadioButton value="phone_call" id="phone_call" />
          <div style={{ display: "grid" }}>
            <RadioLabel htmlFor="phone_call">Phone Call</RadioLabel>
            <RadioHintText htmlFor="phone_call">
              Our representative will call you on your provided phone number.
            </RadioHintText>
          </div>
        </RadioItem>
        <RadioItem>
          <RadioButton value="text_message" id="text_message" />
          <div style={{ display: "grid" }}>
            <RadioLabel htmlFor="text_message">Text Message</RadioLabel>
            <RadioHintText htmlFor="text_message">
              You will receive SMS updates on your mobile phone.
            </RadioHintText>
          </div>
        </RadioItem>
        <RadioItem disabled>
          <RadioButton value="postal_mail" id="postal_mail" />
          <div style={{ display: "grid" }}>
            <RadioLabel htmlFor="postal_mail">Postal Mail</RadioLabel>
            <RadioHintText htmlFor="postal_mail">
              Not available at the moment.
            </RadioHintText>
          </div>
        </RadioItem>
        <RadioItem>
          <RadioButton
            value="disable_notifications"
            id="disable_notifications"
          />
          <RadioLabel htmlFor="disable_notifications">
            Disable Notifications
          </RadioLabel>
        </RadioItem>
      </Radio>
    );
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      table: {
        type: { summary: "enum", detail: "`small`, `medium`, or `large`" },
        defaultValue: { summary: "medium" },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
} satisfies Meta<RadioProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = createStory({});

export const Disabled: Story = createStory({
  value: "phone_call",
  disabled: true,
});

export const Dark: Story = createStory(
  {
    className: "dark",
  },
  "dark",
);

export const DisabledDark: Story = createStory(
  {
    value: "phone_call",
    disabled: true,
    className: "dark",
  },
  "dark",
);
