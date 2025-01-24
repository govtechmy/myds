"use client";

import { InputOTP, InputOTPSlot } from "@/components/myds";
import { useState } from "react";

export function InputOTPControlledExample() {
  const [value, setValue] = useState("");

  return (
    <InputOTP
      maxLength={4}
      value={value}
      onChange={(value) => {
        setValue(value.toUpperCase());
      }}
    >
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  );
}
