import { useOS } from "@/hooks/useOS";
import { useWindow } from "@/hooks/useWindow";
import { OS } from "@/types/enum/os";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  showWindowBorder: boolean;
}

type Action = undefined;

const useRootLayout: ContainerHook<State, Action> = () => {
  const {
    state: { isMaximised },
  } = useWindow();
  const {
    state: { os },
  } = useOS();

  return {
    state: {
      showWindowBorder: os === OS.Windows && !isMaximised,
    },
    action: undefined,
  };
};

export { useRootLayout };
