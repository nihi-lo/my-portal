import { useCallback } from "react";

import { SignInAsync } from "@wailsjs/go/portalservice/Service";

import { type CustomHook } from "@/utils/customHook";

type State = undefined;

interface Action {
  signIn: () => void;
}

const useAuth: CustomHook<State, Action> = () => {
  return {
    state: undefined,
    action: {
      signIn: useCallback(() => void SignInAsync(), []),
    },
  };
};

export { useAuth };
