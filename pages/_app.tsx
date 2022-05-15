import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import globalStyle from "@Styles/global.style";
import { defaultTheme } from "@Styles/themes.style";

globalStyle();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="default"
      value={{
        default: defaultTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
