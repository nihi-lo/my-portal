import { useMemo } from "react";

import { useSubAppStore } from "@/stores/subAppStore";
import { type SubAppId } from "@/types/subAppId";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  title: string;
}

type Action = undefined;

interface Argument {
  subAppId: SubAppId | undefined;
}

const useSubAppAboutModal: ContainerHook<State, Action, Argument> = (args) => {
  const { subAppId } = args;

  const subAppList = useSubAppStore((state) => state.subAppList);

  const targetSubApp = useMemo(
    () => subAppId && subAppList.find((subApp) => subApp.id === subAppId),
    [subAppId, subAppList],
  );

  return {
    state: {
      title: targetSubApp ? targetSubApp.metadata.title : "",
    },
    action: undefined,
  };
};

export { useSubAppAboutModal };
