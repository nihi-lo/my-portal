import { useEffect, useState } from "react";

import { WindowToggleMaximise } from "@wailsjs/runtime/runtime";

import { useOS } from "@/hooks/useOS";
import { useActiveAppIdStore } from "@/stores/useActiveAppIdStore";
import { useSubAppStore } from "@/stores/useSubAppStore";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  showBrandLogo: boolean | undefined;
  showWindowControl: boolean | undefined;
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

  const [showBrandLogo, setShowBrandLogo] = useState<boolean>();
  const [showWindowControl, setShowWindowControl] = useState<boolean>();
  const [windowTitle, setWindowTitle] = useState<string>("");

  useEffect(() => {
    setShowBrandLogo(os === "windows");
    setShowWindowControl(os === "windows");
  }, [os]);

  useEffect(() => {
    const subApp = subAppList.find((app) => app.metadata.id === activeAppId);
    if (subApp !== undefined) {
      setWindowTitle(subApp.metadata.title);
    } else {
      setWindowTitle("");
    }
  }, [activeAppId, subAppList]);

  return {
    state: {
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
