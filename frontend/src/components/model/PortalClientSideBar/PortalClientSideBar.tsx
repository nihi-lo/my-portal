import { VStack } from "@/components/ui";

import { PortalClientSettingsArea } from "./PortalClientSettingsArea";
import { SubAppSelectionArea } from "./SubAppSelectionArea";

const PortalClientSideBar = (): React.JSX.Element => {
  return (
    <VStack as="aside" align="center" justify="between" className="h-full w-20">
      <SubAppSelectionArea />
      <PortalClientSettingsArea />
    </VStack>
  );
};

export { PortalClientSideBar };
