import { useEffect, useState } from "react";
import { RiCheckboxBlankLine, RiCheckboxMultipleBlankLine } from "react-icons/ri";

import {
  Quit,
  WindowIsMaximised,
  WindowMinimise,
  WindowToggleMaximise,
} from "@wailsjs/runtime/runtime";

import { type ContainerHook } from "@/utils/containerHook";

import { type WindowToggleButton } from "./WindowControlButtonGroup.types";

interface State {
  windowToggleButton: WindowToggleButton;
}

interface Action {
  minimizeWindow: () => void;
  toggleWindowMaximize: () => void;
  quitWindow: () => void;
}

const useWindowControlButtonGroup: ContainerHook<State, Action> = () => {
  const [windowToggleButton, setWindowToggleButton] = useState<WindowToggleButton>({
    Icon: undefined,
  });

  useEffect(() => {
    void WindowIsMaximised().then((IsMaximized) => {
      setWindowToggleButton({
        Icon: IsMaximized ? RiCheckboxMultipleBlankLine : RiCheckboxBlankLine,
      });
    });
  });

  return {
    state: {
      windowToggleButton,
    },
    action: {
      minimizeWindow: WindowMinimise,
      toggleWindowMaximize: WindowToggleMaximise,
      quitWindow: Quit,
    },
  };
};

export { useWindowControlButtonGroup };
