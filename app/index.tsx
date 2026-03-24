import { ThemeProvider } from "@shopify/restyle";
import { FC } from "react";
import { lightTheme } from "themes/light";
import { Home } from "../src/components/home";

const Index: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  );
};

export default Index;
