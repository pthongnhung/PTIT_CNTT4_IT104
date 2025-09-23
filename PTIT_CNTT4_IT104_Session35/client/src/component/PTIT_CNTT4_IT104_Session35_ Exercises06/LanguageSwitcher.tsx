import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/slices/languageSlice";


const MESSAGES = {
  vi: {
    academy: "Học viện Rikkei",
    selectVi: "Vietnamese",
    selectEn: "English",
  },
  en: {
    academy: "Rikkei Academy",
    selectVi: "Vietnamese",
    selectEn: "English",
  },
};

export default function LanguageSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((s)=> s.language.lang);
  const t = MESSAGES[lang];

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <select
        value={lang}
        onChange={(e) => dispatch(setLanguage(e.target.value as "en" | "vi"))}
        style={{ padding: "6px 10px", marginBottom: 16 }}
      >
        <option value="vi">{t.selectVi}</option>
        <option value="en">{t.selectEn}</option>
      </select>

      <div style={{ marginTop: 12, fontWeight: 600 }}>{t.academy}</div>
    </div>
  );
}
