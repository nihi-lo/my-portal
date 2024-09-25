import { useCallback, useLayoutEffect, useState } from "react";

import {
  Quit,
  WindowIsFullscreen,
  WindowIsMaximised,
  WindowMinimise,
  WindowToggleMaximise,
} from "@wailsjs/runtime/runtime";

import { type CustomHook } from "@/utils/customHook";

interface State {
  isFullscreen: boolean;
  isMaximised: boolean;
}

interface Action {
  windowMinimise: () => void;
  windowQuit: () => void;
  windowToggleMaximise: () => void;
}

const useWindow: CustomHook<State, Action> = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMaximised, setIsMaximised] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      void WindowIsFullscreen().then(setIsFullscreen);
      void WindowIsMaximised().then(setIsMaximised);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const windowMinimise = () => {
    WindowMinimise();
  };
  const windowQuit = () => {
    Quit();
  };
  const windowToggleMaximise = () => {
    WindowToggleMaximise();
  };

  return {
    state: {
      isFullscreen,
      isMaximised,
    },
    action: {
      windowMinimise: useCallback(windowMinimise, []),
      windowQuit: useCallback(windowQuit, []),
      windowToggleMaximise: useCallback(windowToggleMaximise, []),
    },
  };
};

export { useWindow };
