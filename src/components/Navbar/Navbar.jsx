"use client";

import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("NavBar");

  return (
    <nav className="w-full h-24 bg-gray-200 flex flex-row items-center justify-center shadow-md sticky z-50">
      <div className="flex justify-between items-center w-10/12 px-3">
        <Link href="/">
          <p className="font-bold text-xl">{t("Home")}</p>
        </Link>
        <h1 id="logo">Fake Store</h1>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
