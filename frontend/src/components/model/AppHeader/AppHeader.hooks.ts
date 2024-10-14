import { useMemo } from "react";

import { WindowToggleMaximise } from "@wailsjs/runtime/runtime";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { useOS } from "@/hooks/useOS";
import { useActiveAppStore } from "@/stores/activeAppStore";
import { OS } from "@/types/enum/os";
import { type SubAppId } from "@/types/subAppIDTemp";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  activeAppId: SubAppId | undefined;
  showBrandLogo: boolean;
  showSubAppOperateDropdown: boolean;
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

  const showSubAppOperateDropdown = useMemo(
    () => (activeApp ? activeApp.metadata.id !== stdAppsMetadata.id : false),
    [activeApp],
  );
  const showBrandLogo = useMemo(() => os === OS.Windows, [os]);
  const showWindowControl = useMemo(() => os === OS.Windows, [os]);
  const windowTitle = useMemo(() => (activeApp ? activeApp.metadata.title : ""), [activeApp]);

  return {
    state: {
      activeAppId: activeApp?.metadata.id,
      showBrandLogo,
      showSubAppOperateDropdown,
      showWindowControl,
      windowTitle,
    },
    action: {
      toggleWindowMaximize: WindowToggleMaximise,
    },
  };
};

export { useAppHeader };
