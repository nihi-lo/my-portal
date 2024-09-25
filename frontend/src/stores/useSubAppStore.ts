import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type SubApp } from "@/types/subApp";

interface State {
  subAppList: SubApp[];
}

interface Action {
  setSubAppList: (value: SubApp[]) => void;
}

const useSubAppStore = create<State & Action>()(
  immer((set) => ({
    /* State */
    subAppList: [],

    /* Action */
    setSubAppList: (value) => set((state) => void (state.subAppList = value)),
  })),
);

export { useSubAppStore };
