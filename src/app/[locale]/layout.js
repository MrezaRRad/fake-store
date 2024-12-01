import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const robotoSlabLight = localFont({
  src: "../../fonts/RobotoSlab-Light.ttf",
  variable: "--font-robotoslab-light",
  weight: "100 900",
});

const robotoSlabRegular = localFont({
  src: "../../fonts/RobotoSlab-Regular.ttf",
  variable: "--font-robotoslab-regular",
  weight: "100 900",
});

export const metadata = {
  title: "Fake Store",
  description: "Generated by Reza Rad",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  console.log(locale);

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body
        className={`${robotoSlabLight.variable} ${robotoSlabRegular.variable} antialiased`}
      >
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
