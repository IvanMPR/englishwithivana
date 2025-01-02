import Image from "next/image";
import logo from "@/public/logo.png";
import smallLogo from "@/public/logo-textless.png";

export default function Logo() {
  return (
    <>
      <div className='hidden md:block w-40'>
        <Image alt="Ivana's website logo" src={logo} className='pb-1' />
      </div>
      <div className='block md:hidden w-10'>
        <Image alt="Ivana's website logo" src={smallLogo} className='pb-1' />
      </div>
    </>
  );
}
