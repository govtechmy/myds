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
    <section className="relative min-h-[700px] flex items-center justify-center py-4 px-4 overflow-hidden z-0">
        
      <Image
        src="/common/hero.svg"
        alt="Hero"
        fill
        priority
        className="object-cover img-light opacity-50"
      />
      <Image
        src="/common/hero-dark.svg"
        alt="Hero"
        fill
        priority
        className="object-cover hidden dark:block img-dark opacity-50"
      />

          <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:items-center gap-10 z-10">
              <div className="lg:w-3/5 backdrop-blur-md">
                  <h2 className="text-4xl font-bold text-black-900 mb-6">{title}</h2>
                  <p className="text-xl text-black-600 mb-4">{subtitle1}</p>
                  <p className="text-base text-black-600">{subtitle2}</p>
                  <p className="text-base text-black-600 mt-4 font-semibold">{subtitle3}</p>
              </div>

              {children && <div className="lg:w-2/5">{children}</div>}
          </div>
          
    </section>
  );
}
