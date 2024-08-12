"use client";

import { Button, buttonVariants } from "@/components/Button";
import Locale from "@/components/Locale";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
} from "@/components/Sheet";
import { FIGMA_URL } from "@/constants";
import CrossX from "@/icons/cross-x";
import IconFigma from "@/icons/figma";
import IconNewTab from "@/icons/new-tab";
import HamburgerMenu from "@/icons/hamburger-menu";
import { Link, usePathname } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { VariantProps } from "class-variance-authority";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode, Suspense, useState } from "react";
import colors from "tailwindcss/colors";
import FigmaLink from "./FigmaLink";

type NavItem = {
  href: string;
  component: ReactNode;
  target?: string;
  sheetOnly?: boolean;
  variant: VariantProps<typeof buttonVariants>["variant"];
};

export function Header({ locale }: { locale: string }) {
  const t = useTranslations();
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href) && href !== "/";
  const navItems: NavItem[] = [
    {
      href: "#about",
      component: <>{t("Header.about")}</>,
      variant: "tertiary",
    },
    {
      href: "#ourplan",
      component: <>{t("Header.our_plan")}</>,
      variant: "tertiary",
    },
    {
      href: "#contribute",
      component: <>{t("common.contribute")}</>,
      variant: "tertiary",
    },
    {
      href: FIGMA_URL,
      target: "_blank",
      component: (
        <>
          <IconFigma color={colors.blue[600]} />
          <div className="text-brand-600">{t("common.figma.explore")}</div>
          <IconNewTab color={colors.blue[600]} className="ml-auto" />
        </>
      ),
      sheetOnly: true,
      variant: "tertiary-colour",
    },
  ];

  const [showMenu, setMenu] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-background lg:border-b lg:bg-background/80 lg:backdrop-blur-[30px]">
      <div className="container flex w-full items-center justify-between gap-3 bg-background py-3 max-lg:border-b lg:gap-4 lg:bg-transparent xl:px-0">
        <a href="#" className="flex h-full flex-none items-center">
          <Image width={32} height={32} src="/logo.svg" alt="Logo" />
          <h1 className="ml-[0.625rem] text-[1.125rem] font-semibold leading-[1.625rem]">
            {t("app.name")}
          </h1>
          <span className="ml-[0.5rem] text-[0.75rem] font-semibold uppercase leading-[1.125rem] text-tag-300">
            {t("common.beta")}
          </span>
        </a>

        <Sheet open={showMenu} onOpenChange={setMenu}>
          <SheetContent
            side="top"
            className="absolute top-full -z-10 flex flex-col gap-0 rounded-b-xl p-3 lg:hidden"
          >
            {navItems.map(({ component, href, target, variant }, i) => (
              <SheetClose asChild key={i}>
                <Link
                  href={href}
                  target={target || "self"}
                  data-state={isActive(href) ? "open" : "close"}
                  className={cn(
                    buttonVariants({
                      variant,
                      size: "md",
                    }),
                    "w-full justify-start gap-x-[0.5rem] text-[1rem] leading-[1.5rem] lg:data-[state=open]:bg-washed-100",
                  )}
                >
                  {component}
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
          <SheetPortal>
            <SheetOverlay className="z-40" />
          </SheetPortal>
        </Sheet>

        <NavigationMenu.Root className="z-10 hidden w-full items-center lg:flex">
          <NavigationMenu.List className="group flex list-none items-center justify-center space-x-1">
            {navItems
              .filter((item) => !item.sheetOnly)
              .map(({ component, href }, i) => (
                <NavigationMenu.Item key={i}>
                  <Link
                    href={href}
                    data-state={isActive(href) ? "open" : "close"}
                    className={cn(
                      buttonVariants({ variant: "tertiary" }),
                      "w-max bg-transparent transition-colors data-[state=open]:bg-washed-100",
                    )}
                  >
                    {component}
                  </Link>
                </NavigationMenu.Item>
              ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <FigmaLink size="small" className="hidden h-[2rem] sm:block" />
          <Suspense>
            <Locale locale={locale} />
          </Suspense>
          <Button
            variant="tertiary"
            size="icon"
            className={cn("block lg:hidden", showMenu && "bg-washed-100")}
            onClick={() => setMenu(!showMenu)}
          >
            {showMenu ? <CrossX /> : <HamburgerMenu />}
          </Button>
        </div>
      </div>
    </header>
  );
}
