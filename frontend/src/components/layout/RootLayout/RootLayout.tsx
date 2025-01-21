import { Outlet } from "react-router-dom";

import { PortalClientBody } from "@/components/model/PortalClientBody";
import { PortalClientHeader } from "@/components/model/PortalClientHeader";
import { PortalClientSideBar } from "@/components/model/PortalClientSideBar";
import { VStack, HStack } from "@/components/ui";

import { useRootLayout } from "./RootLayout.hooks";

const RootLayout = (): React.JSX.Element => {
  const {
    state: { tvSlots },
  } = useRootLayout();

  return (
    <VStack className={tvSlots.base()}>
      <PortalClientHeader />
      <HStack grow="1" className="overflow-hidden overscroll-y-auto">
        <HStack className="sticky top-0 z-10">
          <PortalClientSideBar />
        </HStack>
        <PortalClientBody>
          <Outlet />
        </PortalClientBody>
      </HStack>
    </VStack>
  );
};

export { RootLayout };
