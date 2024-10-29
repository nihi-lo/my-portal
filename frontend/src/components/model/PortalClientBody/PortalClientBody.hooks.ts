import { type ContainerHook } from "@/utils/containerHook";

import { portalClientBodyVariants } from "./PortalClientBody.variants";

interface State {
  tvSlots: {
    base: () => string;
    inner: () => string;
  };
}

type Action = undefined;

const usePortalClientBody: ContainerHook<State, Action> = () => {
  const { base, inner } = portalClientBodyVariants();

  return {
    state: {
      tvSlots: {
        base,
        inner,
      },
    },
    action: undefined,
  };
};

export { usePortalClientBody };
