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
  const schema = z.object({
    name: z.string().trim().min(1, { message: errMsg.requiredName }).regex(/^[A-Za-z\s]+$/, { message: errMsg.invalidName }),
    email: z.string().trim().min(1, { message: errMsg.requiredEmail }).regex(/^[^\s@]+@[^\s@]+\.gov\.my$/, {
      message: errMsg.invalidEmail,
    }),
    institute: z.string().trim().min(1, { message: errMsg.requiredInstitute }),
    interest: z.string().refine((val) => ["uiux", "frontend", "operation"].includes(val), {
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
    onSubmitComplete?.();
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
      reset();
      if (result.status === "success") {
        console.log(result.status);
      } else {
        reset();
        console.log(result.message);
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="interest" className="block mb-1 text-[14px] text-[#6B6B74]">{interestLabel}</label>
        <Controller
          control={control}
          name="interest"
          render={({ field }) => (
            <Select key={field.value ?? "empty"} size="small" variant="outline" onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="interest" className={`w-full ${errors.interest ? "border-danger-600" : ""}`}>
                <SelectValue placeholder={selectPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="uiux">{interestOptions.uiux}</SelectItem>
                  <SelectItem value="frontend">{interestOptions.frontend}</SelectItem>
                  <SelectItem value="operation">{interestOptions.operation}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.interest && <p className="pt-1 text-danger-600 text-[14px]">{errors.interest.message}</p>}
      </div>

      <div>
        <label htmlFor="name" className="block mb-1 text-[14px] text-[#6B6B74]">{nameLabel}</label>
        <Input id="name" {...register("name")} className={errors.name ? "border-danger-600" : ""} />
        {errors.name && <p className="pt-1 text-danger-600 text-[14px]">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-[14px] text-[#6B6B74]">{emailLabel}</label>
        <Input id="email" {...register("email")} className={errors.email ? "border-danger-600" : ""} />
        {errors.email && <p className="pt-1 text-danger-600 text-[14px]">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="institute" className="block mb-1 text-[14px] text-[#6B6B74]">{instituteLabel}</label>
        <Input id="institute" {...register("institute")} className={errors.institute ? "border-danger-600" : ""} />
        {errors.institute && <p className="pt-1 text-danger-600 text-[14px]">{errors.institute.message}</p>}
      </div>

      <div className="flex justify-center">
        <button type="submit" className="w-full text-center text-white py-2 px-4 bg-primary-600 hover:bg-primary-700 rounded">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
