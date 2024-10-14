import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { subApps } from "@/apps/subApps";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppId";

interface State {
  activeApp: SubApp | undefined;
}

interface Action {
  updateActiveApp: (appId: SubAppId | undefined) => void;
}

const useActiveAppStore = create<State & Action>()(
  immer((set) => ({
    /* State */
    activeApp: undefined,

    /* Action */
    updateActiveApp: (appId) =>
      set((state) => void (appId ? (state.activeApp = subApps.get(appId)) : undefined)),
  })),
);

export { useActiveAppStore };
