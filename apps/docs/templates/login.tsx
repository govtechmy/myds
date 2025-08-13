"use client";
import { Button } from "@govtechmy/myds-react/button";
import { Input } from "@govtechmy/myds-react/input";
import {
  GlobeIcon,
  GoogleIcon,
  JataNegaraIcon,
} from "@govtechmy/myds-react/icon";
import { Navbar, NavbarLogo } from "@govtechmy/myds-react/navbar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@govtechmy/myds-react/select";
import { ThemeSwitch } from "@govtechmy/myds-react/theme-switch";
import { Link } from "@govtechmy/myds-react/link";
import { clx } from "@govtechmy/myds-react/utils";

export default function LoginTemplate({className}:{className?:string}) {
  return (
    <div className= {clx("border-otl-gray-200 shadow-card flex min-h-screen flex-col border",className)}>
      <HeaderLogin />
      <BodyLogin />
      <FooterLogin />
    </div>
  );
}

function BodyLogin() {
  return (
    <div className="bg-bg-gray-50 flex w-full flex-grow items-center justify-center py-12">
      <form className="mx-auto flex max-w-[400px] flex-col items-center justify-center gap-8 px-4">
        <div className="flex flex-col gap-4 text-center">
          <div className="text-2xl font-semibold">Log in to Brand</div>
          <div className="text-txt-black-700 text-base">
            Welcome back! Please enter your details.
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-1.5">
            <div className="text-txt-black-500 text-sm">Email</div>
            <Input
              size="medium"
              id="email"
              type="email"
              placeholder="yourname@example.com"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <div className="text-txt-black-500 text-sm">Password</div>
            <Input
              size="medium"
              id="password"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Button size="medium" className="w-full items-center justify-center">
            Log in
          </Button>
          <div className="text-txt-black-500 text-sm">OR</div>
          <Button
            variant={"default-outline"}
            className="w-full items-center justify-center"
            size="medium"
          >
            <GoogleIcon></GoogleIcon> Continue with MyGovUC
          </Button>
        </div>
        <Link
          underline="hover"
          className="text-txt-primary text-sm font-normal"
          href="https://www.google.com"
        >
          Forgot Password?
        </Link>
      </form>
    </div>
  );
}

function HeaderLogin() {
  return (
    <Navbar
      className="bg-bg-gray-50 border-b-0"
      style={{ boxShadow: "0 0 #0000" }}
    >
      <NavbarLogo
        src="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
        alt="Malaysian Government Design System"
      >
        <div className="text-lg font-semibold">MYDS</div>
        <div className="text-bg-white bg-bg-black-900 font-body rounded-sm px-1.5 py-0.5 text-xs font-medium leading-[18px]">
          DASHBOARD
        </div>
      </NavbarLogo>
      <div className="flex gap-2">
        <ThemeSwitch />
        <div className="hidden sm:block">
          <Select defaultValue="EN" variant="outline" size="small">
            <SelectTrigger aria-label="language-selection">
              <GlobeIcon className="h-4 w-4"></GlobeIcon>
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end" className="font-body rounded-[4px] py-1">
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="BM">BM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Navbar>
  );
}

function FooterLogin() {
  return (
    <div className="bg-bg-gray-50">
      <div className="gap-4.5 hidden items-center py-1 pl-6 text-sm font-normal max-[430px]:flex">
        <Navlinks />
      </div>
      <div
        className={clx(
          "relative mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-4 px-6",
          "max-md:h-14",
          "xl:px-0",
        )}
      >
        <div className="flex items-center justify-center max-sm:flex-col">
          <div className="flex items-center justify-center gap-2">
            <JataNegaraIcon></JataNegaraIcon>
            <div className="flex max-sm:flex-col">
              <div className="font-heading font-semibold">
                Government of Malaysia
              </div>
              <div className="font-body text-txt-black-500 flex items-center pl-[10px] text-xs font-normal leading-[18px] max-sm:pl-0">
                © 2024 Government of Malaysia
              </div>
            </div>
          </div>
        </div>

        <div className="gap-4.5 flex items-center justify-center text-sm font-normal max-[430px]:hidden">
          <Navlinks />
        </div>
      </div>
    </div>
  );
}

function Navlinks() {
  return (
    <>
      <Link underline="hover" href="https://www.google.com">
        Home
      </Link>
      <Link underline="hover" href="https://www.google.com">
        API Docs
      </Link>
    </>
  );
}
