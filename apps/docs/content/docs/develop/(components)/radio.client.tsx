"use client";

import {
  Radio,
  RadioButton,
  RadioHintText,
  RadioItem,
  RadioLabel,
} from "@/components/myds";
import { ComponentProps, useState } from "react";

export function RadioExample(props: ComponentProps<typeof Radio>) {
  return (
    <Radio {...props}>
      <RadioItem>
        <RadioButton value="email" id="email" />
        <div className="grid">
          <RadioLabel htmlFor="email">Email</RadioLabel>
          <RadioHintText htmlFor="email">
            We will send notifications to your registered email address.
          </RadioHintText>
        </div>
      </RadioItem>
      <RadioItem>
        <RadioButton value="phone_call" id="phone_call" />
        <div className="grid">
          <RadioLabel htmlFor="phone_call">Phone Call</RadioLabel>
          <RadioHintText htmlFor="phone_call">
            Our representative will call you on your provided phone number.
          </RadioHintText>
        </div>
      </RadioItem>
      <RadioItem>
        <RadioButton value="text_message" id="text_message" />
        <div className="grid">
          <RadioLabel htmlFor="text_message">Text Message</RadioLabel>
          <RadioHintText htmlFor="text_message">
            You will receive SMS updates on your mobile phone.
          </RadioHintText>
        </div>
      </RadioItem>
      <RadioItem disabled>
        <RadioButton value="postal_mail" id="postal_mail" />
        <div className="grid">
          <RadioLabel htmlFor="postal_mail">Postal Mail</RadioLabel>
          <RadioHintText htmlFor="postal_mail">
            Not available at the moment.
          </RadioHintText>
        </div>
      </RadioItem>
      <RadioItem>
        <RadioButton value="disable_notifications" id="disable_notifications" />
        <RadioLabel htmlFor="disable_notifications">
          Disable Notifications
        </RadioLabel>
      </RadioItem>
    </Radio>
  );
}

export function RadioSimpleExample(props: ComponentProps<typeof Radio>) {
  return (
    <Radio {...props}>
      <RadioItem>
        <RadioButton value="email" id="email" />
        <div className="grid">
          <RadioLabel htmlFor="email">Email</RadioLabel>
          <RadioHintText htmlFor="email">
            We will send notifications to your registered email address.
          </RadioHintText>
        </div>
      </RadioItem>
      <RadioItem>
        <RadioButton value="phone_call" id="phone_call" />
        <div className="grid">
          <RadioLabel htmlFor="phone_call">Phone Call</RadioLabel>
          <RadioHintText htmlFor="phone_call">
            Our representative will call you on your provided phone number.
          </RadioHintText>
        </div>
      </RadioItem>
    </Radio>
  );
}
