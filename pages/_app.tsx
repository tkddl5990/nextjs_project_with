import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import globalStyle from "../styles/global.style";
import { defaultTheme } from "../styles/themes.style";

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
