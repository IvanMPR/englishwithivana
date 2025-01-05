"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../i18n";
import Image from "next/image";

import spanishFlag from "/public/flags/es.jpg";
import ukFlag from "/public/flags/gb.jpg";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = locale => {
    const newLocale = locale;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className='flex space-x-3 pb-1 md:pb-0'>
      <div className=' w-6 '>
        <span title='English'>
          <Image
            src={ukFlag}
            alt='English'
            className='cursor-pointer'
            onClick={() => handleChange("en")}
          />
        </span>
      </div>
      <div className='w-6 '>
        <span title='Español'>
          <Image
            src={spanishFlag}
            alt='Spanish'
            className='cursor-pointer'
            onClick={() => handleChange("es")}
          />
        </span>
      </div>
    </div>
  );
}
