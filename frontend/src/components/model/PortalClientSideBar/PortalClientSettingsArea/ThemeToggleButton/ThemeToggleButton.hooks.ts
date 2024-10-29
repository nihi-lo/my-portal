import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonLine, RiQuestionLine, RiSunLine } from "react-icons/ri";

import { type ContainerHook } from "@/utils/containerHook";

import { type Theme } from "./ThemeToggleButton.types";
import {
  type ThemeToggleButtonVariantProps,
  themeToggleButtonVariants,
} from "./ThemeToggleButton.variants";

interface State {
  theme: Theme | undefined;
  isLoading: boolean;
  tvSlots: {
    themeIcon: () => string;
  };
}

interface Action {
  switchTheme: (newThemeKey: string) => void;
}

interface Argument {
  size: ThemeToggleButtonVariantProps["size"];
}

const useThemeToggleButton: ContainerHook<State, Action, Argument> = (args) => {
  const { size = "md" } = args;

  const { theme: currentTheme, systemTheme, setTheme: setCurrentTheme } = useTheme();

  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const { themeIcon } = themeToggleButtonVariants({ size });

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
      tvSlots: {
        themeIcon,
      },
    },
    action: {
      switchTheme,
    },
  };
};

export { useThemeToggleButton };
