import { type ContainerHook } from "@/utils/containerHook";

import {
  type SubAppSelectIconVariantProps,
  subAppSelectIconVariants,
} from "./SubAppSelectIcon.variants";

interface State {
  tvSlots: {
    iconWrapper: () => string;
    selectionState: () => string;
  };
}

type Action = undefined;

interface Argument {
  disableAnimation: SubAppSelectIconVariantProps["disableAnimation"];
  hideSelectionState: SubAppSelectIconVariantProps["hideSelectionState"];
  isSelected: SubAppSelectIconVariantProps["isSelected"];
}

const useSubAppSelectIcon: ContainerHook<State, Action, Argument> = (args) => {
  const { disableAnimation, hideSelectionState, isSelected } = args;

  const { iconWrapper, selectionState } = subAppSelectIconVariants({
    disableAnimation,
    hideSelectionState,
    isSelected,
  });

  return {
    state: {
      tvSlots: {
        iconWrapper,
        selectionState,
      },
    },
    action: undefined,
  };
};

export { useSubAppSelectIcon };
