import { Quit } from "@wailsjs/runtime/runtime";

import { type ContainerHook } from "@/utils/containerHook";

type State = undefined;

interface Action {
  quitWindow: () => void;
}

const useBrandLogo: ContainerHook<State, Action> = () => {
  return {
    state: undefined,
    action: {
      quitWindow: Quit,
    },
  };
};

export { useBrandLogo };
