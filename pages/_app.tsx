import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Asegura que los estilos base de MUI se apliquen
import { StyledEngineProvider } from "@mui/material/styles";

import type { AppProps } from "next/app";
import Layout from "components/layaout";

const theme = createTheme({
  // Configura tu tema personalizado aquí si lo deseas
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Esto aplicará los estilos globales base de MUI */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
