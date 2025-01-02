import TranslationsProvider from "../_components/TranslationsProvider";
import initTranslations from "../i18n";
import Hero from "../_components/Hero";

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home"]}
    >
      <Hero backgroundImage='/home-bg-image.jpg' />
    </TranslationsProvider>
  );
}
