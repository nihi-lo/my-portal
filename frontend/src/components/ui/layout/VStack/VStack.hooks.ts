import { type ContainerHook } from "@/utils/containerHook";

import { type VStackVariantProps, vStackVariants } from "./VStack.variants";

interface State {
  tvSlots: {
    base: (className?: string) => string;
  };
}

type Action = undefined;

interface Argument {
  align: VStackVariantProps["align"];
  justify: VStackVariantProps["justify"];
  wrap: VStackVariantProps["wrap"];
  gap: VStackVariantProps["gap"];
  p: VStackVariantProps["p"];
  px: VStackVariantProps["px"];
  py: VStackVariantProps["py"];
  pt: VStackVariantProps["pt"];
  grow: VStackVariantProps["grow"];
}

const useVStack: ContainerHook<State, Action, Argument> = (args) => {
  const { align, justify, wrap, gap, p, px, py, pt, grow } = args;

  const { base } = vStackVariants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return {
    state: {
      tvSlots: {
        base: (className) => base({ className }),
      },
    },
    action: undefined,
  };
};

export { useVStack };
