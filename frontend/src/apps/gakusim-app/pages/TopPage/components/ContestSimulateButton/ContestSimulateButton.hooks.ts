import { useContestResultStore } from "@/apps/gakusim-app/pages/TopPage/stores/contestResultStore";
import { type ContainerHook } from "@/utils/containerHook";

import { type ContestSimulateButtonVariantProps } from "./ContestSimulateButton.variants";

interface State {
  isLoading: boolean;
  variantProps: ContestSimulateButtonVariantProps;
}

interface Action {
  SimulateContest: () => void;
}

const useContestSimulateButton: ContainerHook<State, Action> = () => {
  const isLoading = useContestResultStore((state) => state.isLoading);
  const SimulateContestAsync = useContestResultStore((state) => state.SimulateContestAsync);

  return {
    state: {
      isLoading,
      variantProps: {
        isLoading,
      },
    },
    action: {
      SimulateContest: () => void SimulateContestAsync(),
    },
  };
};

export { useContestSimulateButton };
