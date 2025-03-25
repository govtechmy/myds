"use client";
import { useContext, useRef, useState, useEffect } from "react";
import {
  SearchBar,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBarSearchButton,
  SearchBarClearButton,
  SearchBarHint,
} from "@govtechmy/myds-react/search-bar";
import { Pill } from "@govtechmy/myds-react/pill";
import type { IconData, IconDataList } from "./IconDataList";
import { SearchContext } from "./SearchProvider";
import { getRosetta } from "@/locales/_server";

export default function SearchBarIcons({
  iconDataList,
  params,
}: {
  iconDataList: IconData[];
  params: { lang: "en" | "ms" };
}) {
  const searchContext = useContext(SearchContext);
  const { t } = getRosetta(params.lang);

  if (!searchContext) {
    throw new Error("SearchBarIcons must be used within a SearchProvider");
  }

  const { query, setQuery, setResults } = searchContext;
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);

  useEffect(() => {
    const filterIcons = (query: string) => {
      return iconDataList.filter(({ type, filename }) => {
        const iconData = `${type} ${filename}`.toLowerCase();
        return iconData.includes(query.toLowerCase());
      });
    };

    const group = GroupResultsSearch(filterIcons(query));
    setResults(group);
  }, [query, iconDataList, setResults]);

  return (
    <div>
      <SearchBar
        size="large"
        onBlur={(e) => {
          const blurredByChild = e.currentTarget.contains(e.relatedTarget);
          if (blurredByChild) return;
          setHasFocus(false);
        }}
      >
        <SearchBarInputContainer>
          <SearchBarInput
            ref={inputRef}
            placeholder={t("searchbar.searchname")}
            value={query}
            onValueChange={(newValue) => setQuery(newValue)}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          {query && <SearchBarClearButton onClick={() => setQuery("")} />}
          {!hasFocus && (
            <SearchBarHint className="hidden sm:flex">
              {t("searchbar.press")} <Pill size="small">/</Pill>{" "}
              {t("searchbar.tosearch")}
            </SearchBarHint>
          )}
          <SearchBarSearchButton />
        </SearchBarInputContainer>
      </SearchBar>
    </div>
  );
}

function useFocusOnKeyPress<T extends HTMLElement>(
  key: string,
  isFocused: boolean,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused && e.key === key) {
        ref.current?.focus();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused]);

  return ref;
}

type GroupedIcons = {
  all: IconDataList;
  generic: IconDataList;
  filled: IconDataList;
  wysiwyg: IconDataList;
  socialMedia: IconDataList;
  media: IconDataList;
  legacyGeneric: IconDataList;
};

function GroupResultsSearch(iconDataList: IconDataList) {
  const group: GroupedIcons = {
    all: [],
    generic: [],
    filled: [],
    wysiwyg: [],
    socialMedia: [],
    media: [],
    legacyGeneric: [],
  };

  for (let i = 0; i < iconDataList.length; i++) {
    const icon = iconDataList[i];
    icon.type = icon.type.toLowerCase();

    //all result
    group.all.push(icon);

    //result generic
    if (
      !icon.type.includes("legacy") &&
      icon.type.includes("generic") &&
      !icon.type.includes("filled")
    ) {
      group.generic.push(icon);
    }

    //result Filled
    if (!icon.type.includes("legacy") && icon.type.includes("filled")) {
      group.filled.push(icon);
    }

    // const resultWYSIWYG
    if (!icon.type.includes("legacy") && icon.type.includes("wysiwyg")) {
      group.wysiwyg.push(icon);
    }

    // const Social Media
    if (!icon.type.includes("legacy") && icon.type.includes("social media")) {
      group.socialMedia.push(icon);
    }

    // const Media
    if (
      !icon.type.includes("legacy") &&
      !icon.type.includes("social") &&
      icon.type.includes("media")
    ) {
      group.media.push(icon);
    }

    // const Legacy Generic
    if (icon.type.includes("legacy")) {
      group.legacyGeneric.push(icon);
    }
  }

  return group;
}
