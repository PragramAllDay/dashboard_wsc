"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@/layout/shared/customizer/RTL";
import { ThemeSettings } from "@/utils/theme/Theme";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Provider } from "react-redux";
import { store } from "@/store/store";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@/app/api/index";
import "@/utils/i18n";
import { NextAppDirEmotionCacheProvider } from "@/utils/theme/EmotionCache";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";


export const MyApp = ({ children }: { children: React.ReactNode }) => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = ThemeSettings();

  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: 'modernize' }}>
        <ThemeProvider theme={theme}>
          <RTL direction={customizer.activeDir}>
            <CssBaseline />
            {children}
          </RTL>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          {loading ? (
            <MyApp children={children} />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Provider>
      </body>
    </html>
  );
}
