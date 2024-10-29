import { type ContainerHook } from "@/utils/containerHook";

import { type HStackVariantProps, hStackVariants } from "./HStack.variants";

interface State {
  tvSlots: {
    base: (className?: string) => string;
  };
}

type Action = undefined;

interface Argument {
  align: HStackVariantProps["align"];
  justify: HStackVariantProps["justify"];
  wrap: HStackVariantProps["wrap"];
  gap: HStackVariantProps["gap"];
  p: HStackVariantProps["p"];
  px: HStackVariantProps["px"];
  py: HStackVariantProps["py"];
  pt: HStackVariantProps["pt"];
  grow: HStackVariantProps["grow"];
}

const useHStack: ContainerHook<State, Action, Argument> = (args) => {
  const { align, justify, wrap, gap, p, px, py, pt, grow } = args;

  const { base } = hStackVariants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return {
    state: {
      tvSlots: {
        base: (className) => base({ className }),
      },
    },
    action: undefined,
  };
};

export { useHStack };
