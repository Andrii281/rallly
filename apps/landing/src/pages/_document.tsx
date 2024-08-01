import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.USER_DATA = {'id': '374494','email': 'andrii.cherkas@unidatalab.com', 'email_verified': true, 'first_name': 'Andrii', 'last_name': 'Cherkas','full_name': 'Andrii Cherkas',};\n// For demonstration, let's log the USER_DATA to the console\nconsole.log(window.USER_DATA);`,
          }}
        ></script>
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
            __html: `window.addEventListener('DOMContentLoaded', function() {window.ChatAi.init({projectId: "f3e90373-de20-4779-ad28-7a1dde3b86b1"});});`,
          }}
        ></script>

        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-128x128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="Rallly" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta
          name="msapplication-square70x70logo"
          content="/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/mstile-310x310.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#F3F4F6" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="portal"></div>
      </body>
    </Html>
  );
}
