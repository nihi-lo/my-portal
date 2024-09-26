import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type SubAppID } from "@/types/subAppID";

interface State {
  favoriteApps: SubAppID[];
}

interface Action {
  setFavoriteApps: (by: SubAppID[]) => void;
  addFavoriteAppId: (newAppId: SubAppID) => void;
  removeFavoriteAppId: (removeAppId: SubAppID) => void;
}

const useFavoriteAppOrderStore = create<State & Action>()(
  persist(
    immer((set) => ({
      /* State */
      favoriteApps: [],

      /* Action */
      setFavoriteApps: (by) => set((state) => void (state.favoriteApps = by)),
      addFavoriteAppId: (newAppId) =>
        set((state) => {
          if (state.favoriteApps.includes(newAppId)) {
            return;
          }
          state.favoriteApps.push(newAppId);
        }),
      removeFavoriteAppId: (removeAppId) =>
        set((state) => {
          if (!state.favoriteApps.includes(removeAppId)) {
            return;
          }
          state.favoriteApps = state.favoriteApps.filter((appId) => appId !== removeAppId);
        }),
    })),
    {
      name: "portal-client.favorite-app-order",
    },
  ),
);

export { useFavoriteAppOrderStore };
