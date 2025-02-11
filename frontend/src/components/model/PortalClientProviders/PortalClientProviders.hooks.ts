import { useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";

import { UpdateSessionAsync } from "@wailsjs/go/portalservice/Service";
import { EventsOn } from "@wailsjs/runtime/runtime";

import { subApp as stdAppsApp } from "@/apps/std-apps-app";
import { subApps } from "@/apps/subApps";
import { useActiveAppStore } from "@/stores/activeAppStore";
import { useSessionStore } from "@/stores/sessionStore";
import { useSubAppStore } from "@/stores/subAppStore";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppId";
import { type ContainerHook } from "@/utils/containerHook";

type State = undefined;

interface Action {
  navigate: (path: string) => void;
}

const usePortalClientProviders: ContainerHook<State, Action> = () => {
  const updateActiveApp = useActiveAppStore((state) => state.updateActiveApp);
  const updateSession = useSessionStore((state) => state.updateSession);
  const updateSubAppList = useSubAppStore((state) => state.updateSubAppList);

  const navigate = useNavigate();
  const topMatch = useMatch("/");
  const appsMatch = useMatch("/apps/:appId/*");

  useEffect(() => {
    void UpdateSessionAsync();
  }, []);

  useEffect(() => {
    // 現在のURLからアクティブなアプリを判別し、 ActiveAppId に設定する
    if (topMatch) {
      updateActiveApp(stdAppsApp.id);
    } else if (appsMatch) {
      if (appsMatch.params.appId !== undefined) {
        updateActiveApp(appsMatch.params.appId as SubAppId);
      } else {
        updateActiveApp(undefined);
      }
    } else {
      updateActiveApp(undefined);
    }
  }, [appsMatch, topMatch, updateActiveApp]);

  useEffect(() => {
    EventsOn("portalservice.onSessionTokenUpdate", updateSession);
  }, [updateSession]);

  useEffect(() => {
    const subAppList: SubApp[] = [];
    subApps.forEach((app) => subAppList.push(app));
    updateSubAppList(subAppList);
  }, [updateSubAppList]);

  return {
    state: undefined,
    action: {
      navigate: (path) => void navigate(path),
    },
  };
};

export { usePortalClientProviders };
