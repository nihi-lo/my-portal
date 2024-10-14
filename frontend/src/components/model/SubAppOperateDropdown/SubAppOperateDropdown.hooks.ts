import { useMemo } from "react";

import { useFavoriteAppOrderStore } from "@/stores/favoriteAppOrderStore";
import { type SubAppID } from "@/types/subAppID";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  disabledDropdownItemKeys: Iterable<string>;
}

interface Action {
  addFavoriteApp?: () => void;
  removeFavoriteApp?: () => void;
}

interface Argument {
  appId: SubAppID | undefined;
}

const useSubAppOperateDropdownProps: ContainerHook<State, Action, Argument> = (args) => {
  const { appId } = args;

  const favoriteAppOrder = useFavoriteAppOrderStore((state) => state.favoriteAppOrder);

  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const disabledDropdownItemKeys = useMemo(() => {
    if (appId === undefined) {
      return ["about", "add", "remove"];
    }

    return favoriteAppOrder.includes(appId) ? ["add"] : ["remove"];
  }, [appId, favoriteAppOrder]);

  return {
    state: {
      disabledDropdownItemKeys,
    },
    action: {
      addFavoriteApp: appId ? () => addFavoriteAppId(appId) : undefined,
      removeFavoriteApp: appId ? () => removeFavoriteAppId(appId) : undefined,
    },
  };
};

export { useSubAppOperateDropdownProps };
