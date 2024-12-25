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

// export default function Logo() {
//   return (
//     <div>
//       {/* Large logo for larger screens */}
//       <div className="hidden md:block w-60">
//         <Image alt="Ivana's website logo" src={largeLogo} className="pb-1" />
//       </div>
//       {/* Small logo for smaller screens */}
//       <div className="block md:hidden w-40">
//         <Image alt="Ivana's website logo" src={smallLogo} className="pb-1" />
//       </div>
//     </div>
//   );
// }
