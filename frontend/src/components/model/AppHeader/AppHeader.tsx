import { Divider } from "@nextui-org/react";

import { HStack } from "@/components/ui";

import { useAppHeader } from "./AppHeader.hooks";
import { BrandLogo } from "./BrandLogo";
import { WindowControlButtonGroup } from "./WindowControlButtonGroup";
import { WindowNavigationButtonGroup } from "./WindowNavigationButtonGroup";

const AppHeader = (): JSX.Element => {
  const {
    state: { showBrandLogo, showWindowControl, windowTitle },
    action: { toggleWindowMaximize },
  } = useAppHeader();

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
        justify="center"
        onDoubleClick={toggleWindowMaximize}
        px="sm"
        className="mx-40 h-9"
      >
        <p className="truncate text-small font-semibold text-content2-foreground">{windowTitle}</p>
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

export { AppHeader };
