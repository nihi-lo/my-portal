import { type ContainerHook } from "@/utils/containerHook";

import { type SectionVariantProps, sectionVariants } from "./Section.variants";

interface State {
  tvSlots: {
    base: () => string;
  };
}

type Action = undefined;

interface Argument {
  p: SectionVariantProps["p"];
  px: SectionVariantProps["px"];
  py: SectionVariantProps["py"];
  pt: SectionVariantProps["pt"];
  grow: SectionVariantProps["grow"];
}

const useSection: ContainerHook<State, Action, Argument> = (args) => {
  const { p, px, py, pt, grow } = args;

  const { base } = sectionVariants({ p, px, py, pt, grow });

  return {
    state: {
      tvSlots: {
        base,
      },
    },
    action: undefined,
  };
};

export { useSection };
