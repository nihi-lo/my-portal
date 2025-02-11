import { Button, ButtonGroup } from "@heroui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { useWindowNavigationButtonGroup } from "./WindowNavigationButtonGroup.hooks";

const WindowNavigationButtonGroup = (): React.JSX.Element => {
  const {
    state: { pageBackButton, pageForwardButton },
    action: { backPage, forwardPage },
  } = useWindowNavigationButtonGroup();

  return (
    <ButtonGroup>
      <Button
        disableRipple
        isDisabled={pageBackButton.isDisabled}
        isIconOnly
        onClick={backPage}
        radius="none"
        size="sm"
        variant="ghost"
        className="h-9 border-none"
      >
        <RiArrowLeftSLine className="size-6" />
      </Button>
      <Button
        disableRipple
        isDisabled={pageForwardButton.isDisabled}
        isIconOnly
        onClick={forwardPage}
        radius="none"
        size="sm"
        variant="ghost"
        className="h-9 border-none"
      >
        <RiArrowRightSLine className="size-6" />
      </Button>
    </ButtonGroup>
  );
};

export { WindowNavigationButtonGroup };
