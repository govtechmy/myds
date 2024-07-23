import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";

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
  const format = useFormatter();
  const t = useTranslations();

  const className = {
    link: "text-sm text-black-700 [text-underline-position:from-font] hover:text-black-900 hover:underline",
  };

  return (
    <div className="border-t bg-background-50 py-8 lg:py-16">
      <div className="divide-y-outline-200 container divide-y max-sm:px-0">
        <div className="flex flex-col gap-6 pb-8 max-sm:px-4.5 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4 lg:gap-4.5">
            <div className="flex items-center gap-x-2.5">
              <Image
                src="/jata-negara.png"
                width={28}
                height={28}
                className="h-auto w-auto"
                alt="Jata Negara"
              />
              <div>
                <h6 className="whitespace-nowrap font-semibold">
                  {props.ministry}
                </h6>
              </div>
            </div>
            <p
              className="text-sm text-black-700"
              dangerouslySetInnerHTML={{
                __html: props.descriptionWithNewlines.replaceAll("\n", "<br/>"),
              }}
            ></p>
          </div>
          <div className="flex flex-col gap-6 text-sm lg:flex-row">
            {props.links.map((item, index) => (
              <div className="space-y-2" key={index}>
                <p className="font-semibold">{item.title}</p>
                <div className="grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2">
                  {item.links.map(({ name, href }) => (
                    <a
                      key={name}
                      className={className.link}
                      target="_blank"
                      rel="noopenner noreferrer"
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

        <div className="flex flex-col justify-between gap-6 pt-8 text-sm text-dim-500 max-sm:px-4.5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <p>
              {t("Footer.copyright")} © {new Date().getFullYear()}
            </p>
          </div>
          <span>
            {t("Footer.last_update") +
              ": " +
              format.dateTime(new Date(process.env.LAST_UPDATED), {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Asia/Kuala_Lumpur",
              })}
          </span>
        </div>
      </div>
    </div>
  );
}
