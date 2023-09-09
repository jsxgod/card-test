import "styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/style.globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
