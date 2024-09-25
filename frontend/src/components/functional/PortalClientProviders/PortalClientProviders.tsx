import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useNavigate } from "react-router-dom";

import { usePortalClientProviders } from "./PortalClientProviders.hooks";

interface Props {
  children: React.ReactNode;
}

const PortalClientProviders = (props: Props): JSX.Element => {
  const { children } = props;

  const _ = usePortalClientProviders();

  const navigate = useNavigate();

  return (
    <NextUIProvider locale="ja-JP" navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="system" storageKey="portal-client.theme">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export { PortalClientProviders };
