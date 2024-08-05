import "react-big-calendar/lib/css/react-big-calendar.css";
import "tailwindcss/tailwind.css";
import "../style.css";

import { TooltipProvider } from "@rallly/ui/tooltip";
import { domMax, LazyMotion } from "framer-motion";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import React from "react";

import { I18nProvider } from "@/app/i18n/client";
import Maintenance from "@/components/maintenance";
import { UserProvider } from "@/components/user-provider";
import { ConnectedDayjsProvider } from "@/utils/dayjs";
import { trpc } from "@/utils/trpc/client";

import { NextPageWithLayout } from "../types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Auth = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const isAuthenticated = !!session.data?.user.email;

  React.useEffect(() => {
    if (!isAuthenticated) {
      signIn();
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return null;
};

const MyApp: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1") {
    return <Maintenance />;
  }

  const getLayout = Component.getLayout ?? ((page) => page);
  const children = <Component {...pageProps} />;

  return (
    <SessionProvider>
      <LazyMotion features={domMax}>
        <Head>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `window.USER_DATA = {'id': '374494','email': 'andrii.cherkas@unidatalab.com', 'email_verified': true, 'first_name': 'Andrii', 'last_name': 'Cherkas','full_name': 'Andrii Cherkas',};\n// For demonstration, let's log the USER_DATA to the console\nconsole.log(window.USER_DATA);`,
            }}
          ></script> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.css"
          />
          <script
            type="module"
            src="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.addEventListener('DOMContentLoaded', function() {window.ChatAi.init({projectId: "f3e90373-de20-4779-ad28-7a1dde3b86b1", user: "andrii.cherkas@unidatalab.com"});});`,
            }}
          ></script>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes"
          />

          {/* <script
            dangerouslySetInnerHTML={{
              __html: `window.USER_DATA = {'id': '374494','email': 'andrii.cherkas@unidatalab.com', 'email_verified': true, 'first_name': 'Andrii', 'last_name': 'Cherkas','full_name': 'Andrii Cherkas',};\n// For demonstration, let's log the USER_DATA to the console\nconsole.log(window.USER_DATA);`,
            }}
          ></script> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.css"
          />
          <script
            type="module"
            src="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.addEventListener('DOMContentLoaded', function() {window.ChatAi.init({projectId: "f3e90373-de20-4779-ad28-7a1dde3b86b1", user: "andrii.cherkas@unidatalab.com"});});`,
            }}
          ></script>
        </Head>
        <style jsx global>{`
          html {
            --font-inter: ${inter.style.fontFamily};
          }
        `}</style>
        <I18nProvider>
          <TooltipProvider delayDuration={200}>
            <UserProvider>
              <ConnectedDayjsProvider>
                {Component.isAuthRequired ? (
                  <Auth>{getLayout(children)}</Auth>
                ) : (
                  getLayout(children)
                )}
              </ConnectedDayjsProvider>
            </UserProvider>
          </TooltipProvider>
        </I18nProvider>
      </LazyMotion>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
//sssss
