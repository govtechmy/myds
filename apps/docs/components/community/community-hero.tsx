"use client";

import Image from "next/image";

export default function CommunityHero({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  children,
}: {
  title: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative z-0 flex min-h-[700px] items-center justify-center overflow-hidden px-4 py-4">
      <Image
        src="/common/hero.svg"
        alt="Hero"
        fill
        priority
        className="img-light object-cover opacity-30 blur-sm"
      />
      <Image
        src="/common/hero-dark.svg"
        alt="Hero"
        fill
        priority
        className="img-dark hidden object-cover opacity-30 blur-sm dark:block"
      />

      <div className="z-10 flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="backdrop-blur-md lg:w-3/5">
          <h2 className="text-black-900 mb-6 text-4xl font-bold">{title}</h2>
          <p className="text-black-600 mb-4 text-xl">{subtitle1}</p>
          <p className="text-black-600 text-base">{subtitle2}</p>
          <p className="text-black-600 mt-4 text-base font-semibold">
            {subtitle3}
          </p>
        </div>

        {children && <div className="lg:w-2/5">{children}</div>}
      </div>
    </section>
  );
}
