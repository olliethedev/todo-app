import '@/styles/globals.css'
import "@aws-amplify/ui-react/styles.css";
import type { AppProps } from "next/app";

import { Amplify, AuthModeStrategyType } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";

import awsExports from "../aws-exports";
import { studioTheme } from "@/ui-components";

Amplify.configure({
  ...awsExports,
  authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
