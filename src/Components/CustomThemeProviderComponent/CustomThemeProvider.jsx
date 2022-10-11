import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    navBarBtn: {
      main: "#445552",
      contrastText: "#ffffff",
    },
  },
});

const CustomThemeProvider = ({ children }) => {
  <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
