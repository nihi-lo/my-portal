import { useMemo } from "react";

import { WindowToggleMaximise } from "@wailsjs/runtime/runtime";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { useOS } from "@/hooks/useOS";
import { useActiveAppStore } from "@/stores/activeAppStore";
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
  const activeApp = useActiveAppStore((state) => state.activeApp);

  const {
    state: { os },
  } = useOS();

  const showActiveAppDropdownMenu = useMemo(
    () => activeApp?.metadata.id !== stdAppsMetadata.id,
    [activeApp],
  );
  const showBrandLogo = useMemo(() => os === "windows", [os]);
  const showWindowControl = useMemo(() => os === "windows", [os]);
  const windowTitle = useMemo(() => (activeApp ? activeApp.metadata.title : ""), [activeApp]);

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
