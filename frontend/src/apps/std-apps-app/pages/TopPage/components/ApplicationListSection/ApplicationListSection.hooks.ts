import { useMemo, useState } from "react";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
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
  const subAppList = useSubAppStore((state) => state.subAppList);

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
                    description: app.metadata.description,
                    iconContent: app.metadata.Icon(),
                    subAppTopUrl: `/apps/${app.metadata.id}`,
                    title: app.metadata.title,
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
    [latestSearchValue, subAppList],
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
