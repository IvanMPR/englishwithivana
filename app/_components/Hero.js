"use client";

import { useTranslation } from "react-i18next";

export default function Hero({ backgroundImage }) {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div
      className='flex bg-cover bg-center h-[45rem] bg-no-repeat clip-polygon hero-background '
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='  w-1/2 m-auto flex flex-col items-center justify-center '>
        <h1 className=' text-white text-4xl font-bold px-5 leading-tight'>
          <span className='block uppercase text-sm font-normal text-white mb-5'>
            {t("ivana miceta", { ns: "common" })}
          </span>{" "}
          {t("h1", { ns: "home" })}
          <span className='block text-sm font-normal mt-5'>
            {t("h1_extended", { ns: "home" })}
          </span>
        </h1>
        <div className='w-full mt-10 px-5 flex items-start '>
          <button className=' text-sm rounded text-white bg-primaryColor px-3 py-[.5em]'>
            {t("button_text", { ns: "home" })}
          </button>
          <div className='ml-8 pt-1'>
            <p className=' text-white'>
              &#x2794; {t("button_why", { ns: "home" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
