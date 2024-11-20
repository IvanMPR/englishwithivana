"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <ul className=' flex'>
        <li className='mr-5 text-white'>
          <Link
            href={"/"}
            className={`${
              pathname === "/" ? " border-b-4 border-rose-500" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className='mr-5 text-white'>
          <Link
            href={"/about-ivana"}
            className={`${
              pathname === "/about-ivana" ? " border-b-4 border-rose-500" : ""
            }`}
          >
            About Ivana
          </Link>
        </li>
        <li className='mr-5 text-white'>
          <Link
            href={"/online-classes"}
            className={`${
              pathname === "/online-classes"
                ? " border-b-4 border-rose-500"
                : ""
            }`}
          >
            Online Classes
          </Link>
        </li>
        <li className='text-white'>
          <Link
            href={"/interpreting-translation"}
            className={`${
              pathname === "/interpreting-translation"
                ? " border-b-4 border-rose-500"
                : ""
            }`}
          >
            Interpreting & Translation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
