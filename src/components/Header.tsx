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
import CrossX from "@/icons/cross-x";
import HamburgerMenu from "@/icons/hamburger-menu";
import { Link, usePathname } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Suspense, useState } from "react";
import FigmaLink from "./FigmaLink";

export function Header({ locale }: { locale: string }) {
  const t = useTranslations();
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href) && href !== "/";
  const navItems = [
    { key: "Header.about", href: "#about" },
    { key: "Header.our_plan", href: "#ourplan" },
    { key: "common.contribute", href: "#contribute" },
  ];

  const [showMenu, setMenu] = useState<boolean>(false);

  return (
    <header className="bg-background lg:bg-background/80 sticky top-0 z-50 lg:border-b lg:backdrop-blur-[30px]">
      <div className="bg-background container flex w-full items-center justify-between gap-3 py-3 max-lg:border-b lg:gap-4 lg:bg-transparent">
        <Link href="/" className="flex h-full flex-none items-center gap-2.5">
          {/* TODO: Use webp */}
          <Image width={95} height={32} src="/logo.svg" alt="Logo" />
          <Image
            width={31}
            height={9}
            src="/label-beta.svg"
            alt="Beta software"
          />
        </Link>

        <Sheet open={showMenu} onOpenChange={setMenu}>
          <SheetContent
            side="top"
            className="absolute top-full -z-10 flex flex-col gap-0 rounded-b-xl p-3 lg:hidden"
          >
            {navItems.map(({ key, href }) => (
              <SheetClose asChild key={key}>
                <Link
                  href={href}
                  data-state={isActive(href) ? "open" : "close"}
                  className={cn(
                    buttonVariants({ variant: "tertiary", size: "md" }),
                    "data-[state=open]:bg-washed-100 w-full justify-start",
                  )}
                >
                  {t(key)}
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
            {navItems.map(({ key, href }) => (
              <NavigationMenu.Item key={key}>
                <Link
                  href={href}
                  data-state={isActive(href) ? "open" : "close"}
                  className={cn(
                    buttonVariants({ variant: "tertiary" }),
                    "data-[state=open]:bg-washed-100 w-max bg-transparent transition-colors",
                  )}
                >
                  {t(key)}
                </Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <FigmaLink className="hidden h-[32px] gap-1 text-[14px] leading-5 sm:block" />
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
