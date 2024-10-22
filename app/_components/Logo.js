import Image from "next/image";
import logo from "@/public/logo.png";
export default function Logo() {
  return (
    <div className='w-48'>
      <Image alt="Ivana's website logo" src={logo} />
    </div>
  );
}
