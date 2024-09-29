import { useEffect, useState } from "react";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { useFavoriteAppOrderStore } from "@/stores/useFavoriteAppOrderStore";
import { useSubAppStore } from "@/stores/useSubAppStore";
import { type SubAppID } from "@/types/subAppID";
import { type ContainerHook } from "@/utils/containerHook";

import { type ListItem } from "./ApplicationListSection.types";

interface State {
  listItems: ListItem[];
}

interface Action {
  addFavoriteApp: (addAppId: SubAppID) => void;
  removeFavoriteApp: (removeAppId: SubAppID) => void;
}

const useApplicationListSection: ContainerHook<State, Action> = () => {
  const favoriteApps = useFavoriteAppOrderStore((state) => state.favoriteApps);
  const subAppList = useSubAppStore((state) => state.subAppList);
  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const [listItems, setListItems] = useState<ListItem[]>([]);

  useEffect(() => {
    setListItems(
      subAppList.reduce<ListItem[]>((acc, app) => {
        if (app.metadata.id === stdAppsMetadata.id) {
          return acc;
        }

        return [
          ...acc,
          {
            key: app.metadata.id,
            appId: app.metadata.id,
            href: `/apps/${app.metadata.id}`,
            Icon: app.metadata.Icon,
            title: app.metadata.title,
            description: app.metadata.description,
            isAlreadyFavorited: favoriteApps.includes(app.metadata.id),
          },
        ];
      }, []),
    );
  }, [favoriteApps, subAppList]);

  return {
    state: {
      listItems,
    },
    action: {
      addFavoriteApp: addFavoriteAppId,
      removeFavoriteApp: removeFavoriteAppId,
    },
  };
};

export { useApplicationListSection };
