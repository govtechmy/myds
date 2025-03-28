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
      <div className="flex h-[46px] justify-center">
        <TabsList
          width="full"
          className={clx(
            "no-scrollbar h-full flex-grow items-center justify-center overflow-x-scroll scroll-smooth text-nowrap max-md:justify-start",
          )}
        >
          <TabsTrigger
            className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
            value="all"
          >
            {t("tabfilter.all")}
          </TabsTrigger>
          <TabsTrigger
            className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
            value="generic"
          >
            {t("tabfilter.generic")}
          </TabsTrigger>
          <TabsTrigger
            className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
            value="filled"
          >
            {t("tabfilter.filled")}
          </TabsTrigger>
          <TabsTrigger
            className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
            value="wysiwyg"
          >
            {t("tabfilter.wysiwyg")}
          </TabsTrigger>
          <TabsTrigger
            className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
            value="social_media"
          >
            {t("tabfilter.socialmedia")}
          </TabsTrigger>
          <TabsTrigger
            className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
            value="media"
          >
            {t("tabfilter.media")}
          </TabsTrigger>
          <TabsTrigger
            className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
            value="legacy"
          >
            {t("tabfilter.legacy")}
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
};

TabFiltered.displayName = "TabFiltered";

export default TabFiltered;
