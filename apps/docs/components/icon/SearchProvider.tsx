"use client";

import { createContext, useState, ReactNode } from "react";
import type { IconData } from "./IconDataList";

type SearchResults = {
  all: IconData[];
  generic: IconData[];
  filled: IconData[];
  wysiwyg: IconData[];
  socialMedia: IconData[];
  media: IconData[];
  legacyGeneric: IconData[];
};

type SearchContextType = {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResults;
  setResults: (results: SearchResults) => void;
};

export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [results, setResultsState] = useState<SearchResults>({
    all: [],
    generic: [],
    filled: [],
    wysiwyg: [],
    socialMedia: [],
    media: [],
    legacyGeneric: [],
  });

  // Prevent unnecessary re-renders by only updating if results change
  const setResults = (newResults: SearchResults) => {
    setResultsState((prevResults) =>
      JSON.stringify(prevResults) !== JSON.stringify(newResults)
        ? newResults
        : prevResults,
    );
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
}
