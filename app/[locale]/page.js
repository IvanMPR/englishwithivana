import initTranslations from "../i18n";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <div>
      <h1>{t("header")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}
