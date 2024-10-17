"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TestClient() {
  const { t } = useTranslation();
  const [test, setTest] = useState(0);
  function handleIncreaseClick() {
    setTest(test + 1);
  }
  function handleDecreaseClick() {
    setTest(test - 1);
  }
  function handleResetClick() {
    setTest(0);
  }
  return (
    <div>
      <h2>{t("header")}</h2>
      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <p>{test} from client component</p>
    </div>
  );
}
