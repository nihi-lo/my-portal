import { VStack } from "@/components/ui";

import { AppSettingsArea } from "./AppSettingsArea";
import { SubAppSelectionArea } from "./SubAppSelectionArea";

const AppSideBar = (): JSX.Element => {
  return (
    <VStack as="aside" align="center" justify="between" className="h-full w-20">
      <SubAppSelectionArea />
      <AppSettingsArea />
    </VStack>
  );
};

export { AppSideBar };
