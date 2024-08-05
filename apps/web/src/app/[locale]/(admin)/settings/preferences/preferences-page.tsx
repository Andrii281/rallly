"use client";
import Head from "next/head";

import { useTranslation } from "@/app/i18n/client";
import { DateTimePreferences } from "@/components/settings/date-time-preferences";
import { LanguagePreference } from "@/components/settings/language-preference";
import {
  Settings,
  SettingsContent,
  SettingsSection,
} from "@/components/settings/settings";
import { Trans } from "@/components/trans";

export function PreferencesPage() {
  const { t } = useTranslation();

  return (
    <Settings>
      <SettingsContent>
        <Head>
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
          
          <title>{t("settings")}</title>
        </Head>
        <SettingsSection
          title={<Trans i18nKey="language" defaults="Language" />}
          description={
            <Trans
              i18nKey="languageDescription"
              defaults="Change your preferred language"
            />
          }
        >
          <LanguagePreference />
        </SettingsSection>
        <hr />
        <SettingsSection
          title={<Trans i18nKey="dateAndTime" defaults="Date & Time" />}
          description={
            <Trans
              i18nKey="dateAndTimeDescription"
              defaults="Change your preferred date and time settings"
            />
          }
        >
          <DateTimePreferences />
        </SettingsSection>
      </SettingsContent>
    </Settings>
  );
}
