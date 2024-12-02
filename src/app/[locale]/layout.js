import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Fake Store | Provide nice and cheap products",
  description: "A store for buying nice and cheap products",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body>
        <main>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
