import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import Header from "./src/components/header/Header";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "متین برزگر بهرامی",
  description: "Personal portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale()
  const cookie = await cookies();

  return (
    <html lang={`${cookie.get("locale")?.value || "en"}`} dir={locale === "fa" ? "rtl" : "ltr"} className="h-full antialiased">
      <body
        className="
        h-screen
          min-h-screen
          bg-gradient-to-br
          from-zinc-950
          via-zinc-950
          to-yellow-500
          p-3
          selection:bg-yellow-500
          selection:text-black
        "
      >
        <NextIntlClientProvider messages={messages}>
          <div
            className="
            h-[calc(100vh-24px)]
              overflow-y-auto
              rounded-3xl
              border
              border-zinc-800/80
              bg-zinc-900/95
              shadow-2xl
              backdrop-blur-xl
            "
          >
            
            <Header />
            <div className="py-6 text-white">
            {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}