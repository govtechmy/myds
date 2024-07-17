"use client";

import { Button } from "@/components/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { locales } from "@/i18n-config";
import ChevronDown from "@/icons/chevron-down";
import Globe from "@/icons/globe";
import { usePathname, useRouter } from "@/lib/i18n";
import { SelectIcon } from "@radix-ui/react-select";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function Locale({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const onValueChange = (locale: string) => {
    startTransition(() => {
      router.replace(`${pathname}${searchParams ? `?${searchParams}` : ""}`, {
        locale,
        scroll: false,
      });
    });
  };

  const name: Record<string, { full: string; short: string }> = {
    "en-MY": {
      full: "English",
      short: "EN",
    },
    "ms-MY": {
      full: "Bahasa Melayu",
      short: "BM",
    },
  };

  return (
    <Select value={locale} onValueChange={onValueChange}>
      <SelectTrigger asChild>
        <Button variant="secondary">
          <Globe />
          <SelectValue>{name[locale].short}</SelectValue>
          <SelectIcon>
            <ChevronDown />
          </SelectIcon>
        </Button>
      </SelectTrigger>
      <SelectContent className="w-full" align="end">
        {locales.map((l) => (
          <SelectItem
            key={l}
            value={l}
            className={l === locale ? "font-medium" : ""}
          >
            {name[l].full}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
