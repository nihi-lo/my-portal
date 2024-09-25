import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type SubAppID } from "@/types/subAppID";

interface State {
  favoriteApps: SubAppID[];
}

interface Action {
  setFavoriteApps: (by: SubAppID[]) => void;
}

const useFavoriteAppOrderStore = create<State & Action>()(
  persist(
    immer((set) => ({
      /* State */
      favoriteApps: [
        "6876b3b6-307d-27ca-d845-6577357297c2" /* gakusim-app */,
        "c4db13c7-0be5-cc07-5de5-9843f757b8df" /* zzzbuild-app */,
      ],

      /* Action */
      setFavoriteApps: (by) => set((state) => void (state.favoriteApps = by)),
    })),
    {
      name: "portal-client.favorite-app-order",
    },
  ),
);

export { useFavoriteAppOrderStore };
