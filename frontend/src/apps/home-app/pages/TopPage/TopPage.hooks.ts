import { useCallback, useState } from "react";

import { GreetAsync } from "@wailsjs/go/homeservice/Service";

import { useUserStore } from "@/apps/home-app/stores/useUserStore";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  inputName: string;
  resultText: string | undefined;
}

interface Action {
  handleGreetClick: () => void;
  handleInputChange: (newValue: string) => void;
}

const useTopPage: ContainerHook<State, Action> = () => {
  const { name, updateName } = useUserStore();
  const [resultText, setResultText] = useState<string>();

  const handleGreetClick = () => {
    void GreetAsync(name).then((value) => setResultText(value));
  };
  const handleInputChange = (newValue: string) => {
    updateName(newValue);
  };

  return {
    state: {
      inputName: name,
      resultText,
    },
    action: {
      handleGreetClick: useCallback(handleGreetClick, [name]),
      handleInputChange: useCallback(handleInputChange, [updateName]),
    },
  };
};

export { useTopPage };
