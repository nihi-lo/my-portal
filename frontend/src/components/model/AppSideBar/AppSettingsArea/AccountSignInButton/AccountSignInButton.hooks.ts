import { useEffect, useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import { useSessionStore } from "@/stores/useSessionStore";
import { type ContainerHook } from "@/utils/containerHook";

import { type User } from "./AccountSignInButton.types";

interface State {
  isAuthenticated: boolean;
  user: User;
}

interface Action {
  signIn: () => void;
}

const useAccountSignInButton: ContainerHook<State, Action> = () => {
  const session = useSessionStore((state) => state.session);
  const sessionStatus = useSessionStore((state) => state.status);

  const {
    action: { signIn },
  } = useAuth();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User>({ name: "", image: "" });

  useEffect(() => {
    if (sessionStatus !== "authenticated") {
      setIsAuthenticated(false);
      return;
    }
    if (!session) {
      // NOTE: 認証済みなのに session情報 が存在しないのは異常パターン
      setIsAuthenticated(false);
      return;
    }
    setIsAuthenticated(true);

    setUser({
      name: session.user.name,
      image: session.user.image,
    });
  }, [session, sessionStatus]);

  return {
    state: {
      user,
      isAuthenticated,
    },
    action: {
      signIn,
    },
  };
};

export { useAccountSignInButton };
