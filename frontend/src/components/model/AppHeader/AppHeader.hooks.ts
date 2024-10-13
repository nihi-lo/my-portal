import { useMemo } from "react";

import { WindowToggleMaximise } from "@wailsjs/runtime/runtime";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { useOS } from "@/hooks/useOS";
import { useActiveAppIdStore } from "@/stores/useActiveAppIdStore";
import { useSubAppStore } from "@/stores/useSubAppStore";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  showActiveAppDropdownMenu: boolean;
  showBrandLogo: boolean;
  showWindowControl: boolean;
  windowTitle: string;
}

interface Action {
  toggleWindowMaximize: () => void;
}

const useAppHeader: ContainerHook<State, Action> = () => {
  const activeAppId = useActiveAppIdStore((state) => state.activeAppId);
  const subAppList = useSubAppStore((state) => state.subAppList);

  const {
    state: { os },
  } = useOS();

  const activeApp = useMemo(
    () => subAppList.find((app) => app.metadata.id === activeAppId),
    [activeAppId, subAppList],
  );
  const showActiveAppDropdownMenu = useMemo(
    () => activeApp?.metadata.id !== stdAppsMetadata.id,
    [activeApp],
  );
  const showBrandLogo = useMemo(() => os === "windows", [os]);
  const showWindowControl = useMemo(() => os === "windows", [os]);
  const windowTitle = useMemo(() => activeApp?.metadata.title ?? "", [activeApp?.metadata.title]);

  return {
    state: {
      showActiveAppDropdownMenu,
      showBrandLogo,
      showWindowControl,
      windowTitle,
    },
    action: {
      toggleWindowMaximize: WindowToggleMaximise,
    },
  };
};

export { useAppHeader };
