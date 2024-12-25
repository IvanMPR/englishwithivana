// import heroImage from "./public/home_bgd.jpg";
// import Hamburger from "hamburger-react";
import Header from "../_components/Header";

export default function Hero({ backgroundImage }) {
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
              Ivana Miceta
            </span>{" "}
            Online Classes and Translation & Interpreting Services
            <span className='block text-sm font-normal mt-5'>
              Online classes of English, Spanish and Serbian language and
              Translation and Interpretation services.
            </span>
          </h1>
          <div className='w-full mt-10 px-5 flex items-start '>
            <button className=' text-sm rounded text-white bg-primaryColor px-3 py-[.5em]'>
              Check all my classes
            </button>
            <div className='ml-8 pt-1'>
              <p className=' text-white'>&#x2794; Why me?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
