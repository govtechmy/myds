import SearchBarIcons from "@/components/icon/Searchbar";
import { iconDataList } from "@/components/icon/IconDataList";
import IconsHeroDesktopLight from "@/icons/icons-hero-desktop-light";
import IconsHeroDesktopDark from "@/icons/icons-hero-desktop-dark";
import { clx } from "@govtechmy/myds-react/utils";

export default function Hello() {
  return (
    <div className="container">
      <div className="relative">
        <IconsHeroDesktopLight className="icon-hero-desktop-light h-auto w-full py-8"></IconsHeroDesktopLight>
        <IconsHeroDesktopDark className="icon-hero-desktop-dark h-auto w-full py-8"></IconsHeroDesktopDark>

        <h1
          className={clx(
            "absolute inset-0 flex flex-col items-center justify-center text-center",
            "max-[500px]:text-heading-2xs max-[600px]:text-heading-xs",
          )}
        >
          Beautifully crafted SVG icons,
          <span className="text-txt-black-900">
            made for{" "}
            <span className="text-txt-primary">effortless integration</span>
          </span>
        </h1>
      </div>
      <SearchBarIcons iconDataList={iconDataList}></SearchBarIcons>
    </div>
  );
}
