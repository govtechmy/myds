import SearchBarIcons from "@/components/icon/Searchbar";
import { iconDataList } from "@/components/icon/IconDataList";
import IconsHeroDesktopLight from "@/icons/icons-hero-desktop-light";
import IconsHeroDesktopDark from "@/icons/icons-hero-desktop-dark";
import IconsHeroMobileLight from "@/icons/icons-hero-mobile-light";
import IconsHeroMobileDark from "@/icons/icons-hero-mobile-dark";
import TabFiltered from "@/components/icon/TabFiltered";
import { SearchProvider } from "@/components/icon/SearchProvider";
import { getRosetta } from "@/locales/_server";

export default function IconHomepage({
  params,
}: {
  params: { lang: "en" | "ms" };
}) {
  const { t } = getRosetta(params.lang);
  return (
    <SearchProvider>
      <div className="container">
        <div className="relative">
          <IconsHeroDesktopLight className="img-light hidden h-[300px] w-full min-[640px]:block" />
          <IconsHeroDesktopDark className="img-dark hidden h-[300px] w-full min-[640px]:block" />
          <IconsHeroMobileLight className="img-light h-[300px] w-full max-[380px]:h-[250px] min-[639px]:hidden" />
          <IconsHeroMobileDark className="img-dark h-[300px] w-full max-[380px]:h-[250px] min-[639px]:hidden" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center">
            <h1 className="px-4.5 max-[500px]:text-heading-2xs max-[600px]:text-heading-xs max-w-[600px] max-[380px]:text-sm">
              {t("icons.title")}{" "}
              <span className="text-txt-primary">{t("icons.title2")}</span>
            </h1>
            <div className="px-4.5 w-full max-w-[600px] py-8">
              <SearchBarIcons params={params} iconDataList={iconDataList} />
            </div>
          </div>
        </div>

        <TabFiltered params={params} />
      </div>
    </SearchProvider>
  );
}
