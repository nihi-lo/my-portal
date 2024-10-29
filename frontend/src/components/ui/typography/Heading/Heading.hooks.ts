import { type ContainerHook } from "@/utils/containerHook";

import { headingVariants } from "./Heading.variants";

interface State {
  tvSlots: {
    base: (className?: string) => string;
  };
}

type Action = undefined;

const useHeading: ContainerHook<State, Action> = () => {
  const { base } = headingVariants();

  return {
    state: {
      tvSlots: {
        base: (className) => base({ className }),
      },
    },
    action: undefined,
  };
};

export { useHeading };
