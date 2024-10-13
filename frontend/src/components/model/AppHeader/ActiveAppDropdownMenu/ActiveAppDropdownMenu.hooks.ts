import { useMemo } from "react";

import { useActiveAppIdStore } from "@/stores/useActiveAppIdStore";
import { useFavoriteAppOrderStore } from "@/stores/useFavoriteAppOrderStore";
import { useSubAppStore } from "@/stores/useSubAppStore";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  disabledDropdownItemKeys: Iterable<string>;
}

interface Action {
  addFavoriteApp?: () => void;
  removeFavoriteApp?: () => void;
}

const useActiveAppDropdownMenu: ContainerHook<State, Action> = () => {
  const activeAppId = useActiveAppIdStore((state) => state.activeAppId);
  const favoriteApps = useFavoriteAppOrderStore((state) => state.favoriteApps);
  const subAppList = useSubAppStore((state) => state.subAppList);

  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const activeApp = useMemo(
    () => subAppList.find((app) => app.metadata.id === activeAppId),
    [activeAppId, subAppList],
  );
  const isAlreadyFavorited = useMemo(
    () => (activeApp ? favoriteApps.includes(activeApp.metadata.id) : false),
    [activeApp, favoriteApps],
  );

  return {
    state: {
      disabledDropdownItemKeys: isAlreadyFavorited ? new Set(["add"]) : new Set(["remove"]),
    },
    action: {
      addFavoriteApp: activeApp ? () => addFavoriteAppId(activeApp.metadata.id) : undefined,
      removeFavoriteApp: activeApp ? () => removeFavoriteAppId(activeApp.metadata.id) : undefined,
    },
  };
};

export { useActiveAppDropdownMenu };
