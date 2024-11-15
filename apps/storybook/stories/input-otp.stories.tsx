import type { Meta } from "@storybook/react";
import { createRender } from "../utils";
import { InputOTP, InputOTPSlot } from "@myds/react/input-otp";

/**
 * ### Overview
 * The Input OTP (One-Time Password) component allows users to enter a code sent
 * to their email or phone to verify their identity. This component is commonly
 * used in two-factor authentication (2FA) and account recovery processes.
 *
 * > OTP datang, sekali saja,<br>
 * Mesti dimasukkan, jangan berlengah,<br>
 * Kata laluan janganlah alpa,<br>
 * Keselamatan terjaga sepanjang langkah.<br>
 * _— ChatGPT_
 *
 * ### Usage
 * ```tsx
 * import { InputOTP, InputOTPSlot } from "@myds/react/input-otp";
 *
 * <InputOTP maxLength={4}>
 *   <InputOTPSlot index={0} />
 *   <InputOTPSlot index={1} />
 *   <InputOTPSlot index={2} />
 *   <InputOTPSlot index={3} />
 * </InputOTP>
 * ```
 */
const meta = {
  title: "@myds/react/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    maxLength: {
      description: "The max length of the OTP.",
      type: "number",
    },
    defaultValue: {
      description: "The default value of the input (uncontrolled).",
      type: "string",
    },
    value: {
      description: "The value of the input (controlled).",
      type: "string",
    },
    onChange: {
      description: "Callback when the value of the input changes (controlled).",
      type: "function",
    },
    disabled: {
      description: "Whether the input is disabled or not.",
      type: "boolean",
    },
    invalid: {
      description: "Whether the input is invalid or not.",
      type: "boolean",
    },
  },
} satisfies Meta<typeof InputOTP>;

export default meta;

export const Light = createRender(() => {
  return (
    <InputOTP maxLength={4}>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  );
}, "light");

export const LightInvalid = createRender(() => {
  return (
    <InputOTP maxLength={4} invalid>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  );
}, "light");

export const LightDisabled = createRender(() => {
  return (
    <InputOTP maxLength={4} disabled defaultValue="G31D">
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  );
}, "light");

export const Dark = createRender(() => {
  return (
    <InputOTP maxLength={4} className="dark">
      <InputOTPSlot index={0} className="dark" />
      <InputOTPSlot index={1} className="dark" />
      <InputOTPSlot index={2} className="dark" />
      <InputOTPSlot index={3} className="dark" />
    </InputOTP>
  );
}, "dark");

export const DarkInvalid = createRender(() => {
  return (
    <InputOTP maxLength={4} className="dark" invalid>
      <InputOTPSlot index={0} className="dark" />
      <InputOTPSlot index={1} className="dark" />
      <InputOTPSlot index={2} className="dark" />
      <InputOTPSlot index={3} className="dark" />
    </InputOTP>
  );
}, "dark");

export const DarkDisabled = createRender(() => {
  return (
    <InputOTP maxLength={4} disabled defaultValue="G31D" className="dark">
      <InputOTPSlot index={0} className="dark" />
      <InputOTPSlot index={1} className="dark" />
      <InputOTPSlot index={2} className="dark" />
      <InputOTPSlot index={3} className="dark" />
    </InputOTP>
  );
}, "dark");

/**
 * You can use the HTML `<input />`
 * [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)
 * attribute to to specify the value's format.
 */
export const NumbersOnly = createRender(() => {
  return (
    <InputOTP maxLength={4} pattern="^[0-9]{0,4}$">
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  );
}, "light");
