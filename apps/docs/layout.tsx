import "@/app/global.css";
import { clx } from "@govtechmy/myds-react/utils";
import Analytics from "@/components/analytics";
import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";

const RootLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <html className={clx("font-body light")} lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Analytics />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
