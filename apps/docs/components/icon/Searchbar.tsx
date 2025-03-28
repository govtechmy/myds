"use client";
import {
  useContext,
  useRef,
  useState,
  useEffect,
  FunctionComponent,
} from "react";
import {
  SearchBar,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBarSearchButton,
  SearchBarClearButton,
  SearchBarHint,
} from "@govtechmy/myds-react/search-bar";
import { Pill } from "@govtechmy/myds-react/pill";
import { SearchContext } from "./SearchProvider";
import { getRosetta } from "@/locales/_server";
import { useParams } from "next/navigation";

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
  }, [isFocused, key]);

  return ref;
}

const SearchBarIcon: FunctionComponent = () => {
  const params = useParams();
  const { t } = getRosetta(params.lang as "en" | "ms");
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("SearchBarIcons must be used within a SearchProvider");
  const { query, setQuery } = context;

  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);

  return (
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
  );
};

SearchBarIcon.displayName = "SearchBarIcon";

export default SearchBarIcon;
