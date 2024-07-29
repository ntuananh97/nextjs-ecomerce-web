import { SettingsProvider, useSettingsContext } from "@/contexts/settingsContext";
import { store } from "@/stores";
import "@/styles/globals.css";
import ThemeComponent from "@/theme/ThemeComponent";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  const { settings } = useSettingsContext();
  return (
    <Provider store={store}>
      <SettingsProvider>
        <ThemeComponent settings={settings}>
          <Component {...pageProps} />
        </ThemeComponent>
      </SettingsProvider>
    </Provider>
  );
}
