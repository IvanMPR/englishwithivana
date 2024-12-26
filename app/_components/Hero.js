"use client";

import { useTranslation } from "react-i18next";

export default function Hero({ backgroundImage }) {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div
      className='relative bg-cover bg-center h-[35rem] bg-no-repeat clip-polygon'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-darkColor to-filterColor opacity-80'>
        {" "}
        <div className=' absolute w-1/2 m-auto inset-0 flex flex-col items-center justify-center '>
          <h1 className=' text-white text-4xl font-bold px-5 leading-tight'>
            <span className='block uppercase text-sm text-primaryColor mb-5'>
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
    </div>
  );
}
