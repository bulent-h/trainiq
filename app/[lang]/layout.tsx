import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import { Providers } from "../lib/providers";
import Header from "@/app/ui/layout/header";
import Footer from "@/app/ui/layout/footer";
import { i18n } from "@/i18n.config";

export const metadata: Metadata = {
  title: {
    template: "Dashboard",
    default: "TarinIQ",
  },
};
export async function generateStaticParams() {
  return Object.keys(i18n.locales).map((locale) => ({ lang: locale }));
}

export default function RootLayout(props: any) {
  
  return (
    <html lang={props.params.lang} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen text-xl text-black dark:text-white bg-gradient-to-tl from-gray-100  to-gray-100 dark:from-indigo-950  dark:to-gray-950 `}
      >
        <Providers>
            <Header lang={props.params.lang} />

            {props.children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
