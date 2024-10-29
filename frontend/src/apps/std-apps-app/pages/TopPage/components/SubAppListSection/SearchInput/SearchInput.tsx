import { Button, Chip, Input, type InputProps } from "@nextui-org/react";
import { RiSearchLine } from "react-icons/ri";

import { useSearchInput } from "./SearchInput.hooks";

interface SearchInputProps extends Omit<InputProps, "isClearable"> {
  onSearch?: (searchValue: string) => void;
}

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const { color, size, onSearch, ...otherProps } = props;
  const {
    state: { inputRef, isComposing, searchValue, tvSlots },
    action: { beginTextInput, changeInputValue, endTextInput },
  } = useSearchInput({ size });

  return (
    <Input
      ref={inputRef}
      color={color}
      endContent={
        <Chip
          as={Button}
          color={color}
          size={size}
          variant="solid"
          onClick={() => onSearch?.(inputRef.current!.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && !isComposing && onSearch?.(inputRef.current!.value)
          }
          className={tvSlots.endContentChip()}
        >
          Enterで検索
        </Chip>
      }
      size={size}
      startContent={<RiSearchLine className={tvSlots.searchIcon()} />}
      value={searchValue}
      onCompositionEnd={endTextInput}
      onCompositionStart={beginTextInput}
      onKeyDown={(e) => e.key === "Enter" && !isComposing && onSearch?.(inputRef.current!.value)}
      onValueChange={changeInputValue}
      {...otherProps}
    />
  );
};

export { SearchInput };
