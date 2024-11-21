import initTranslations from "../../i18n";

export default async function Page({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["about"]);
  return (
    <div>
      <h1>{t("header")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}
