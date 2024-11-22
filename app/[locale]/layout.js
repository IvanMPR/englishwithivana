import "./globals.css";
import Header from "../_components/Header";
export const metadata = {
  title: { template: "Ivana / %s", default: "Welcome / Ivana Miceta" },
  description: "Home page of English, Spanish and Serban teacher Ivana Miceta",
};

import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${OpenSans.className}`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
