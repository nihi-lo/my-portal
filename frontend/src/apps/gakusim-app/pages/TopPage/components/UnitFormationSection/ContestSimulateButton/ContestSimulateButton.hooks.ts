import { useContestResultStore } from "@/apps/gakusim-app/pages/TopPage/stores/contestResultStore";
import { type ContainerHook } from "@/utils/containerHook";

import { contestSimulateButtonVariants } from "./ContestSimulateButton.variants";

interface State {
  isLoading: boolean;
  tvSlots: {
    startContent: () => string;
  };
}

interface Action {
  simulateContest: () => void;
}

const useContestSimulateButton: ContainerHook<State, Action> = () => {
  const isLoading = useContestResultStore((state) => state.isLoading);

  const SimulateContestAsync = useContestResultStore((state) => state.SimulateContestAsync);

  const { startContent } = contestSimulateButtonVariants({ isLoading });

  return {
    state: {
      isLoading,
      tvSlots: {
        startContent,
      },
    },
    action: {
      simulateContest: () => void SimulateContestAsync(),
    },
  };
};

export { useContestSimulateButton };
