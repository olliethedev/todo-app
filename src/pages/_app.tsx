import '@/styles/globals.css'
import "@aws-amplify/ui-react/styles.css";
import type { AppProps } from "next/app";

import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
