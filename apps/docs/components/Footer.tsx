"use client";
import { RosettaContext } from "@/locales/_client";
import Image from "next/image";
import { useContext } from "react";

type Props = {
  ministry: string;
  descriptionWithNewlines: string;
  links: {
    title: string;
    links: {
      name: string;
      href: string;
    }[];
  }[];
};

export default function Footer(props: Props) {
  const { t } = useContext(RosettaContext);

  return (
    <div className="bg-bg-gray-50 border-otl-gray-200 border-t py-8 lg:py-16">
      <div className="divide-otl-gray-200 container mx-auto divide-y max-sm:px-0">
        <div className="max-sm:px-4.5 flex flex-col gap-6 pb-8 lg:flex-row lg:justify-between">
          <div className="lg:gap-4.5 flex flex-col gap-4">
            <div className="flex items-center gap-x-2.5">
              <Image
                src="/common/jata-negara.png"
                width={28}
                height={28}
                alt="Jata Negara"
              />
              <span className="whitespace-nowrap font-semibold text-inherit">
                {props.ministry}
              </span>
            </div>
            <p className="text-black-700 whitespace-pre-line text-sm">
              {props.descriptionWithNewlines}
            </p>
          </div>
          <div className="flex flex-col gap-6 text-sm lg:flex-row">
            {props.links.map((item, index) => (
              <div className="space-y-2" key={index}>
                <p className="font-semibold">{item.title}</p>
                <div className="grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2">
                  {item.links.map(({ name, href }) => (
                    <a
                      key={name}
                      className="text-black-700 hover:text-black-900 text-sm [text-underline-position:from-font] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={href}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-dim-500 max-sm:px-4.5 flex flex-col justify-between gap-6 pt-8 text-sm lg:flex-row">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <p>
              {t("Footer.copyright") || "Hak Cipta Terpelihara"} ©{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
