import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Content() {
  const { language } = useLanguage();

  const messages = {
    en: "Hello, how are you?",
    vi: "Xin chào, bạn khỏe không?",
  };

  return (
    <div style={{ marginTop: "20px", fontSize: "20px" }}>
      <p>{messages[language]}</p>
    </div>
  );
}
