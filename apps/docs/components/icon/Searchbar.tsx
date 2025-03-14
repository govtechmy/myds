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
import type { IconData } from "./IconDataList";
import { SearchContext } from "./SearchProvider";

export default function SearchBarIcons({
  iconDataList,
}: {
  iconDataList: IconData[];
}) {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("SearchBarIcons must be used within a SearchProvider");
  }

  const { query, setQuery, setResults } = searchContext;
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);

  useEffect(() => {
    const filterIcons = (
      query: string,
      conditions: ((iconType: string) => boolean)[],
    ) => {
      return iconDataList.filter(({ type, filename }) => {
        const iconData = `${type} ${filename}`.toLowerCase();
        const iconType = type.toLowerCase();
        return (
          iconData.includes(query.toLowerCase()) &&
          conditions.every((condition) => condition(iconType))
        );
      });
    };

    const resultAll = filterIcons(query, [() => true]);
    const resultGeneric = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("generic"),
      (iconType) => !iconType.includes("filled"),
    ]);
    const resultFilled = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("filled"),
    ]);
    const resultWYSIWYG = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("wysiwyg"),
    ]);
    const resultSocialMedia = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("social media"),
    ]);
    const resultMedia = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => !iconType.includes("social"),
      (iconType) => iconType.includes("media"),
    ]);
    const resultLegacyGeneric = filterIcons(query, [
      (iconType) => iconType.includes("legacy"),
    ]);

    setResults({
      all: resultAll,
      generic: resultGeneric,
      filled: resultFilled,
      wysiwyg: resultWYSIWYG,
      socialMedia: resultSocialMedia,
      media: resultMedia,
      legacyGeneric: resultLegacyGeneric,
    });
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
            placeholder="Search by name"
            value={query}
            onValueChange={(newValue) => setQuery(newValue)}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          {query && <SearchBarClearButton onClick={() => setQuery("")} />}
          {!hasFocus && (
            <SearchBarHint className="hidden sm:flex">
              Press <Pill size="small">/</Pill> to search
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
