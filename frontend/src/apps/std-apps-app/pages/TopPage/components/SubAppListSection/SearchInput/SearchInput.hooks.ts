import { useState, useRef } from "react";

import { type ContainerHook } from "@/utils/containerHook";

import { type SearchInputVariantProps, searchInputVariants } from "./SearchInput.variants";

interface State {
  inputRef: React.RefObject<HTMLInputElement | null>;
  isComposing: boolean;
  searchValue: string;
  tvSlots: {
    endContentChip: () => string;
    searchIcon: () => string;
  };
}

interface Action {
  beginTextInput: () => void;
  changeInputValue: (value: string) => void;
  endTextInput: () => void;
}

interface Argument {
  size: SearchInputVariantProps["size"];
}

const useSearchInput: ContainerHook<State, Action, Argument> = (args) => {
  const { size = "md" } = args;

  const [searchValue, setSearchValue] = useState<string>("");
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { endContentChip, searchIcon } = searchInputVariants({
    size,
    showSearchChip: searchValue !== "",
  });

  return {
    state: {
      inputRef,
      isComposing,
      searchValue,
      tvSlots: {
        endContentChip,
        searchIcon,
      },
    },
    action: {
      beginTextInput: () => setIsComposing(true),
      changeInputValue: setSearchValue,
      endTextInput: () => setIsComposing(false),
    },
  };
};

export { useSearchInput };
