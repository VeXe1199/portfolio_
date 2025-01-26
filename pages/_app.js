import { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize as needed
    },
    secondary: {
      main: "#dc004e", // Customize as needed
    },
    background: {
      default: "#f4f6f8", // Customize default background
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Customize font
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* Ensures consistent styles across browsers */}
      <CssBaseline />
      <Layout>
        <Head title={`Sahil Sonawane | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
