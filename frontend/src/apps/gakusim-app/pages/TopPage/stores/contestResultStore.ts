import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// eslint-disable-next-line strict-dependencies/strict-dependencies
import { SimulateContestAsync } from "@wailsjs/go/gakusimservice/Service";

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
        interface Response {
          id: string;
          name: string;
          email: string;
        }

        const result = await SimulateContestAsync();
        const res = JSON.parse(result) as Response;
        console.log(res);
      } finally {
        set((state) => void (state.isLoading = false));
      }
    },
  })),
);

export { useContestResultStore };
