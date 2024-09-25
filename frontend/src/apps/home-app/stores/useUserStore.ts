import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface State {
  name: string;
}

interface Action {
  updateName: (by: string) => void;
}

const useUserStore = create<State & Action>()(
  persist(
    immer((set) => ({
      /* State */
      name: "",

      /* Action */
      updateName: (by) => set((state) => void (state.name = by)),
    })),
    {
      name: "home-app.user",
    },
  ),
);

export { useUserStore };
