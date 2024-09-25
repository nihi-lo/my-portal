import { useCallback } from "react";

import { SignInAsync } from "@wailsjs/go/portalservice/Service";

import { type CustomHook } from "@/utils/customHook";

type State = Record<string, never>;

interface Action {
  signIn: () => void;
}

const useAuth: CustomHook<State, Action> = () => {
  return {
    state: {},
    action: {
      signIn: useCallback(() => void SignInAsync(), []),
    },
  };
};

export { useAuth };
