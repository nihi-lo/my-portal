import { useEffect } from "react";
import { useMatch } from "react-router-dom";

import { UpdateSessionAsync } from "@wailsjs/go/portalservice/Service";
import { EventsOn } from "@wailsjs/runtime/runtime";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { subApps } from "@/apps/subApps";
import { useActiveAppIdStore } from "@/stores/useActiveAppIdStore";
import { useSessionStore } from "@/stores/useSessionStore";
import { useSubAppStore } from "@/stores/useSubAppStore";
import { type SubApp } from "@/types/subApp";
import { type ContainerHook } from "@/utils/containerHook";

type State = Record<string, never>;

type Action = Record<string, never>;

const usePortalClientProviders: ContainerHook<State, Action> = () => {
  const topMatch = useMatch("/");
  const appsMatch = useMatch("/apps/:appId/*");

  const setActiveAppId = useActiveAppIdStore((state) => state.setActiveAppId);
  const updateSession = useSessionStore((state) => state.updateSession);

  const setSubAppList = useSubAppStore((state) => state.setSubAppList);

  useEffect(() => {
    const subAppList: SubApp[] = [];
    subApps.forEach((app) => subAppList.push(app));
    setSubAppList(subAppList);
  }, [setSubAppList]);

  useEffect(() => {
    void UpdateSessionAsync();
  }, []);

  useEffect(() => {
    EventsOn("portalservice.onSessionTokenUpdate", updateSession);
  }, [updateSession]);

  useEffect(() => {
    // 現在のURLから起動アプリを判別し、 ActiveAppId に設定する
    if (topMatch) {
      setActiveAppId(stdAppsMetadata.id);
    } else if (appsMatch) {
      setActiveAppId(appsMatch.params.appId);
    } else {
      setActiveAppId(undefined);
    }
  }, [appsMatch, setActiveAppId, topMatch]);

  return {
    state: {},
    action: {},
  };
};

export { usePortalClientProviders };
