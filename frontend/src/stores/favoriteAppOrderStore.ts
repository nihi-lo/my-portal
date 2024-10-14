import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { type SubAppId } from "@/types/subAppId";

interface State {
  favoriteAppOrder: SubAppId[];
}

interface Action {
  addFavoriteAppId: (newAppId: SubAppId) => void;
  removeFavoriteAppId: (removeAppId: SubAppId) => void;
  updateFavoriteAppOrder: (appOrder: SubAppId[]) => void;
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
