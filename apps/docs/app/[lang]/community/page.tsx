"use client";

import { useState } from "react";
import { getRosetta } from "@/locales/_server";
import CommunityAnnounceBar from "@/components/community/community-announce-bar";
import CommunityHero from "@/components/community/community-hero";
import CommunityForm from "@/components/community/community-form";
import Footer from "@/components/Footer";
import CheckCircle from "@/icons/check-circle";
import { links } from "@/lib/constant";
import Modal from "@/components/community/modal";

export default function CommunityPage({
  params,
}: {
  params: { lang: "en" | "ms" };
}) {
  const [showModal, setShowModal] = useState(false);

  const { t } = getRosetta(params.lang);

  return (
    <>
      <CommunityAnnounceBar
        infoTitle={t("community.infoTitle")}
        myGovOnlyInfo={t("community.myGovOnlyInfo")}
      />

      <CommunityHero
        title={t("community.title")}
        subtitle1={t("community.subtitle")}
        subtitle2={t("community.subtitle2")}
        subtitle3={t("community.subtitle3")}
      >
        <div className="bg-bg-white rounded-xl border p-8">
          <CommunityForm
            interestLabel={t("community.interest")}
            selectPlaceholder={t("community.form.selectPlaceholder")}
            interestOptions={{
              uiux: t("community.form.interest.option1"),
              frontend: t("community.form.interest.option2"),
              operation: t("community.form.interest.option3"),
            }}
            nameLabel={t("community.name")}
            emailLabel={t("community.email")}
            instituteLabel={t("community.institute")}
            submitLabel={t("community.submit")}
            errors={{
              requiredName: t("community.form.requiredName"),
              invalidName: t("community.form.invalidName"),
              requiredEmail: t("community.form.requiredEmail"),
              invalidEmail: t("community.form.invalidEmail"),
              requiredInstitute: t("community.form.requiredInstitute"),
              requiredInterest: t("community.form.requiredInterest"),
              failError: t("community.form.failError"),
              success1: t("community.form.success1"),
              success2: t("community.form.success2"),
            }}
            onSubmitComplete={() => setShowModal(true)}
          />
        </div>
      </CommunityHero>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="space-y-4 p-6 text-center">
            <div className="mx-auto h-11 w-11 text-green-600">
              <CheckCircle className="h-full w-full" />
            </div>
            <h3 className="text-lg font-bold">{t("community.modal.title")}</h3>
            <p className="text-sm text-gray-600">
              {t("community.modal.content")}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primary-600 hover:bg-primary-700 w-full rounded px-4 py-2 text-white"
            >
              {t("community.modal.close")}
            </button>
          </div>
        </Modal>
      )}

      <Footer
        ministry={t("common.names.kd")}
        descriptionWithNewlines={t("Footer.address")}
        links={[
          {
            title: t("Footer.designSystem"),
            links: [
              { name: t("Footer.designStandards"), href: links.standard },
              { name: t("Footer.figmaBeta"), href: links.figma },
            ],
          },
          {
            title: t("Footer.openSource"),
            links: [
              { name: t("Footer.github"), href: links.github },
              { name: t("Footer.figma"), href: links.figma },
            ],
          },
        ]}
      />
    </>
  );
}
