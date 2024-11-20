// import heroImage from "./public/home_bgd.jpg";
// import Hamburger from "hamburger-react";
import Header from "../_components/Header";

export default function Hero() {
  return (
    <div className="relative bg-[url('/home_bgd.jpg')] bg-cover bg-center h-[30rem] bg-no-repeat">
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-950 to-indigo-300 opacity-80'>
        <Header />
      </div>

      {/* <Hamburger />  */}
    </div>
  );
}
