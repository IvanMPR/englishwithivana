import initTranslations from "../../i18n";

export default async function Page({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["about"]);
  return (
    <div>
      <p>Hello, this is about page</p>
      <p>{t("content")}</p>
      {/* <h1>{t("header")}</h1>
      <p>{t("content")}</p> */}
    </div>
  );
}
