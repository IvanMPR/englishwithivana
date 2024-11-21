import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <div className='w-40'>
      <Image alt="Ivana's website logo" src={logo} className='pb-1' />
    </div>
  );
}
