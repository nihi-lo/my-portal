import { Button } from "@nextui-org/react";
import { RiArrowRightLine } from "react-icons/ri";

import { useContestSimulateButton } from "./ContestSimulateButton.hooks";
import { contestSimulateButtonVariants } from "./ContestSimulateButton.variants";

const ContestSimulateButton = (): JSX.Element => {
  const {
    state: { isLoading, variantProps },
    action: { SimulateContest },
  } = useContestSimulateButton();

  const { startContent } = contestSimulateButtonVariants(variantProps);

  return (
    <Button
      color="primary"
      isLoading={isLoading}
      onClick={SimulateContest}
      size="lg"
      startContent={<RiArrowRightLine className={startContent()} />}
    >
      対戦開始
    </Button>
  );
};

export { ContestSimulateButton };
