"use client";

import TranslationsProvider from "./TranslationsProvider";
import initTranslations from "../i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactButton() {
  const { i18n } = useTranslation();
  const [translations, setTranslations] = useState({
    t: () => "",
    resources: {},
  });
  const locale = i18n.language;

  useEffect(() => {
    async function loadTranslations() {
      const { t, resources } = await initTranslations(locale, ["navigation"]);
      setTranslations({ t, resources });
    }
    loadTranslations();
  }, [locale]);
  return (
    <TranslationsProvider
      resources={translations.resources}
      locale={locale}
      namespaces={["navigation"]}
    >
      <div className=' w-24'>
        <button className='w-full text-sm rounded text-white bg-primaryColor px-3 py-[.5em] hover:bg-rose-600'>
          {translations.t("contactLink")}
        </button>
      </div>
    </TranslationsProvider>
  );
}
