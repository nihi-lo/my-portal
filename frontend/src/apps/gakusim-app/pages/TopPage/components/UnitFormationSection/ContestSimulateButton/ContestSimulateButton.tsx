import { Button } from "@heroui/react";
import { RiArrowRightLine } from "react-icons/ri";

import { useContestSimulateButton } from "./ContestSimulateButton.hooks";

const ContestSimulateButton = (): React.JSX.Element => {
  const {
    state: { isLoading, tvSlots },
    action: { simulateContest },
  } = useContestSimulateButton();

  return (
    <Button
      color="primary"
      isLoading={isLoading}
      onClick={simulateContest}
      size="lg"
      startContent={<RiArrowRightLine className={tvSlots.startContent()} />}
    >
      対戦開始
    </Button>
  );
};

export { ContestSimulateButton };
