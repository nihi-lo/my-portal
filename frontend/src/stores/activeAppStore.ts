import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { subApps } from "@/apps/subApps";
import { type SubApp } from "@/types/subApp";
import { type SubAppID } from "@/types/subAppID";

interface State {
  activeApp: SubApp | undefined;
}

interface Action {
  setActiveApp: (appId: SubAppID | undefined) => void;
}

const useActiveAppStore = create<State & Action>()(
  immer((set) => ({
    /* State */
    activeApp: undefined,

    /* Action */
    setActiveApp: (appId) =>
      set((state) => void (appId ? (state.activeApp = subApps.get(appId)) : undefined)),
  })),
);

export { useActiveAppStore };
