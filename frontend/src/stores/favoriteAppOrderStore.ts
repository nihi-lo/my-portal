import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type SubAppID } from "@/types/subAppID";

interface State {
  favoriteAppOrder: SubAppID[];
}

interface Action {
  addFavoriteAppId: (newAppId: SubAppID) => void;
  removeFavoriteAppId: (removeAppId: SubAppID) => void;
  updateFavoriteAppOrder: (appOrder: SubAppID[]) => void;
}

const useFavoriteAppOrderStore = create<State & Action>()(
  persist(
    immer((set) => ({
      /* State */
      favoriteAppOrder: [],

      /* Action */
      addFavoriteAppId: (newAppId) =>
        set((state) => {
          if (state.favoriteAppOrder.includes(newAppId)) {
            return;
          }
          state.favoriteAppOrder.push(newAppId);
        }),
      removeFavoriteAppId: (removeAppId) =>
        set((state) => {
          if (!state.favoriteAppOrder.includes(removeAppId)) {
            return;
          }
          state.favoriteAppOrder = state.favoriteAppOrder.filter((appId) => appId !== removeAppId);
        }),
      updateFavoriteAppOrder: (appOrder) =>
        set((state) => void (state.favoriteAppOrder = appOrder)),
    })),
    {
      name: "portal-client.favorite-app-order",
    },
  ),
);

export { useFavoriteAppOrderStore };
