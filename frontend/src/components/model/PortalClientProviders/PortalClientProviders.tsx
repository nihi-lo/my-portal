import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

import { usePortalClientProviders } from "./PortalClientProviders.hooks";

interface PortalClientProvidersProps {
  children: React.ReactNode;
}

const PortalClientProviders = (props: PortalClientProvidersProps): React.JSX.Element => {
  const { children } = props;
  const {
    action: { navigate },
  } = usePortalClientProviders();

  return (
    <HeroUIProvider locale="ja-JP" navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="system" storageKey="portal-client.theme">
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export { PortalClientProviders };
