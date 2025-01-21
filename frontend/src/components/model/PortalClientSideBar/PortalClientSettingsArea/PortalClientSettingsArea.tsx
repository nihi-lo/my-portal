import { VStack } from "@/components/ui";

import { AccountSignInButton } from "./AccountSignInButton";
import { ThemeToggleButton } from "./ThemeToggleButton";

const PortalClientSettingsArea = (): React.JSX.Element => {
  return (
    <VStack align="center" py="sm" gap="sm">
      <AccountSignInButton />
      <ThemeToggleButton size="lg" />
    </VStack>
  );
};

export { PortalClientSettingsArea };
