import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { metadata as homeAppMetadata } from "@/apps/home-app/App";
import { type SubAppID } from "@/types/subAppID";

interface State {
  activeAppId: SubAppID | undefined;
}

interface Action {
  setActiveAppId: (appId: SubAppID | undefined) => void;
}

const useActiveAppIdStore = create<State & Action>()(
  immer((set) => ({
    /* State */
    activeAppId: homeAppMetadata.id,

    /* Action */
    setActiveAppId: (appId) => set((state) => void (state.activeAppId = appId)),
  })),
);

export { useActiveAppIdStore };
