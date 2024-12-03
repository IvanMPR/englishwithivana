// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import TranslationsProvider from "../_components/TranslationsProvider";
// import initTranslations from "../i18n";

// export default  function Navigation({ params: { locale } }) {
//   const pathname = usePathname();
//   const { t, resources } = await initTranslations(locale, ["navigation"]);

//   return (
//     <TranslationsProvider
//     resources={resources}
//     locale={locale}
//     namespaces={["home"]}>

//     <nav>
//       <ul className=' flex'>
//         <li className='mr-5 text-white'>
//           <Link
//             href={"/"}
//             className={`${
//               pathname === "/" ? " border-b-4 border-rose-500" : ""
//             }`}
//           >
//             Home
//           </Link>
//         </li>
//         <li className='mr-5 text-white'>
//           <Link
//             href={"/about-ivana"}
//             className={`${
//               pathname === "/about-ivana" ? " border-b-4 border-rose-500" : ""
//             }`}
//           >
//             About Ivana
//           </Link>
//         </li>
//         <li className='mr-5 text-white'>
//           <Link
//             href={"/online-classes"}
//             className={`${
//               pathname === "/online-classes"
//                 ? " border-b-4 border-rose-500"
//                 : ""
//             }`}
//           >
//             Online Classes
//           </Link>
//         </li>
//         <li className='text-white'>
//           <Link
//             href={"/interpreting-translation"}
//             className={`${
//               pathname === "/interpreting-translation"
//                 ? " border-b-4 border-rose-500"
//                 : ""
//             }`}
//           >
//             Interpreting & Translation
//           </Link>
//         </li>
//       </ul>
//     </nav>
//     </TranslationsProvider>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import TranslationsProvider from "../_components/TranslationsProvider";
import initTranslations from "../i18n";

export default function Navigation() {
  const pathname = usePathname();
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
      <nav>
        <ul className='flex'>
          <li className='mr-5 text-white text-sm duration-300 ease-in-out'>
            <Link
              href={"/"}
              className={`pb-2 ${
                pathname === "/" || pathname === "/es"
                  ? "border-b-4 border-primaryColor"
                  : ""
              }`}
            >
              {translations.t("homeLink")}
            </Link>
          </li>
          <li className='mr-5 text-white text-sm'>
            <Link
              href={"/about-ivana"}
              className={`${
                pathname === "/about-ivana" || pathname === "/sobre-ivana"
                  ? "border-b-4 border-primaryColor"
                  : ""
              }`}
            >
              {translations.t("aboutLink")}
            </Link>
          </li>
          <li className='mr-5 text-white text-sm'>
            <Link
              href={"/online-classes"}
              className={`${
                pathname === "/online-classes"
                  ? "border-b-4 border-primaryColor"
                  : ""
              }`}
            >
              {translations.t("classesLink")}
            </Link>
          </li>
          <li className='text-white text-sm'>
            <Link
              href={"/interpreting-translations"}
              className={`${
                pathname === "/interpreting-translations"
                  ? "border-b-4 border-primaryColor"
                  : ""
              }`}
            >
              {translations.t("translationsLink")}
            </Link>
          </li>
        </ul>
      </nav>
    </TranslationsProvider>
  );
}
