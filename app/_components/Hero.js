// import heroImage from "./public/home_bgd.jpg";
// import Hamburger from "hamburger-react";
import Header from "../_components/Header";

export default function Hero({ backgroundImage }) {
  return (
    <div
      className='relative bg-cover bg-center h-[35rem] bg-no-repeat clip-polygon'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-darkColor to-filterColor opacity-80'></div>
      <div className=''>
        <h1 className='absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-bold'>
          <span className='uppercase text-sm font-normal '>Ivana Miceta</span>{" "}
          Online Classes and Tranlsating & Interpreting Services
          <span className='uppercase text-sm font-normal'>
            Online classes of English, Spanish and Serbian language and
            Translation and Interpreting services
          </span>
        </h1>
      </div>
    </div>
  );
}
