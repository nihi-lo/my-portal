import { useOS } from "@/hooks/useOS";
import { useWindow } from "@/hooks/useWindow";
import { OS } from "@/types/enum/os";
import { type ContainerHook } from "@/utils/containerHook";

import { rootLayoutVariants } from "./RootLayout.variants";

interface State {
  tvSlots: {
    base: () => string;
  };
}

type Action = undefined;

const useRootLayout: ContainerHook<State, Action> = () => {
  const {
    state: { isMaximised },
  } = useWindow();
  const {
    state: { os },
  } = useOS();

  const { base } = rootLayoutVariants({
    showWindowBorder: os === OS.Windows && !isMaximised,
  });

  return {
    state: {
      tvSlots: {
        base,
      },
    },
    action: undefined,
  };
};

export { useRootLayout };
