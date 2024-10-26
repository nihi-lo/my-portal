import { useMemo } from "react";

import { subApp as stdAppsApp } from "@/apps/std-apps-app";
import { useSubAppStore } from "@/stores/subAppStore";
import { type ContainerHook } from "@/utils/containerHook";

import { type Route } from "./PortalClientRoute.types";

interface State {
  rootRouteContent: React.ReactNode;
  routeList: Route[];
}

type Action = undefined;

const usePortalClientRoute: ContainerHook<State, Action> = () => {
  const subAppList = useSubAppStore((state) => state.subAppList);

  const routeList = useMemo(
    () =>
      subAppList.map((app) => ({
        key: app.id,
        path: `/apps/${app.id}/*`,
        content: app.routeContent,
      })),
    [subAppList],
  );

  return {
    state: {
      rootRouteContent: stdAppsApp.routeContent,
      routeList,
    },
    action: undefined,
  };
};

export { usePortalClientRoute };
