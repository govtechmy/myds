"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@govtechmy/myds-react/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@govtechmy/myds-react/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@govtechmy/myds-react/alert-dialog";
import { Button } from "@govtechmy/myds-react/button";
import { useState } from "react";

type Props = {
  interestLabel: string;
  onSubmitComplete?: () => void;
  selectPlaceholder: string;
  interestOptions: {
    uiux: string;
    frontend: string;
    operation: string;
  };
  nameLabel: string;
  emailLabel: string;
  instituteLabel: string;
  submitLabel: string;
  errors: {
    requiredName: string;
    invalidName: string;
    requiredEmail: string;
    invalidEmail: string;
    requiredInstitute: string;
    requiredInterest: string;
    failError: string;
    success1: string;
    success2: string;
  };
};

export default function CommunityForm({
  interestLabel,
  selectPlaceholder,
  interestOptions,
  nameLabel,
  emailLabel,
  instituteLabel,
  submitLabel,
  errors: errMsg,
  onSubmitComplete,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: errMsg.requiredName })
      .regex(/^[A-Za-z\s]+$/, { message: errMsg.invalidName }),
    email: z
      .string()
      .trim()
      .min(1, { message: errMsg.requiredEmail })
      .regex(/^[^\s@]+@[^\s@]+\.gov\.my$/, {
        message: errMsg.invalidEmail,
      }),
    institute: z.string().trim().min(1, { message: errMsg.requiredInstitute }),
    interest: z
      .string()
      .refine((val) => ["uiux", "frontend", "operation"].includes(val), {
        message: errMsg.requiredInterest,
      }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "" },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateTime: new Date().toISOString(),
          ...data,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setShowSuccess(true);
        reset();
        onSubmitComplete?.();

        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        setShowError(true);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {showSuccess && (
        <div className="bg-success-50 border-success-200 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <div className="bg-success-600 flex h-5 w-5 items-center justify-center rounded-full">
              <svg
                className="h-3 w-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-success-800 font-medium">{errMsg.success1}</p>
          </div>
          <p className="text-success-700 mt-1 text-sm">{errMsg.success2}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="interest"
            className="mb-1 block text-[14px] text-[#6B6B74]"
          >
            {interestLabel}
          </label>
          <Controller
            control={control}
            name="interest"
            render={({ field }) => (
              <Select
                key={field.value ?? "empty"}
                size="small"
                variant="outline"
                onValueChange={field.onChange}
                value={field.value}
                disabled={isLoading}
              >
                <SelectTrigger
                  id="interest"
                  className={`w-full ${errors.interest ? "border-danger-600" : ""}`}
                >
                  <SelectValue placeholder={selectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="uiux">{interestOptions.uiux}</SelectItem>
                    <SelectItem value="frontend">
                      {interestOptions.frontend}
                    </SelectItem>
                    <SelectItem value="operation">
                      {interestOptions.operation}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.interest && (
            <p className="text-danger-600 pt-1 text-[14px]">
              {errors.interest.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-[14px] text-[#6B6B74]"
          >
            {nameLabel}
          </label>
          <Input
            id="name"
            {...register("name")}
            className={errors.name ? "border-danger-600" : ""}
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-danger-600 pt-1 text-[14px]">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-[14px] text-[#6B6B74]"
          >
            {emailLabel}
          </label>
          <Input
            id="email"
            {...register("email")}
            className={errors.email ? "border-danger-600" : ""}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-danger-600 pt-1 text-[14px]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="institute"
            className="mb-1 block text-[14px] text-[#6B6B74]"
          >
            {instituteLabel}
          </label>
          <Input
            id="institute"
            {...register("institute")}
            className={errors.institute ? "border-danger-600" : ""}
            disabled={isLoading}
          />
          {errors.institute && (
            <p className="text-danger-600 pt-1 text-[14px]">
              {errors.institute.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 flex w-full items-center justify-center gap-2 rounded px-4 py-2 text-center text-white disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg
                  className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              submitLabel
            )}
          </button>
        </div>
      </form>

      {/* Error AlertDialog */}
      <AlertDialog
        variant="danger"
        open={showError}
        onOpenChange={setShowError}
      >
        <AlertDialogContent dismissible>
          <AlertDialogTitle>Submission Unsuccessful</AlertDialogTitle>
          <AlertDialogDescription>
            We apologize, but your submission could not be processed at this
            time. Our support team has been automatically notified of this
            issue. Please try submitting again in a few moments. If the problem
            persists, our team will investigate and resolve it promptly.
          </AlertDialogDescription>
          <AlertDialogAction align="end">
            <AlertDialogClose>
              <Button size="medium" variant="default-outline">
                Close
              </Button>
            </AlertDialogClose>
            <AlertDialogClose>
              <Button
                size="medium"
                variant="danger-fill"
                onClick={() => {
                  // Optionally retry submission here if needed
                }}
              >
                Try Again
              </Button>
            </AlertDialogClose>
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
