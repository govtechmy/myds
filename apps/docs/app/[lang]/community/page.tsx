"use client";

import { useState, useRef } from "react";
import { Input } from "@govtechmy/myds-react/input";
import { getRosetta } from "@/locales/_server";
import { Callout, CalloutTitle } from "@govtechmy/myds-react/callout";

export default function CommunityPage({
  params,
}: {
  params: { lang: "en" | "ms" };
}) {
  
  const { t } = getRosetta(params.lang);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const validateName = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return t("community.form.required");
    }
    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(trimmed)) {
      return t("community.form.invalidName");
    }

    return "";
  };


  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return t("community.form.required");
    } else if (!/^[^\s@]+@[^\s@]+\.gov\.my$/.test(value)) {
      return t("community.form.invalidEmail");
    }
    return "";
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({ ...prev, name: validateName(value) }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Validation checks...
    
  //   if (nameError || emailError) {
  //     // previous validation logic...
  //     return;
  //   }

  //   try {
  //     const response = await fetch("/api/submit", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         token: "mySuperSecretToken123",   // matches your Apps Script
  //         dateTime: new Date().toISOString(),
  //         name: name.trim(),
  //         email: email.trim(),
  //       }),
  //     });

  //     const result = await response.json();

  //     if (result.status === "success") {
  //       alert(`Thank you, ${name}! We'll contact you at ${email}.`);
  //       setName(""); setEmail(""); setErrors({});
  //     } else {
  //       alert(result.message || "Something went wrong.");
  //     }
  //   } catch (err) {
  //     alert("Failed to submit. Please try again later.");
  //     console.error("Submission error:", err);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });

      if (nameError && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (emailError && emailInputRef.current) {
        emailInputRef.current.focus();
      }
      return;
    }
    
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: "mySuperSecretToken123",
          dateTime: new Date().toISOString(),
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert(`Thank you, ${name}! We'll contact you at ${email}.`);
        setName(""); setEmail(""); setErrors({});
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (err) {
      alert("Failed to submit. Please try again later.");
      console.error("Submission error:", err);
    }
  };

  return (
    <div
      id="mainBox"
      className="container mx-auto max-w-xl px-4 py-12 w-[400px] h-[400px] mt-[8%]"
    >
      <h1 className="text-[24px] font-semibold mb-4 text-center">
        {t("community.title")}
      </h1>
      <p className="text-center text-muted mb-8 text-[16px]">
        {t("community.subtitle")}
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-[14px] text-[#6B6B74]"
          >
            {t("community.name")}
          </label>
          <Input
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            ref={nameInputRef}
          />
          <div className="pt-[12px]"></div>
          {errors.name && (
            <Callout variant="danger">
              <CalloutTitle className="font-normal">{errors.name}</CalloutTitle>
            </Callout>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-[14px] text-[#6B6B74]"
          >
            {t("community.email")}
          </label>
          <Input
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            ref={emailInputRef}
          />
          <div className="pt-[12px]"></div>
          {errors.email && (
            <Callout variant="danger">
              <CalloutTitle className="font-normal">{errors.email}</CalloutTitle>
            </Callout>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full text-center text-white py-2 px-4 bg-primary-600 hover:bg-primary-700 rounded"
          >
            {t("community.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}