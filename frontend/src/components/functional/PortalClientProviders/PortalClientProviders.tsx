import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

import { usePortalClientProviders } from "./PortalClientProviders.hooks";

interface PortalClientProvidersProps {
  children: React.ReactNode;
}

const PortalClientProviders = (props: PortalClientProvidersProps): JSX.Element => {
  const { children } = props;
  const {
    action: { navigate },
  } = usePortalClientProviders();

  return (
    <NextUIProvider locale="ja-JP" navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="system" storageKey="portal-client.theme">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export { PortalClientProviders };
