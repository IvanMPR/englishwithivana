// import TranslationsProvider from "../_components/TranslationsProvider";
import TranslationsProvider from "../../_components/TranslationsProvider";
import initTranslations from "../../i18n";
import Hero from "../../_components/Hero";

export default async function InterpretingTranslations({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "interpreting-translations",
  ]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["interpreting-translations"]}
    >
      <Hero backgroundImage='/interpreting-bg-image.jpg' />
    </TranslationsProvider>
  );
}
