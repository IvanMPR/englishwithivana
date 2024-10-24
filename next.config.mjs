// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ["en", "es"],
//     defaultLocale: "en",
//   },
// };

// export default nextConfig;
import i18nConfig from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig.i18n,
};

export default nextConfig;
