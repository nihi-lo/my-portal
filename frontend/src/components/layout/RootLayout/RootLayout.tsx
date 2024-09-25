import { Outlet } from "react-router-dom";

import { AppBody } from "@/components/model/AppBody";
import { AppHeader } from "@/components/model/AppHeader";
import { AppSideBar } from "@/components/model/AppSideBar";
import { VStack, HStack } from "@/components/ui";

import { useRootLayout } from "./RootLayout.hooks";
import { rootLayoutVariants } from "./RootLayout.variants";

const RootLayout = (): JSX.Element => {
  const {
    state: { showWindowBorder },
  } = useRootLayout();

  const { base } = rootLayoutVariants({ showWindowBorder });

  return (
    <VStack className={base()}>
      <AppHeader />
      <HStack grow="1" className="overflow-hidden overscroll-y-auto">
        <HStack className="sticky top-0 z-10">
          <AppSideBar />
        </HStack>
        <AppBody>
          <Outlet />
        </AppBody>
      </HStack>
    </VStack>
  );
};

export { RootLayout };
