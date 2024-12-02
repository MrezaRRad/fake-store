"use client";

import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("NavBar");

  return (
    <nav className="w-full h-28 bg-gray-200 flex flex-row items-center justify-between px-10 shadow-md md:px-24">
      <Link href="/">
        <p className="font-bold text-xl">{t("Home")}</p>
      </Link>
      <h1 id="logo">Fake Store</h1>
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
