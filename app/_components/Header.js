"use client";

import Navigation from "./Navigation";
import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
// import Hamburger from "hamburger-react";

export default function Header() {
  return (
    <header className=' flex items-center justify-between w-full max-w-6xl m-auto pt-5'>
      <Logo />
      <Navigation />
      <LanguageChanger />
    </header>
  );
}
