"use client";

import {
  SearchBar,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBarSearchButton,
  SearchBarClearButton,
  SearchBarHint,
} from "@govtechmy/myds-react/search-bar";
import { Pill } from "@govtechmy/myds-react/pill";
import { useEffect, useRef, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@govtechmy/myds-react/tabs";
import type { IconData } from "./IconDataList";
import { useToast } from "@govtechmy/myds-react/hooks";
import ResultMap from "./ResultMap";

type Props = {
  iconDataList: IconData[];
};

export default function SearchBarIcons({ iconDataList }: Props) {
  const [hasFocus, setHasFocus] = useState(false);
  const [query, setQuery] = useState("");
  const { toast } = useToast();

  const filterIcons = (query: any, conditions: any) => {
    return iconDataList.filter(({ type, filename }) => {
      const iconData = `${type} ${filename}`.toLowerCase();
      const iconType = type.toLowerCase();
      return (
        iconData.includes(query.toLowerCase()) &&
        conditions.every((condition: (arg0: string) => any) =>
          condition(iconType),
        )
      );
    });
  };

  const resultAll = filterIcons(query, [() => true]);
  const resultGeneric = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("generic"),
    (iconType: string | string[]) => !iconType.includes("filled"),
  ]);
  const resultFilled = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("filled"),
  ]);
  const resultWYSIWYG = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("wysiwyg"),
  ]);
  const resultSocialMedia = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("social media"),
  ]);
  const resultMedia = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => !iconType.includes("social"),
    (iconType: string | string[]) => iconType.includes("media"),
  ]);
  const resultLegacyGeneric = filterIcons(query, [
    (iconType: string | string[]) => iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("generic"),
  ]);
  const resultLegacyBorderless = filterIcons(query, [
    (iconType: string | string[]) => iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("borderless"),
  ]);

  const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);
  const results = [
    resultAll,
    resultGeneric,
    resultFilled,
    resultWYSIWYG,
    resultSocialMedia,
    resultMedia,
    resultLegacyGeneric,
    resultLegacyBorderless,
  ];

  return (
    <div className="">
      <SearchBar
        size="large"
        onBlur={(e) => {
          const blurredByChild = e.currentTarget.contains(e.relatedTarget);
          if (blurredByChild) return;
          setHasFocus(false);
        }}
        className="pb-6"
      >
        <SearchBarInputContainer>
          <SearchBarInput
            ref={inputRef}
            placeholder="Search by name"
            value={query}
            onValueChange={setQuery}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          {query && <SearchBarClearButton onClick={() => setQuery("")} />}
          {!hasFocus && (
            <SearchBarHint className="hidden lg:flex">
              Press <Pill size="small">/</Pill> to search
            </SearchBarHint>
          )}
          <SearchBarSearchButton />
        </SearchBarInputContainer>
      </SearchBar>

      <Tabs defaultValue="2" size="medium" variant="line">
        <TabsList>
          <TabsTrigger value="1">All</TabsTrigger>
          <TabsTrigger value="2">Generic</TabsTrigger>
          <TabsTrigger value="3">Filled</TabsTrigger>
          <TabsTrigger value="4">WYSIWYG</TabsTrigger>
          <TabsTrigger value="5">Social Media</TabsTrigger>
          <TabsTrigger value="6">Media</TabsTrigger>
          <TabsTrigger value="7">Legacy: Generic</TabsTrigger>
          <TabsTrigger value="8">Legacy: Borderless</TabsTrigger>
        </TabsList>

        {results.map((result, index) => (
          <TabsContent
            key={index}
            className="py-6"
            value={(index + 1).toString()}
          >
            <ResultMap result={result} />
          </TabsContent>
        ))}
      </Tabs>
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
  }, [isFocused, ref]);

  return ref;
}
