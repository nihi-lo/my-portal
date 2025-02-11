import { useDisclosure } from "@heroui/react";
import { useMemo } from "react";

import { useFavoriteAppOrderStore } from "@/stores/favoriteAppOrderStore";
import { type SubAppId } from "@/types/subAppId";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  disabledDropdownItemKeys: Iterable<string>;
  isSubAppAboutModalOpen: boolean;
}

interface Action {
  addFavoriteApp?: () => void;
  closeSubAppAboutModal: () => void;
  openSubAppAboutModal: () => void;
  removeFavoriteApp?: () => void;
}

interface Argument {
  subAppId: SubAppId | undefined;
}

const useSubAppOperateDropdown: ContainerHook<State, Action, Argument> = (args) => {
  const { subAppId } = args;

  const favoriteAppOrder = useFavoriteAppOrderStore((state) => state.favoriteAppOrder);

  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const {
    isOpen: isSubAppAboutModalOpen,
    onOpen: onSubAppAboutModalOpen,
    onClose: onSubAppAboutModalClose,
  } = useDisclosure();

  const disabledDropdownItemKeys = useMemo(() => {
    if (subAppId === undefined) {
      return ["about", "add", "remove"];
    }

    return favoriteAppOrder.includes(subAppId) ? ["add"] : ["remove"];
  }, [subAppId, favoriteAppOrder]);

  return {
    state: {
      disabledDropdownItemKeys,
      isSubAppAboutModalOpen,
    },
    action: {
      addFavoriteApp: subAppId ? () => addFavoriteAppId(subAppId) : undefined,
      closeSubAppAboutModal: onSubAppAboutModalClose,
      openSubAppAboutModal: onSubAppAboutModalOpen,
      removeFavoriteApp: subAppId ? () => removeFavoriteAppId(subAppId) : undefined,
    },
  };
};

export { useSubAppOperateDropdown };
