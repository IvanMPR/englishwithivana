import LanguageChanger from "../_components/LanguageChanger";
import TestClient from "../_components/TestClient";
import TranslationsProvider from "../_components/TranslationsProvider";
import initTranslations from "../i18n";

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home"]}
    >
      <div>
        <h1>{t("header")}</h1>
        <p>{t("content")}</p>
        <TestClient />
        <LanguageChanger />
      </div>
    </TranslationsProvider>
  );
}
