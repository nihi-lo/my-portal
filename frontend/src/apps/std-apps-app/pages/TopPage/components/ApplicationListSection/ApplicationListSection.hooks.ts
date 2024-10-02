import { useMemo, useState } from "react";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { useFavoriteAppOrderStore } from "@/stores/useFavoriteAppOrderStore";
import { useSubAppStore } from "@/stores/useSubAppStore";
import { type SubAppID } from "@/types/subAppID";
import { type ContainerHook } from "@/utils/containerHook";

import { type ListItem } from "./ApplicationListSection.types";

interface State {
  listItems: ListItem[];
  searchResultMessage: string;
}

interface Action {
  addFavoriteApp: (addAppId: SubAppID) => void;
  removeFavoriteApp: (removeAppId: SubAppID) => void;
  searchApplication: (searchValue: string) => void;
}

const useApplicationListSection: ContainerHook<State, Action> = () => {
  const favoriteApps = useFavoriteAppOrderStore((state) => state.favoriteApps);
  const subAppList = useSubAppStore((state) => state.subAppList);
  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const [latestSearchValue, setLatestSearchValue] = useState<string | undefined>(undefined);

  const toHiragana = (value: string): string => {
    return value.replace(/[\u30a1-\u30f6]/g, (substring: string): string => {
      const hiraganaCharCode: number = substring.charCodeAt(0) - 0x60;
      return String.fromCharCode(hiraganaCharCode);
    });
  };

  const listItems = useMemo(
    () =>
      subAppList
        .reduce<ListItem[]>(
          (acc, app) =>
            app.metadata.id === stdAppsMetadata.id
              ? acc
              : [
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
                ],
          [],
        )
        .filter((item) =>
          latestSearchValue === undefined
            ? true
            : toHiragana(item.title)
                .toLowerCase()
                .includes(toHiragana(latestSearchValue).toLowerCase()),
        ),
    [favoriteApps, latestSearchValue, subAppList],
  );

  const searchResultMessage = useMemo(() => {
    if (latestSearchValue === undefined || latestSearchValue === "") {
      return `全アプリの表示: ${listItems.length}件`;
    }
    return `"${latestSearchValue}"の検索結果: ${listItems.length}件`;
  }, [latestSearchValue, listItems]);

  return {
    state: {
      listItems,
      searchResultMessage,
    },
    action: {
      addFavoriteApp: addFavoriteAppId,
      removeFavoriteApp: removeFavoriteAppId,
      searchApplication: setLatestSearchValue,
    },
  };
};

export { useApplicationListSection };
