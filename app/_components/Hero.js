"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Hero({ backgroundImage }) {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div
      className='flex bg-cover bg-center h-[45rem] bg-no-repeat clip-polygon hero-background '
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=' w-full md:w-1/2 m-auto flex flex-col items-center justify-center '>
        <h1 className=' text-textColor text-4xl md:font-bold px-5 leading-tight'>
          <span className='block uppercase text-sm font-normal text-textColor mb-5'>
            {t("ivana miceta", { ns: "common" })}
          </span>{" "}
          {t("h1", { ns: "home" })}
          <span className='block text-sm font-normal mt-5'>
            {t("h1_extended", { ns: "home" })}
          </span>
        </h1>
        <div className='w-full mt-10 px-5 flex items-start '>
          <Link
            href='/online-classes'
            className='relative text-sm rounded text-textColor bg-primaryColor px-3 py-[.5em] cursor-pointer'
          >
            {t("button_text", { ns: "home" })}
          </Link>
          <div className='ml-8 pt-1'>
            <Link
              className='relative cursor-pointer text-textColor'
              href='/about-ivana'
            >
              &#x2794; {t("button_why", { ns: "home" })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
