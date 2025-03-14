"use client";
import SearchBarIcons from "@/components/icon/Searchbar";
import { iconDataList } from "@/components/icon/IconDataList";
import IconsHeroDesktopLight from "@/icons/icons-hero-desktop-light";
import IconsHeroDesktopDark from "@/icons/icons-hero-desktop-dark";
import IconsHeroMobileLight from "@/icons/icons-hero-mobile-light";
import IconsHeroMobileDark from "@/icons/icons-hero-mobile-dark";
import TabFiltered from "@/components/icon/TabFiltered";
import { SearchProvider } from "@/components/icon/SearchProvider";

export default function Hello() {
  return (
    <SearchProvider>
      <div className="container">
        <div className="relative">
          <IconsHeroDesktopLight className="icon-hero-desktop-light h-[300px] w-full" />
          <IconsHeroDesktopDark className="icon-hero-desktop-dark h-[300px] w-full" />
          <IconsHeroMobileLight className="icon-hero-mobile-light h-[300px] w-full max-[380px]:h-[250px]" />
          <IconsHeroMobileDark className="icon-hero-mobile-dark h-[300px] w-full max-[380px]:h-[250px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center">
            <h1 className="px-4.5 max-[500px]:text-heading-2xs max-[600px]:text-heading-xs max-w-[600px] max-[380px]:text-sm">
              Beautifully crafted SVG icons, made for{" "}
              <span className="text-txt-primary">effortless integration</span>
            </h1>
            <div className="px-4.5 w-full max-w-[600px] py-8">
              <SearchBarIcons iconDataList={iconDataList} />
            </div>
          </div>
        </div>

        <TabFiltered />
      </div>
    </SearchProvider>
  );
}
