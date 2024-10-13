import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type SubApp } from "@/types/subApp";

interface State {
  subAppList: SubApp[];
}

interface Action {
  updateSubAppList: (appList: SubApp[]) => void;
}

const useSubAppStore = create<State & Action>()(
  immer((set) => ({
    /* State */
    subAppList: [],

    /* Action */
    updateSubAppList: (appList) => set((state) => void (state.subAppList = appList)),
  })),
);

export { useSubAppStore };
