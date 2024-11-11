"use client";

import FlagMY from "@/icons/flag-my";
import ChevronDown from "@/icons/chevron-down";
import EncryptedLock from "@/icons/encrypted-lock";
import GovMY from "@/icons/govmy";
import SolidLock from "@/icons/solid-lock";
import { clx } from "@myds/react/utils";

import { useState } from "react";
import { getRosetta } from "@/locales/_server";
import Collapse from "./Collapse";

export default function Masthead(props: { lang: "en" | "ms" }) {
  const { t } = getRosetta(props.lang);
  const [open, setOpen] = useState(false);
  return (
    <div
      className={clx(
        "border-otl-gray-200 z-[99] border-b bg-gradient-to-b from-[84.74%] to-100%",
        open ? "from-bg-washed to-otl-gray-200" : "from-bg-washed to-bg-washed",
      )}
    >
      <div className={clx("container mx-auto xl:px-0")}>
        <button
          className="h-[2.25rem] w-full md:h-[1.75rem]"
          onClick={() => setOpen(!open)}
        >
          <div className="text-txt-primary flex flex-wrap items-center gap-1.5 text-sm/4 max-sm:justify-between sm:py-1">
            <div className="flex items-center gap-1.5">
              <FlagMY className="h-4 w-8" />
              <span className="text-txt-black-700">
                {t("Masthead.official_gov_website")}
              </span>
            </div>
            <div className="flex items-center gap-0.5 max-sm:rounded-md max-sm:px-1">
              <span className="hidden tracking-[-0.01em] text-inherit sm:block">
                {t("Masthead.how_to_identify")}
              </span>
              <ChevronDown
                className={clx("size-4 transition", open ? "rotate-180" : "")}
              />
            </div>
          </div>
        </button>
        <Collapse isOpen={open}>
          <div className="gap-4.5 pt-4.5 container grid grid-cols-1 pb-6 sm:grid-cols-2 sm:gap-6 sm:pb-8 sm:pt-6">
            <span className="text-txt-primary static text-sm sm:hidden">
              {t("Masthead.how_to_identify")}
            </span>

            <div className="flex gap-3">
              <GovMY className="text-dim-500 size-[1.5rem] shrink-0" />
              <div className="space-y-1.5">
                <p className="font-medium max-sm:text-sm">
                  {t("Masthead.official")}
                </p>
                <p className="text-txt-black-700 max-w-prose text-balance text-sm">
                  {t("Masthead.not_govmy")}
                  <span className="font-semibold">.gov.my</span>
                  {t("Masthead.close_site")}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <EncryptedLock className="text-dim-500 size-[1.5rem] shrink-0" />
              <div className="space-y-1.5">
                <p className="font-medium max-sm:text-sm">
                  {t("Masthead.secure")}
                </p>
                <div className="text-txt-black-700 max-w-prose text-balance text-sm">
                  {t("Masthead.find_lock")}{" "}
                  <SolidLock className="-ml-[3px] mb-0.5 mr-px inline size-3.5" />
                  {t("Masthead.or")}
                  <span className="font-semibold">https://</span>
                  {t("Masthead.precaution")}
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
