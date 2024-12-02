"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { toFarsiNumber } from "@/Util/Util";

function Input(props) {
  const locale = useLocale();

  const { type, min, max, onFilterProduct } = props;
  const [number, setNumber] = useState(1000);

  const t = useTranslations("Filter");

  function handleRangeChange(event) {
    if (!event.target.value) {
      return;
    }

    const newNumber = +event.target.value;

    setNumber(newNumber);

    onFilterProduct(newNumber, "price");
  }

  return (
    <div className="flex items-center justify-center">
      <label>{t("MaxPrice")}</label>
      <input
        type={type}
        value={number}
        min={min}
        max={max}
        onChange={(event) => handleRangeChange(event)}
        className="scale-150 relative inset-0 mx-10"
        step={1}
      />
      <output className="pl-1">
        ${locale === "en" ? number : toFarsiNumber(number)}
      </output>
    </div>
  );
}

export default Input;
