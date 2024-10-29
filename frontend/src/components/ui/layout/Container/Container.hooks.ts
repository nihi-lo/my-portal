import { type ContainerHook } from "@/utils/containerHook";

import { containerVariants, type ContainerVariantProps } from "./Container.variants";

interface State {
  tvSlots: {
    base: (className?: string) => string;
  };
}

type Action = undefined;

interface Argument {
  p: ContainerVariantProps["p"];
  px: ContainerVariantProps["px"];
  py: ContainerVariantProps["py"];
  pt: ContainerVariantProps["pt"];
  grow: ContainerVariantProps["grow"];
}

const useContainer: ContainerHook<State, Action, Argument> = (args) => {
  const { p, px, py, pt, grow } = args;

  const { base } = containerVariants({ p, px, py, pt, grow });

  return {
    state: {
      tvSlots: {
        base: (className) => base({ className }),
      },
    },
    action: undefined,
  };
};

export { useContainer };
