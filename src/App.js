import React, { useState } from "react";

import { Footer } from "./components/shared/Footer";
import { AppRouter } from "./routers/AppRouter";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode})`);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  // const toggleTheme = () => {
  //   if (themeMode === "dark") {
  //     setThemeMode("light");
  //   } else {
  //     setThemeMode("dark");
  //   }
  // };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
