"use client";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  TiktokIcon,
  LinkedinIcon,
} from "@govtechmy/myds-react/icon";

import {
  Footer,
  FooterSection,
  FooterLogo,
  SiteInfo,
} from "@govtechmy/myds-react/footer";
import { Link } from "@govtechmy/myds-react/link";

export const FooterComponent = () => {
  return (
    <>
      <Footer>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-row justify-center">
            <div className="mb-5 flex flex-col items-center justify-center gap-y-4">
              SEBUAH INISIATIF
              <FooterLogo
                logo={
                  <img
                    src="/assets/logo-govtech.png"
                    alt="GovTech Malaysia"
                    width={240}
                    height={85}
                  />
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              DIBANGUNKAN OLEH
              <FooterLogo
                logo={
                  <img
                    src="/assets/logo-kementerian-digital.png"
                    alt="Logo Kementerian Digital"
                    width={150}
                    height={92}
                  />
                }
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-y-4 pt-4">
          DENGAN KERJASAMA
          <div className="flex flex-row items-center gap-6">
            <FooterLogo
              logo={
                <img
                  src="/assets/logo-mydigital.png"
                  alt="MyDigital"
                  width={210}
                  height={40}
                />
              }
            />

            <FooterLogo
              logo={
                <img
                  src="/assets/logo-mynic.png"
                  alt="MyNIC"
                  width={130}
                  height={40}
                />
              }
            />

            <FooterLogo
              logo={
                <img
                  src="/assets/logo-cybersecurity-malaysia.png"
                  alt="CyberSecurity Malaysia"
                  width={200}
                  height={40}
                />
              }
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-y-4 pt-4">
          KOLABORASI STRATEGIK
          <div className="flex flex-row items-center gap-6">
            <FooterLogo
              logo={
                <img
                  src="/assets/logo-mydigitalid.png"
                  alt="MyDigital ID"
                  width={170}
                  height={40}
                />
              }
            />

            <FooterLogo
              logo={
                <img
                  src="/assets/logo-mygcc.png"
                  alt="Malaysia Government Call Center"
                  width={140}
                  height={40}
                />
              }
            />
          </div>
        </div>

        <FooterSection className="w-full">
          <SiteInfo></SiteInfo>
        </FooterSection>

        <FooterSection className="text-txt-black-500 md:max-lg:gap-4.5 mx-auto flex w-full max-w-[1000px] justify-between border-none pt-8 text-sm max-lg:flex-col max-md:gap-4 lg:gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
              <p className="text-xs md:text-sm">
                © 2025 Kementerian Digital. Semua hakcipta terpelihara.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Link
                href="#"
                target="_blank"
                className="bg-bg-washed flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5FF] p-2 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-300 md:h-10 md:w-10"
              >
                <FacebookIcon
                  scale={32}
                  className="md:scale-40 text-[#2563EB]"
                />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className="bg-bg-washed flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5FF] p-2 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-300 md:h-10 md:w-10"
              >
                <TwitterXIcon
                  scale={32}
                  className="md:scale-40 text-[#2563EB]"
                />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className="bg-bg-washed flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5FF] p-2 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-300 md:h-10 md:w-10"
              >
                <InstagramIcon
                  scale={32}
                  className="md:scale-40 text-[#2563EB]"
                />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className="bg-bg-washed flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5FF] p-2 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-300 md:h-10 md:w-10"
              >
                <TiktokIcon scale={32} className="md:scale-40 text-[#2563EB]" />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className="bg-bg-washed flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5FF] p-2 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-300 md:h-10 md:w-10"
              >
                <LinkedinIcon
                  scale={32}
                  className="md:scale-40 text-[#2563EB]"
                />
              </Link>
            </div>
          </div>
          <p className="text-xs md:text-sm">Last updated: 15th Aug 2025</p>
        </FooterSection>
      </Footer>
    </>
  );
};
