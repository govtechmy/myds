import { FIGMA_URL, GITHUB_REPO_URL } from "@/constants";
import { Icon } from "@/icons/social-media";
import { formatDate } from "@/lib/components/utils";
import { Link } from "@/lib/i18n";
import { useTranslations } from "next-intl";
import Image from "next/image";

type FooterLinks = "open_source";

export const social_media = [
  {
    icon: <Icon.Facebook />,
    name: "Facebook",
    href: "https://www.facebook.com/KementerianDigitalMalaysia/",
  },
  { icon: <Icon.X />, name: "X", href: "https://x.com/KemDigitalMsia" },
  {
    icon: <Icon.Instagram />,
    name: "Instagram",
    href: "https://www.instagram.com/kementeriandigitalmalaysia/",
  },
  {
    icon: <Icon.Tiktok />,
    name: "Tiktok",
    href: "https://www.tiktok.com/@kementeriandigital",
  },
];

export default function Footer() {
  const t = useTranslations();

  const links: Record<FooterLinks, { name: string; href: string }[]> = {
    open_source: [
      { name: "Footer.github", href: GITHUB_REPO_URL },
      {
        name: "Footer.figma",
        href: FIGMA_URL,
      },
    ],
  };

  const className = {
    link: "text-sm text-black-700 [text-underline-position:from-font] hover:text-black-900 hover:underline",
  };

  return (
    <div className="bg-background-50 border-t py-8 lg:py-16">
      <div className="divide-y-outline-200 container divide-y max-sm:px-0">
        <div className="max-sm:px-4.5 flex flex-col gap-6 pb-8 lg:flex-row lg:justify-between">
          <div className="lg:gap-4.5 flex flex-col gap-4">
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
                  {t("common.name")}
                </h6>
              </div>
            </div>
            <p className="text-black-700 text-sm">
              Aras 13, 14 dan 15, Blok Menara, <br />
              Menara Usahawan <br />
              No. 18, Persiaran Perdana, Presint 2, <br />
              Pusat Pentadbiran Kerajaan Persekutuan, <br />
              62000 Putrajaya, Malaysia.
            </p>
            <div className="space-y-2 lg:space-y-3">
              <p className="text-sm font-semibold">{t("Footer.follow_us")}</p>
              <div className="flex gap-3">
                {social_media.map(({ icon, name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-sm lg:flex-row">
            {(Object.keys(links) as FooterLinks[]).map((category) => (
              <div className="space-y-2" key={category}>
                <p className="font-semibold">{t(`Footer.${category}`)}</p>
                <div className="grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2">
                  {links[category].map(({ name, href }) =>
                    category === "about_us" ? (
                      <Link
                        key={name}
                        className={className.link}
                        href={href}
                        scroll={false}
                      >
                        {t(`Header.${name}`)}
                      </Link>
                    ) : (
                      <a
                        key={name}
                        className={className.link}
                        target="_blank"
                        rel="noopenner noreferrer"
                        href={href}
                      >
                        {t(name)}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-dim-500 max-sm:px-4.5 flex flex-col justify-between gap-6 pt-8 text-sm lg:flex-row">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <p>
              {t("Footer.copyright")} © {new Date().getFullYear()}
            </p>
            <span className="bg-outline-300 hidden h-3 w-px lg:block"></span>
            <div className="text-black-700 flex flex-wrap gap-x-3 gap-y-2">
              {["disclaimer", "privacy_policy"].map((link) => (
                <Link
                  key={link}
                  className="text-black-700 hover:text-black-900 text-sm [text-underline-position:from-font] hover:underline"
                  href={link}
                >
                  {t(`Footer.${link}`)}
                </Link>
              ))}
            </div>
          </div>
          <span>
            {t("Footer.last_update") +
              ": " +
              formatDate(process.env.LAST_UPDATED)}
          </span>
        </div>
      </div>
    </div>
  );
}
