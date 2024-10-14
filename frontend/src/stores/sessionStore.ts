import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { type Session } from "@/types/session";
import { SessionStatus } from "@/types/enum/sessionStatus";

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
    status: SessionStatus.Unauthenticated,

    /* Action */
    updateSession: (session, status) =>
      set((state) => {
        switch (status) {
          case SessionStatus.Loading:
            state.session = undefined;
            break;
          case SessionStatus.Authenticated:
            state.session = session;
            break;
          case SessionStatus.Unauthenticated:
            state.session = null;
            break;
        }
        state.status = status;
      }),
  })),
);

export { useSessionStore };
