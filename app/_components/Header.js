"use client";

import Navigation from "./Navigation";
import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
import ContactButton from "./ContactButton";

// import Hamburger from "hamburger-react";

export default function Header() {
  return (
    <header className='absolute top-0 z-30 flex items-end justify-between w-full m-auto pt-5 px-5 pb-3'>
      <div className='flex items-end'>
        <div className='mr-10'>
          <Logo />
        </div>
        <Navigation />
      </div>
      <div className='flex items-center'>
        <div className='mr-4'>
          <ContactButton />
        </div>
        <div>
          <LanguageChanger />
        </div>
      </div>
    </header>
  );
}
