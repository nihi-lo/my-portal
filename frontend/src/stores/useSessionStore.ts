import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type Session } from "@/types/session";
import { type SessionStatus } from "@/types/sessionStatus";

interface State {
  session: Session | undefined | null;
  status: SessionStatus;
}

interface Action {
  updateSession: (session: Session, status: SessionStatus) => void;
}

const useSessionStore = create<State & Action>()(
  immer((set) => ({
    /* State */
    session: null,
    status: "unauthenticated",

    /* Action */
    updateSession: (session, status) =>
      set((state) => {
        switch (status) {
          case "loading":
            state.session = undefined;
            break;
          case "unauthenticated":
            state.session = null;
            break;
          case "authenticated":
            state.session = session;
            break;
        }
        state.status = status;
      }),
  })),
);

export { useSessionStore };
