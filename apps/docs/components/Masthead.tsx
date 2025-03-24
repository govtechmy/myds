"use client";

import EncryptedLock from "@/icons/encrypted-lock";
import GovMY from "@/icons/govmy";
import SolidLock from "@/icons/solid-lock";

import { getRosetta } from "@/locales/_server";
import {
  Masthead,
  MastheadContent,
  MastheadHeader,
  MastheadSection,
  MastheadTitle,
  MastheadTrigger,
} from "@govtechmy/myds-react/masthead";

const MastheadExample = (props: { lang: "en" | "ms" }) => {
  const { t } = getRosetta(props.lang);
  return (
    <Masthead>
      <MastheadHeader>
        <MastheadTitle>{t("Masthead.official_gov_website")}</MastheadTitle>
        <MastheadTrigger>{t("Masthead.how_to_identify")}</MastheadTrigger>
      </MastheadHeader>
      <MastheadContent>
        <MastheadSection icon={<GovMY />} title={t("Masthead.official")}>
          {t("Masthead.not_govmy")} <b>.gov.my</b>
          {t("Masthead.close_site")}
        </MastheadSection>
        <MastheadSection icon={<EncryptedLock />} title={t("Masthead.secure")}>
          {t("Masthead.find_lock")} <SolidLock className="inline-block" />{" "}
          {t("Masthead.or")} <b>https://</b> {t("Masthead.precaution")}
        </MastheadSection>
      </MastheadContent>
    </Masthead>
  );
};

export default MastheadExample;
