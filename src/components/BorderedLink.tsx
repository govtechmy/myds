import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  className?: string;
  href: string;
  children: ReactNode;
};

export default function BorderedLink(props: Props) {
  const t = useTranslations();

  return (
    <a
      href={props.href}
      target={props.href.startsWith("#") ? "_self" : "_blank"}
      className={cn(
        "text-black-700 flex h-full flex-row items-center justify-center gap-0.5 rounded-lg border border-[#E4E4E7] px-3 py-2 text-center text-[16px] leading-6 hover:opacity-75",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
}
