"use client";

import Collapse from "@/components/Collapse";
import Checkmark14PointStar from "@/icons/checkmark-14-point-star";
import ChevronDown from "@/icons/chevron-down";
import GovMY from "@/icons/govmy";
import Lock from "@/icons/lock";
import SolidLock from "@/icons/solid-lock";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Masthead() {
  const t = useTranslations("Masthead");
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "z-[99]",
        open
          ? "from-washed-100 to-outline-200 bg-gradient-to-b from-[84.74%] to-100%"
          : "bg-washed-100",
      )}
    >
      <div className="container">
        <div className="text-brand-700 flex flex-wrap items-center gap-1.5 py-1.5 text-sm leading-4">
          <Checkmark14PointStar className="size-4 sm:size-5" />
          <span className="text-black-700">{t("official_gov_website")}</span>
          <button
            className="flex items-center gap-0.5"
            onClick={() => setOpen(!open)}
          >
            {t("how_to_identify")}
            <ChevronDown
              className={cn(
                "size-4 transition duration-200",
                open ? "rotate-180" : "",
              )}
            />
          </button>
        </div>
        <Collapse isOpen={open}>
          <div className="grid grid-cols-1 gap-6 pb-8 pt-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <GovMY className="text-foreground-success shrink-0" />
              <div className="space-y-1.5">
                <p className="font-medium">{t("official")}</p>
                <p className="text-black-700 max-w-prose text-balance text-sm">
                  {t("not_govmy")}
                  <span className="font-semibold">.gov.my</span>
                  {t("close_site")}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Lock className="text-foreground-success shrink-0" />
              <div className="space-y-1.5">
                <p className="font-medium">{t("secure")}</p>
                <div className="text-black-700 max-w-prose text-balance text-sm">
                  {t("find_lock")} <SolidLock className="inline size-4" />{" "}
                  {t("or")}
                  <span className="font-semibold">https://</span>
                  {t("precaution")}
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
