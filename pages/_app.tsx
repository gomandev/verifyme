import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/style.scss";
import { firebaseConfig } from "@utils/firebaseConfig";
import config from "@store/config";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={config}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
