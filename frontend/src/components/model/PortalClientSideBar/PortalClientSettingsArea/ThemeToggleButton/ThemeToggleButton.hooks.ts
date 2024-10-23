import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonLine, RiQuestionLine, RiSunLine } from "react-icons/ri";

import { type ContainerHook } from "@/utils/containerHook";

import { type Theme } from "./ThemeToggleButton.types";

interface State {
  theme: Theme | undefined;
  isLoading: boolean;
}

interface Action {
  switchTheme: (newThemeKey: string) => void;
}

const useThemeToggleButton: ContainerHook<State, Action> = () => {
  const { theme: currentTheme, systemTheme, setTheme: setCurrentTheme } = useTheme();

  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTheme({
      key: currentTheme!,
      Icon:
        currentTheme === "system"
          ? systemTheme === "light"
            ? RiSunLine
            : systemTheme === "dark"
              ? RiMoonLine
              : RiQuestionLine
          : currentTheme === "light"
            ? RiSunLine
            : currentTheme === "dark"
              ? RiMoonLine
              : RiQuestionLine,
    });
    setIsLoading(false);
  }, [currentTheme, systemTheme]);

  const switchTheme = (newThemeKey: string) => {
    setCurrentTheme(newThemeKey);
  };

  return {
    state: {
      theme,
      isLoading,
    },
    action: {
      switchTheme,
    },
  };
};

export { useThemeToggleButton };
