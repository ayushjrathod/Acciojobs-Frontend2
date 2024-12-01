import "@/styles/globals.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { GLOBAL_MUI_THEME } from "../styles/global.theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={GLOBAL_MUI_THEME}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Component {...pageProps} />
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </RecoilRoot>
  );
}
