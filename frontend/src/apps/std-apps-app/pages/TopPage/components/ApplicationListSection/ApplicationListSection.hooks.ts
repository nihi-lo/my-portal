import { useMemo, useState } from "react";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { useFavoriteAppOrderStore } from "@/stores/favoriteAppOrderStore";
import { useSubAppStore } from "@/stores/subAppStore";
import { type ContainerHook } from "@/utils/containerHook";

import { type ListItem } from "./ApplicationListSection.types";

interface State {
  listItems: ListItem[];
  searchResultMessage: string;
}

interface Action {
  searchApplication: (searchValue: string) => void;
}

const useApplicationListSection: ContainerHook<State, Action> = () => {
  const favoriteAppOrder = useFavoriteAppOrderStore((state) => state.favoriteAppOrder);
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
                    description: app.metadata.description,
                    disabledDropdownItemKeys: favoriteAppOrder.includes(app.metadata.id)
                      ? new Set(["add"])
                      : new Set(["remove"]),
                    iconContent: app.metadata.Icon(),
                    subAppTopUrl: `/apps/${app.metadata.id}`,
                    title: app.metadata.title,
                    addFavoriteApp: () => addFavoriteAppId(app.metadata.id),
                    removeFavoriteApp: () => removeFavoriteAppId(app.metadata.id),
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
    [addFavoriteAppId, favoriteAppOrder, latestSearchValue, removeFavoriteAppId, subAppList],
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
      searchApplication: setLatestSearchValue,
    },
  };
};

export { useApplicationListSection };
