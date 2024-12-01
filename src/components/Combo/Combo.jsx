"use client";

import { useTranslations } from "next-intl";

function Combo(props) {
  const { options, onFilterProduct, selectedCategory } = props;

  const t = useTranslations("Filter");

  function handleChangeOption(event) {
    onFilterProduct(event.target.value, "category");
  }

  if (!options) return null;

  return (
    <div>
      <label className="px-5">{t("Category")}</label>
      <select
        className="p-2 focus:ring-0"
        onChange={(event) => handleChangeOption(event)}
        value={selectedCategory}
      >
        <option value={"All"}>{t("AllProducts")}</option>
        {options.map((option) => (
          <option key={Math.random()}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Combo;
