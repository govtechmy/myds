"use client";

import { Input } from "@govtechmy/myds-react/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@govtechmy/myds-react/select";
import { getRosetta } from "@/locales/_server";
import Footer from "@/components/Footer";
import { links } from "@/lib/constant";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import {
  AnnounceBar,
  AnnounceBarTag,
  AnnounceBarDescription,
} from "@govtechmy/myds-react/announce-bar";

export default function CommunityPage({
  params,
}: {
  params: { lang: "en" | "ms" };
}) {
  const { t } = getRosetta(params.lang);

  const formSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: t("community.form.required") })
      .regex(/^[A-Za-z\s]+$/, { message: t("community.form.invalidName") }),
    email: z
      .string()
      .trim()
      .min(1, { message: t("community.form.required") })
      .regex(/^[^\s@]+@[^\s@]+\.gov\.my$/, {
        message: t("community.form.invalidEmail"),
      }),
    institute: z.string().trim().min(1, { message: t("community.form.required") }),
    interest: z
      .enum(["uiux", "frontend", "operation"])
      .refine((val) => val !== undefined, {
        message: t("community.form.required"),
      }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
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
        alert(`${t("community.form.sucess1")} ${data.name}${t("community.form.success2")} ${data.email}`);
        reset();
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert(`${t("community.form.failError")}`);
      console.error("Submission error:", err);
    }
  };

  return (
    <>
      <AnnounceBar>
        <AnnounceBarTag variant="primary">{t("community.infoTitle")}</AnnounceBarTag>
        <AnnounceBarDescription>
          {t("community.myGovOnlyInfo")}
        </AnnounceBarDescription>
      </AnnounceBar>

      <section className="relative min-h-[700px] flex items-center justify-center px-4 py-0 overflow-hidden z-0">
        <Image
          src="/common/hero.svg"
          alt="Hero"
          fill
          priority
          className="object-cover img-light opacity-50"
        />

        <Image
          src="/common/hero-dark.svg"
          alt="Hero"
          fill
          priority
          className="object-cover hidden dark:block img-dark opacity-50"
        />

        <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:items-center gap-10 z-10">
          <div className="lg:w-3/5 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-black-900 mb-6">
              {t("community.title")}
            </h2>
            <p className="text-xl text-black-600 mb-4 text-[20px]">
              {t("community.subtitle1")}
            </p>
            <p className="text-base text-black-600">
              {t("community.subtitle2")}
            </p>
            <p className="text-base text-black-600 mt-4 font-semibold">
              {t("community.subtitle3")}
            </p>
          </div>

          <div className="bg-bg-white lg:w-2/5 p-8 rounded-xl border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div>
                <label
                  htmlFor="interest"
                  className="block mb-1 text-[14px] text-[#6B6B74]"
                >
                  {t("community.interest")}
                </label>

                <Controller
                  control={control}
                  name="interest"
                  render={({ field }) => (
                    <Select
                      size="small"
                      variant="outline"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger
                        id="interest"
                        className={`w-full ${errors.interest ? "border-danger-600" : ""}`}
                      >
                        <SelectValue placeholder={t("community.form.selectPlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="uiux">{t("community.form.interest.option1")}</SelectItem>
                          <SelectItem value="frontend">{t("community.form.interest.option2")}</SelectItem>
                          <SelectItem value="operation">{t("community.form.interest.option3")}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.interest && (
                  <div className="pt-1">
                    <p className="text-danger-600 text-[14px]">{errors.interest.message}</p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="name" className="block mb-1 text-[14px] text-[#6B6B74]">
                  {t("community.name")}
                </label>
                <Input id="name" {...register("name")} className={errors.name ? "border-danger-600" : ""}/>
                {errors.name && (
                 <div className="pt-1">
                    <p className="text-danger-600 text-[14px]">{errors.name.message}</p>
                 </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-[14px] text-[#6B6B74]">
                  {t("community.email")}
                </label>
                <Input id="email" {...register("email")} className={errors.email ? "border-danger-600" : ""}/>
                {errors.email && (
                    <div className="pt-1">
                      <p className="text-danger-600 text-[14px]">{errors.email.message}</p>
                    </div>
                )}
              </div>

              <div>
                <label htmlFor="institute" className="block mb-1 text-[14px] text-[#6B6B74]">
                  {t("community.institute")}
                </label>
                <Input id="institute" {...register("institute")} className={errors.institute ? "border-danger-600" : ""}/>
                {errors.institute && (
                  <div className="pt-1">
                    <p className="text-danger-600 text-[14px]">{errors.institute.message}</p>
                  </div>
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
        </div>
      </section>
      <Footer
        ministry={t("common.names.kd")}
        descriptionWithNewlines={t("Footer.address")}
        links={[
          {
            title: t("Footer.designSystem"),
            links: [
              {
                name: t("Footer.designStandards"),
                href: links.standard,
              },
              {
                name: t("Footer.figmaBeta"),
                href: links.figma,
              },
            ],
          },
          {
            title: t("Footer.openSource"),
            links: [
              {
                name: t("Footer.github"),
                href: links.github,
              },
              {
                name: t("Footer.figma"),
                href: links.figma,
              },
            ],
          },
        ]}
      />
    </>
  );
}

