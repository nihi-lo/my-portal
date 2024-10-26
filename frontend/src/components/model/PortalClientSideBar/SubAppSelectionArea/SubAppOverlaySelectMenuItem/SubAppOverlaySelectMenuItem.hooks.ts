import { useMemo } from "react";

import { useSubAppStore } from "@/stores/subAppStore";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppId";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  subApp: SubApp | undefined;
}

type Action = undefined;

interface Argument {
  subAppId: SubAppId;
}

const useSubAppOverlaySelectMenuItem: ContainerHook<State, Action, Argument> = (args) => {
  const { subAppId } = args;

  const subAppList = useSubAppStore((state) => state.subAppList);

  const subApp = useMemo(
    () => subAppList.find((app) => app.id === subAppId),
    [subAppId, subAppList],
  );

  return {
    state: {
      subApp,
    },
    action: undefined,
  };
};

export { useSubAppOverlaySelectMenuItem };
