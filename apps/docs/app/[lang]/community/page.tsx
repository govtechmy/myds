"use client";

import { Input } from "@govtechmy/myds-react/input";
import { Callout, CalloutTitle } from "@govtechmy/myds-react/callout";
import { getRosetta } from "@/locales/_server";
import Footer from "@/components/Footer";
import { links } from "@/lib/constant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
      .regex(/^[^\s@]+@[^\s@]+\.gov\.my$/, { message: t("community.form.invalidEmail") }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
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
          token: "mySuperSecretToken123",
          dateTime: new Date().toISOString(),
          ...data,
        }),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert(`Thank you, ${data.name}! We'll contact you at ${data.email}.`);
        reset();
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (err) {
      alert("Failed to submit. Please try again later.");
      console.error("Submission error:", err);
    }
  };

  return (
    <>
      <section className="min-h-[700px] bg-bg-gray-50 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="lg:w-3/5">
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

          <div className="bg-bg-white lg:w-2/5 p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 text-[14px] text-[#6B6B74]">
                  {t("community.name")}
                </label>
                <Input id="name" {...register("name")} />
                {errors.name && (
                  <div className="pt-3">
                    <Callout variant="danger">
                      <CalloutTitle className="font-normal">{errors.name.message}</CalloutTitle>
                    </Callout>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-[14px] text-[#6B6B74]">
                  {t("community.email")}
                </label>
                <Input id="email" {...register("email")} />
                {errors.email && (
                  <div className="pt-3">
                    <Callout variant="danger">
                      <CalloutTitle className="font-normal">{errors.email.message}</CalloutTitle>
                    </Callout>
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
        descriptionWithNewlines={`Aras 13, 14 dan 15, Blok Menara, Menara Usahawan
        No. 18, Persiaran Perdana, Presint 2
        Pusat Pentadbiran Kerajaan Persekutuan
        62000 Putrajaya, Malaysia.`}
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
