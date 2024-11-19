"use client";

import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
// import Hamburger from "hamburger-react";

export default function Header() {
  return (
    <header className=' flex items-center justify-between'>
      <div className='flex'>
        <Logo />
        <LanguageChanger />
      </div>
      <div>{/* <Hamburger /> */}</div>
    </header>
  );
}
