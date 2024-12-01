"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "use-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const activeLng = useLocale();

  const [isPending, startTransition] = useTransition();

  const changeLanguage = (event) => {
    const nextLng = event.target.value;

    startTransition(() => {
      router.replace(`/${nextLng}`);
    });
  };

  return (
    <select
      className="p-3 border-none bg-none"
      onChange={(event) => changeLanguage(event)}
      value={activeLng}
    >
      <option value="en">English </option>
      <option value="fa">فارسی</option>
    </select>
  );
};

export default LanguageSwitcher;
