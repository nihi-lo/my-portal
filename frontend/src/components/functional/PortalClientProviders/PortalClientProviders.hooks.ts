import { useEffect } from "react";
import { useMatch } from "react-router-dom";

import { UpdateSessionAsync } from "@wailsjs/go/portalservice/Service";
import { EventsOn } from "@wailsjs/runtime/runtime";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { subApps } from "@/apps/subApps";
import { useActiveAppStore } from "@/stores/activeAppStore";
import { useSessionStore } from "@/stores/sessionStore";
import { useSubAppStore } from "@/stores/subAppStore";
import { type SubApp } from "@/types/subApp";
import { type ContainerHook } from "@/utils/containerHook";

type State = Record<string, never>;

type Action = Record<string, never>;

const usePortalClientProviders: ContainerHook<State, Action> = () => {
  const updateActiveApp = useActiveAppStore((state) => state.updateActiveApp);
  const updateSession = useSessionStore((state) => state.updateSession);
  const updateSubAppList = useSubAppStore((state) => state.updateSubAppList);

  const topMatch = useMatch("/");
  const appsMatch = useMatch("/apps/:appId/*");

  useEffect(() => {
    const subAppList: SubApp[] = [];
    subApps.forEach((app) => subAppList.push(app));
    updateSubAppList(subAppList);
  }, [updateSubAppList]);

  useEffect(() => {
    void UpdateSessionAsync();
  }, []);

  useEffect(() => {
    EventsOn("portalservice.onSessionTokenUpdate", updateSession);
  }, [updateSession]);

  useEffect(() => {
    // 現在のURLから起動アプリを判別し、 ActiveAppId に設定する
    if (topMatch) {
      updateActiveApp(stdAppsMetadata.id);
    } else if (appsMatch) {
      updateActiveApp(appsMatch.params.appId);
    } else {
      updateActiveApp(undefined);
    }
  }, [appsMatch, topMatch, updateActiveApp]);

  return {
    state: {},
    action: {},
  };
};

export { usePortalClientProviders };
