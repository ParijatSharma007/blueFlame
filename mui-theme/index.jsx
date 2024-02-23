import { useMemo } from "react";
// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// project import
import themeColor from "@/styles/abstracts/_theme.module.scss";
import shadows from "./shadows";
import Typography from "./typography";
// import componentsOverride from "./overrides";

// ==============================|| DEFAULT THEME - MAIN  ||============================== //
export default function ThemeCustomization({ children }) {
  // const theme = Palette();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Poppins', sans-serif`);

  // const themeOptions = useMemo(
  //   () => ({
  //     breakpoints: {
  //       values: {
  //         xs: 0,
  //         sm: 768,
  //         md: 1024,
  //         lg: 1266,
  //         xl: 1536
  //       }
  //     },
  //     direction: "ltr",
  //     mixins: {
  //       toolbar: {
  //         minHeight: 60,
  //         paddingTop: 8,
  //         paddingBottom: 8
  //       }
  //     },

  //     typography: themeTypography
  //   }),
  //   [themeTypography]
  // );

  const themeOptions = useMemo(
    () => ({
      // palette,
      shape: { borderRadius: 6 },
      typography: themeTypography,
      shadows: shadows()
    }),
    []
  );

  const themes = createTheme(themeOptions);
  // themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
