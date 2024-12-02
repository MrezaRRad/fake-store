"use client";

import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("NavBar");

  return (
    <div className="w-full h-20 bg-gray-200 flex flex-row items-center justify-between px-10 shadow-md md:px-24">
      <Link href="/">
        <p>{t("Home")}</p>
      </Link>
      <LanguageSwitcher />
    </div>
  );
}

export default Navbar;
