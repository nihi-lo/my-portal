import { useMemo } from "react";

import { useFavoriteAppOrderStore } from "@/stores/favoriteAppOrderStore";
import { type SubAppId } from "@/types/subAppId";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  disabledDropdownItemKeys: Iterable<string>;
}

interface Action {
  addFavoriteApp?: () => void;
  removeFavoriteApp?: () => void;
}

interface Argument {
  subAppId: SubAppId | undefined;
}

const useSubAppOperateDropdownProps: ContainerHook<State, Action, Argument> = (args) => {
  const { subAppId } = args;

  const favoriteAppOrder = useFavoriteAppOrderStore((state) => state.favoriteAppOrder);

  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const disabledDropdownItemKeys = useMemo(() => {
    if (subAppId === undefined) {
      return ["about", "add", "remove"];
    }

    return favoriteAppOrder.includes(subAppId) ? ["add"] : ["remove"];
  }, [subAppId, favoriteAppOrder]);

  return {
    state: {
      disabledDropdownItemKeys,
    },
    action: {
      addFavoriteApp: subAppId ? () => addFavoriteAppId(subAppId) : undefined,
      removeFavoriteApp: subAppId ? () => removeFavoriteAppId(subAppId) : undefined,
    },
  };
};

export { useSubAppOperateDropdownProps };
