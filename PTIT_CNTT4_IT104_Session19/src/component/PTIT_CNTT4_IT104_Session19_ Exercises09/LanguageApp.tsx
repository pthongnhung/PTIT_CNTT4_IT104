import React from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import Content from "./Content";

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <label htmlFor="lang-select">Ngôn ngữ: </label>
      <select
        id="lang-select"
        value={language}
        onChange={(e) => changeLanguage(e.target.value as "en" | "vi")}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
}

export default function LanguageApp() {
  return (
    <LanguageProvider>
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h2>🌐 Language Context Demo</h2>
        <LanguageSwitcher />
        <Content />
      </div>
    </LanguageProvider>
  );
}
