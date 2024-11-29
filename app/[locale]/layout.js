import "./globals.css";
import Header from "../_components/Header";
// import Footer from "../_components/Footer";
import TranslationsProvider from "../_components/TranslationsProvider";
import initTranslations from "../i18n";
export const metadata = {
  title: { template: "Ivana / %s", default: "Welcome / Ivana Miceta" },
  description: "Home page of English, Spanish and Serban teacher Ivana Miceta",
};

import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ params: { locale }, children }) {
  const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home"]}
    >
      <html lang='en'>
        <body className={`${OpenSans.className}`}>
          <Header />
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </TranslationsProvider>
  );
}
