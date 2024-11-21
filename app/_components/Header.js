"use client";

import Navigation from "./Navigation";
import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
// import Hamburger from "hamburger-react";

export default function Header() {
  return (
    <header className=' flex items-end justify-between w-full m-auto pt-5 px-5'>
      <div className='flex items-end'>
        <div className='mr-10'>
          <Logo />
        </div>
        <Navigation />
      </div>
      <div>
        <LanguageChanger />
      </div>
    </header>
  );
}
