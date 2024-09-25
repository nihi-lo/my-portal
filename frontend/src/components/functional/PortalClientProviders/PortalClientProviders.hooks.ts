import { useEffect } from "react";
import { useMatch } from "react-router-dom";

import { UpdateSessionAsync } from "@wailsjs/go/portalservice/Service";
import { EventsOn } from "@wailsjs/runtime/runtime";

import { metadata as homeAppMetadata } from "@/apps/home-app/App";
import { useActiveAppIdStore } from "@/stores/useActiveAppIdStore";
import { useSessionStore } from "@/stores/useSessionStore";
import { type ContainerHook } from "@/utils/containerHook";

type State = Record<string, never>;

type Action = Record<string, never>;

const usePortalClientProviders: ContainerHook<State, Action> = () => {
  const topMatch = useMatch("/");
  const appsMatch = useMatch("/apps/:appId/*");

  const setActiveAppId = useActiveAppIdStore((state) => state.setActiveAppId);
  const updateSession = useSessionStore((state) => state.updateSession);

  useEffect(() => {
    void UpdateSessionAsync();
  }, []);

  useEffect(() => {
    EventsOn("portal-client.onSessionTokenUpdate", updateSession);
  }, [updateSession]);

  useEffect(() => {
    // 現在のURLから起動アプリを判別し、 ActiveAppId に設定する
    if (topMatch) {
      setActiveAppId(homeAppMetadata.id);
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
