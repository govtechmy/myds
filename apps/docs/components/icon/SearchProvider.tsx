"use client";

import { createContext, useState, ReactNode, useMemo } from "react";
import { IconData, IconType, icon_list } from "./IconDataList";

export type GroupedIcons = Record<IconType | "all", IconData[]>;

type SearchContextType = {
  query: string;
  setQuery: (query: string) => void;
  result: IconData[];
  setType: (type: IconType | "all") => void;
};

export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<IconType | "all">("all");

  const grouped_icons = useMemo(() => {
    const group: GroupedIcons = {
      all: [],
      generic: [],
      filled: [],
      wysiwyg: [],
      social_media: [],
      media: [],
      legacy: [],
    };

    for (const icon of icon_list) {
      group.all.push(icon);

      switch (icon.type) {
        case "generic":
          group.generic.push(icon);
          break;
        case "filled":
          group.filled.push(icon);
          break;
        case "wysiwyg":
          group.wysiwyg.push(icon);
          break;
        case "social_media":
          group.social_media.push(icon);
          break;
        case "media":
          group.media.push(icon);
          break;
        case "legacy":
          group.legacy.push(icon);
          break;
      }
    }
    return group;
  }, []);

  const result = useMemo(() => {
    return grouped_icons[type].filter((icon) => {
      return icon.name.includes(query.toLowerCase());
    });
  }, [query, type, grouped_icons]);

  return (
    <SearchContext.Provider value={{ query, setQuery, setType, result }}>
      {children}
    </SearchContext.Provider>
  );
}
