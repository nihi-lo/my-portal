import { Button, ButtonGroup } from "@nextui-org/react";
import { RiCloseLine, RiSubtractLine } from "react-icons/ri";

import { useWindowControlButtonGroup } from "./WindowControlButtonGroup.hooks";

const WindowControlButtonGroup = (): React.JSX.Element => {
  const {
    state: { windowToggleButton },
    action: { minimizeWindow, toggleWindowMaximize, quitWindow },
  } = useWindowControlButtonGroup();

  return (
    <ButtonGroup>
      <Button
        isIconOnly
        disableRipple
        radius="none"
        color="default"
        variant="ghost"
        className="h-9 w-11 border-none"
        onClick={minimizeWindow}
      >
        <RiSubtractLine className="size-6 text-foreground" />
      </Button>
      <Button
        isIconOnly
        disableRipple
        radius="none"
        color="default"
        variant="ghost"
        className="h-9 w-11 border-none"
        onClick={toggleWindowMaximize}
      >
        {windowToggleButton.Icon && (
          <windowToggleButton.Icon className="size-[18px] text-foreground" />
        )}
      </Button>
      <Button
        isIconOnly
        disableRipple
        radius="none"
        color="danger"
        variant="ghost"
        className="h-9 w-11 border-none"
        onClick={quitWindow}
      >
        <RiCloseLine className="size-6 text-foreground group-data-[hover]:text-white" />
      </Button>
    </ButtonGroup>
  );
};

export { WindowControlButtonGroup };
