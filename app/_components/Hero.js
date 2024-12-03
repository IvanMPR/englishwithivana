// import heroImage from "./public/home_bgd.jpg";
// import Hamburger from "hamburger-react";
import Header from "../_components/Header";

export default function Hero() {
  return (
    <div className="relative bg-[url('/home_bgd.jpg')] bg-cover bg-center h-[35rem] bg-no-repeat clip-polygon">
      <div className='absolute inset-0 bg-gradient-to-b from-darkColor to-filterColor opacity-80'>
        {/* <Header /> */}
      </div>

      {/* <Hamburger />  */}
    </div>
  );
}
