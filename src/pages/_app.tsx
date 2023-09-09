import "styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/style.globals";
import Header from "2_Sections/Header/Header";
import { Kanit } from "@next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kanit.className}`}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
