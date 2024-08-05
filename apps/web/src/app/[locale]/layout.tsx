import "tailwindcss/tailwind.css";
import "../../style.css";

import languages from "@rallly/languages";
import { Toaster } from "@rallly/ui/toaster";
import { Viewport } from "next";
import { Inter } from "next/font/google";
import React from "react";

import { Providers } from "@/app/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return Object.keys(languages).map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Root({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={inter.className}>
      <body>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.USER_DATA = {'id': '374494','email': 'andrii.cherkas@unidatalab.com', 'email_verified': true, 'first_name': 'Andrii', 'last_name': 'Cherkas','full_name': 'Andrii Cherkas',};\n// For demonstration, let's log the USER_DATA to the console\nconsole.log(window.USER_DATA);`,
          }}
        ></script> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://reflectoadmin.s3.amazonaws.com/client-widget/index.css"
        />
        <script
          type="module"
          src="https://reflectoadmin.s3.amazonaws.com/client-widget/index.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('DOMContentLoaded', function() {window.ChatAi.init({projectId: "f3e90373-de20-4779-ad28-7a1dde3b86b1", user: "andrii.cherkas@unidatalab.com"});});`,
          }}
        ></script>

        
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
