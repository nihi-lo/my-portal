import { Button, Divider } from "@nextui-org/react";
import { RiMore2Fill } from "react-icons/ri";

import { SubAppOperateDropdown } from "@/components/model/SubAppOperateDropdown";
import { HStack } from "@/components/ui";

import { BrandLogo } from "./BrandLogo";
import { usePortalClientHeader } from "./PortalClientHeader.hooks";
import { WindowControlButtonGroup } from "./WindowControlButtonGroup";
import { WindowNavigationButtonGroup } from "./WindowNavigationButtonGroup";

const PortalClientHeader = (): JSX.Element => {
  const {
    state: {
      activeAppIconContent,
      activeAppId,
      showActiveAppIconContent,
      showBrandLogo,
      showSubAppOperateDropdown,
      showWindowControl,
      windowTitle,
    },
    action: { toggleWindowMaximize },
  } = usePortalClientHeader();

  return (
    <header className="relative cursor-default select-none" style={{ widows: 1 }}>
      <HStack
        align="center"
        justify="start"
        onDoubleClick={toggleWindowMaximize}
        className="absolute left-0 top-0 h-9 w-40"
      >
        {showBrandLogo && <BrandLogo />}
      </HStack>

      <HStack
        align="center"
        gap="sm"
        justify="center"
        onDoubleClick={toggleWindowMaximize}
        className="mx-40 h-9"
      >
        {showActiveAppIconContent && activeAppIconContent}
        <p className="truncate text-small font-semibold text-content2-foreground">{windowTitle}</p>
        {showSubAppOperateDropdown && (
          <SubAppOperateDropdown
            subAppId={activeAppId}
            triggerContent={
              <Button isIconOnly radius="full" variant="light" className="h-6 w-6 min-w-6">
                <RiMore2Fill className="text-small" />
              </Button>
            }
          />
        )}
      </HStack>

      <HStack align="center" justify="end" className="absolute right-0 top-0 h-9 w-40">
        <div onDoubleClick={toggleWindowMaximize} className="size-full" />
        <WindowNavigationButtonGroup />
        {showWindowControl && (
          <>
            <Divider orientation="vertical" className="mx-1 h-2/3" />
            <WindowControlButtonGroup />
          </>
        )}
      </HStack>
    </header>
  );
};

export { PortalClientHeader };
