"use client";
import { Tabs, TabsList, TabsTrigger } from "@govtechmy/myds-react/tabs";
import { clx } from "@govtechmy/myds-react/utils";
import { IconType } from "./IconDataList";
import { FunctionComponent, useContext } from "react";
import { SearchContext } from "./SearchProvider";
import { getRosetta } from "@/locales/_server";
import { useParams } from "next/navigation";

const TabFiltered: FunctionComponent = () => {
  const params = useParams();
  const { t } = getRosetta(params.lang as "en" | "ms");
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("SearchContext must be used within a SearchProvider");

  const { setType } = context;

  return (
    <Tabs
      size="medium"
      variant="pill"
      defaultValue="all"
      onValueChange={(value) => setType(value as IconType)}
    >
      <TabsList
        width="full"
        className={clx(
          "no-scrollbar flex-grow items-center justify-center overflow-x-scroll scroll-smooth text-nowrap max-md:justify-start",
        )}
      >
        <TabsTrigger value="all">{t("tabfilter.all")}</TabsTrigger>
        <TabsTrigger value="generic">{t("tabfilter.generic")}</TabsTrigger>
        <TabsTrigger value="filled">{t("tabfilter.filled")}</TabsTrigger>
        <TabsTrigger value="wysiwyg">{t("tabfilter.wysiwyg")}</TabsTrigger>
        <TabsTrigger value="social_media">
          {t("tabfilter.socialmedia")}
        </TabsTrigger>
        <TabsTrigger value="media">{t("tabfilter.media")}</TabsTrigger>
        <TabsTrigger value="legacy">{t("tabfilter.legacy")}</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

TabFiltered.displayName = "TabFiltered";

export default TabFiltered;
