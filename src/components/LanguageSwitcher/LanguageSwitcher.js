"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "use-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const activeLng = useLocale();

  const [isPending, startTransition] = useTransition();

  const changeLanguage = (event) => {
    const location = window.location.pathname;

    let newLocation;

    if (location.startsWith("/en")) {
      newLocation = location.replace("en", "fa");
    }

    if (location.startsWith("/fa")) {
      newLocation = location.replace("fa", "en");
      console.log(newLocation);
    }

    // console.log(location);

    startTransition(() => {
      router.replace(newLocation);
    });
  };

  return (
    <select
      className="p-3 border-none bg-none font-semibold text-base"
      onChange={(event) => changeLanguage(event)}
      value={activeLng}
    >
      <option value="en">English </option>
      <option value="fa">فارسی</option>
    </select>
  );
};

export default LanguageSwitcher;
