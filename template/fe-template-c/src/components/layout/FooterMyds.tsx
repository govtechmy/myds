import {
  Footer,
  SiteInfo,
  FooterSection,
  SiteLinkGroup,
  SiteLink,
  FooterLogo,
} from "@govtechmy/myds-react/footer";
import {
  FacebookIcon,
  TwitterXIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@govtechmy/myds-react/icon";
import { Link } from "@govtechmy/myds-react/link";

export default function FooterMyds() {
  return (
    <Footer>
      <FooterSection>
        <SiteInfo>
          <div className="text-txt-black-900 flex items-center gap-x-2.5">
            <FooterLogo
              logoTitle={
                <p className="font-poppins text-body-md whitespace-nowrap font-semibold">
                  Kementerian Digital
                </p>
              }
              logo={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
                  width={36}
                  alt="Malaysia Coat of Arms"
                  className="select-none"
                />
              }
            />
          </div>
          <p className="text-txt-black-700 text-body-sm not-prose">
            Aras 13, 14 & 15, Blok Menara, Menara Usahawan, No. 18, Persiaran
            Perdana, Presint 2, Pusat Pentadbiran Kerajaan Persekutuan, 62000
            Putrajaya, Malaysia
          </p>
          <p className="text-txt-black-900 text-body-sm font-semibold not-prose">
            Follow us
          </p>
          <div className="flex gap-3">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <FacebookIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <TwitterXIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <InstagramIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <YoutubeIcon className="text-txt-black-700" />
            </Link>
          </div>
        </SiteInfo>
        <SiteLinkGroup groupTitle="Super super long long long long long title">
          <SiteLink href="#">Link 1 super super long super super long</SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle="Super super long long long long long title">
          <SiteLink href="#">Link 1 super super long super super long</SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle="Super super long long long long long title">
          <SiteLink href="#">Link 1 super super long super super long</SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle="Super super long long long long long title">
          <SiteLink href="#">Link 1 super super long super super long</SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
          <SiteLink href="#">Link 5</SiteLink>
          <SiteLink href="#">Link 6</SiteLink>
          <SiteLink href="#">Link 7</SiteLink>
          <SiteLink href="#">Link 8</SiteLink>
          <SiteLink href="#">Link 9</SiteLink>
        </SiteLinkGroup>
      </FooterSection>
      <FooterSection className="text-txt-black-500 md:max-lg:gap-4.5 mx-auto flex w-full max-w-[1280px] flex-col justify-between border-none text-sm max-md:gap-4 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-3 lg:flex-row">
          <p>All Rights Reserved © 2025</p>
          <p className="hidden lg:inline">|</p>
          <div className="text-txt-black-700 flex flex-grow flex-row gap-3">
            <a href="#">Disclaimer</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <p>Last updated: 11th March 2025</p>
      </FooterSection>
    </Footer>
  );
}
