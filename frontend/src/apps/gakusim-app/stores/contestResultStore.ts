import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { SimulateContestAsync } from "@wailsjs/go/gakusimservice/Service";

import { type SimulateContestResponse } from "@/apps/gakusim-app/types/simulateContest";

interface State {
  isLoading: boolean;
}

interface Action {
  SimulateContestAsync: () => Promise<void>;
}

const useContestResultStore = create<State & Action>()(
  immer((set) => ({
    /* State */
    isLoading: false,

    /* Action */
    SimulateContestAsync: async () => {
      set((state) => void (state.isLoading = true));
      try {
        const result = await SimulateContestAsync();
        const res = JSON.parse(result) as SimulateContestResponse;
        console.log(res);
      } finally {
        set((state) => void (state.isLoading = false));
      }
    },
  })),
);

export { useContestResultStore };
