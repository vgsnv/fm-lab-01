import { lightTheme } from "@/themes/light";
import { ThemeProvider } from "@shopify/restyle";
import { FC } from "react";
import { Home } from "../components/home";

const Index: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  );
};

export default Index;
