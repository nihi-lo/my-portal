import { type ContainerHook } from "@/utils/containerHook";

type State = Record<string, never>;

type Action = Record<string, never>;

const useTopPage: ContainerHook<State, Action> = () => {
  return {
    state: {},
    action: {},
  };
};

export { useTopPage };
