"use client";
import SearchBarIcons from "@/components/icon/Searchbar";
import { IconData, iconDataList } from "@/components/icon/IconDataList";
import IconsHeroDesktopLight from "@/icons/icons-hero-desktop-light";
import IconsHeroDesktopDark from "@/icons/icons-hero-desktop-dark";
import { clx } from "@govtechmy/myds-react/utils";
import IconsHeroMobileLight from "@/icons/icons-hero-mobile-light";
import IconsHeroMobileDark from "@/icons/icons-hero-mobile-dark";
import TabFiltered from "@/components/icon/TabFiltered";
import { SearchProvider } from "@/components/icon/SearchProvider";
import { useState } from "react";

interface resultsProps {
  all: IconData[];
  generic: IconData[];
  filled: IconData[];
  wysiwyg: IconData[];
  socialMedia: IconData[];
  media: IconData[];
  legacyGeneric: IconData[];
}

export default function Hello() {
  const [results, setResults] = useState<resultsProps>({
    all: [],
    generic: [],
    filled: [],
    wysiwyg: [],
    socialMedia: [],
    media: [],
    legacyGeneric: [],
  });

  console.log(results);

  return (
    <SearchProvider>
      <div className="container">
        <div className="relative">
          <IconsHeroDesktopLight className="icon-hero-desktop-light h-[300px] w-full"></IconsHeroDesktopLight>
          <IconsHeroDesktopDark className="icon-hero-desktop-dark h-[300px] w-full"></IconsHeroDesktopDark>
          <IconsHeroMobileLight className="icon-hero-mobile-light h-[300px] w-full max-[380px]:h-[250px]"></IconsHeroMobileLight>
          <IconsHeroMobileDark className="icon-hero-mobile-dark h-[300px] w-full max-[380px]:h-[250px]"></IconsHeroMobileDark>
          <div
            className={clx(
              "absolute inset-0 flex flex-col items-center justify-end text-center",
            )}
          >
            <h1
              className={clx(
                "px-4.5 max-w-[600px]",
                "max-[500px]:text-heading-2xs max-[600px]:text-heading-xs max-[380px]:text-sm",
              )}
            >
              Beautifully crafted SVG icons, made for{" "}
              <span className="text-txt-primary">effortless integration</span>
            </h1>
            <div className="px-4.5 w-full max-w-[600px] py-8">
              <SearchBarIcons iconDataList={iconDataList}></SearchBarIcons>
            </div>
          </div>
        </div>
        <TabFiltered results={results}></TabFiltered>
      </div>
    </SearchProvider>
  );
}
