import { Button, Chip, Input, type InputProps } from "@nextui-org/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import { searchInputVariants } from "./SearchInput.variants";

interface SearchInputProps extends Omit<InputProps, "isClearable"> {
  onSearch?: (searchValue: string) => void;
}

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const { onSearch, ...inputProps } = props;

  const [searchValue, setSearchValue] = useState<string>("");
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { endContentChip, searchIcon } = searchInputVariants({
    showSearchChip: searchValue !== "",
    size: inputProps.size,
  });

  return (
    <Input
      ref={inputRef}
      endContent={
        <Chip
          as={Button}
          color={inputProps.color}
          size={inputProps.size}
          variant="solid"
          onClick={() => onSearch?.(inputRef.current!.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && !isComposing && onSearch?.(inputRef.current!.value)
          }
          className={endContentChip()}
        >
          Enterで検索
        </Chip>
      }
      startContent={<RiSearchLine className={searchIcon()} />}
      value={searchValue}
      onCompositionEnd={() => setIsComposing(false)}
      onCompositionStart={() => setIsComposing(true)}
      onKeyDown={(e) => e.key === "Enter" && !isComposing && onSearch?.(inputRef.current!.value)}
      onValueChange={setSearchValue}
      {...inputProps}
    />
  );
};

export { SearchInput };
