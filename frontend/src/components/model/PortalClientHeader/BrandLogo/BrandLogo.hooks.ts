import { Quit } from "@wailsjs/runtime/runtime";

import { type ContainerHook } from "@/utils/containerHook";

type State = Record<string, never>;

interface Action {
  quitWindow: () => void;
}

const useBrandLogo: ContainerHook<State, Action> = () => {
  return {
    state: {},
    action: {
      quitWindow: Quit,
    },
  };
};

export { useBrandLogo };
