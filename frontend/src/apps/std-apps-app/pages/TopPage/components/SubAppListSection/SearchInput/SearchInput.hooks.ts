import { useState, useRef } from "react";

import { type ContainerHook } from "@/utils/containerHook";

interface State {
  inputRef: React.RefObject<HTMLInputElement>;
  isComposing: boolean;
  searchValue: string;
}

interface Action {
  beginTextInput: () => void;
  changeInputValue: (value: string) => void;
  endTextInput: () => void;
}

const useSearchInput: ContainerHook<State, Action> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  return {
    state: {
      inputRef,
      isComposing,
      searchValue,
    },
    action: {
      beginTextInput: () => setIsComposing(true),
      changeInputValue: setSearchValue,
      endTextInput: () => setIsComposing(false),
    },
  };
};

export { useSearchInput };
