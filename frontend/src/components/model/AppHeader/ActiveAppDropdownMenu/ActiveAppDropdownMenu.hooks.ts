import { useMemo } from "react";

import { useActiveAppStore } from "@/stores/activeAppStore";
import { useFavoriteAppOrderStore } from "@/stores/favoriteAppOrderStore";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  disabledDropdownItemKeys: Iterable<string>;
}

interface Action {
  addFavoriteApp?: () => void;
  removeFavoriteApp?: () => void;
}

const useActiveAppDropdownMenu: ContainerHook<State, Action> = () => {
  const activeApp = useActiveAppStore((state) => state.activeApp);
  const favoriteAppOrder = useFavoriteAppOrderStore((state) => state.favoriteAppOrder);

  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const isAlreadyFavorited = useMemo(
    () => (activeApp ? favoriteAppOrder.includes(activeApp.metadata.id) : false),
    [activeApp, favoriteAppOrder],
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
