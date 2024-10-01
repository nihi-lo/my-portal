import {
  Button,
  Chip,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
} from "@nextui-org/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  RiAddLine,
  RiIndeterminateCircleLine,
  RiInformation2Line,
  RiMoreLine,
  RiSearchLine,
} from "react-icons/ri";

import { Section, HStack } from "@/components/ui";

import { useApplicationListSection } from "./ApplicationListSection.hooks";

const ApplicationListSection = (): JSX.Element => {
  const {
    state: { listItems },
    action: { addFavoriteApp, removeFavoriteApp },
  } = useApplicationListSection();

  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredListItems, setFilteredListItems] = useState(listItems);
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchApplication = useCallback((): void => {
    const toHiragana = (value: string): string => {
      return value.replace(/[\u30a1-\u30f6]/g, (substring: string): string => {
        const hiraganaCharCode: number = substring.charCodeAt(0) - 0x60;
        return String.fromCharCode(hiraganaCharCode);
      });
    };

    const search = inputRef.current?.value;
    if (search === undefined) {
      return;
    }

    if (search === "") {
      setFilteredListItems(listItems);
      return;
    }

    setFilteredListItems(
      listItems.filter((item) =>
        toHiragana(item.title).toLowerCase().includes(toHiragana(search).toLowerCase()),
      ),
    );
  }, [listItems]);

  useEffect(() => {
    searchApplication();
  }, [searchApplication]);

  return (
    <Section
      endContent={
        <Input
          ref={inputRef}
          endContent={
            searchValue !== "" && (
              <Chip as={Button} size="sm" radius="sm" variant="faded" onClick={searchApplication}>
                Enterで検索
              </Chip>
            )
          }
          placeholder="アプリを検索"
          startContent={<RiSearchLine />}
          value={searchValue}
          onCompositionEnd={() => setIsComposing(false)}
          onCompositionStart={() => setIsComposing(true)}
          onKeyDown={(e) => e.key === "Enter" && !isComposing && searchApplication()}
          onValueChange={setSearchValue}
          className="w-60"
        />
      }
      headingAs="h1"
      title="アプリ一覧"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
        {filteredListItems.map((item) => (
          <li key={item.key} className="w-full">
            <HStack align="center" justify="between" gap="sm" className="min-h-20">
              <Link href={item.href} className="size-full">
                <HStack align="center" gap="sm">
                  <div className="flex-none overflow-hidden rounded-large">
                    <item.Icon />
                  </div>
                  <div>
                    <span className="line-clamp-1 font-semibold text-foreground">{item.title}</span>
                    <span className="line-clamp-2 max-w-md text-small text-default-400">
                      {item.description}
                    </span>
                  </div>
                </HStack>
              </Link>

              <Dropdown disableAnimation>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="flat">
                    <RiMoreLine className="size-5" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="アプリへの操作" variant="flat">
                  <DropdownItem
                    key="new"
                    showDivider
                    startContent={<RiInformation2Line className="size-5" />}
                  >
                    このアプリについて
                  </DropdownItem>
                  {item.isAlreadyFavorited ? (
                    <DropdownItem
                      key="remove"
                      className="text-danger"
                      color="danger"
                      startContent={<RiIndeterminateCircleLine className="size-5" />}
                      onClick={() => removeFavoriteApp(item.appId)}
                    >
                      サイドバーから削除
                    </DropdownItem>
                  ) : (
                    <DropdownItem
                      key="add"
                      startContent={<RiAddLine className="size-5" />}
                      onClick={() => addFavoriteApp(item.appId)}
                    >
                      サイドバーへ追加
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </HStack>
            <Divider />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export { ApplicationListSection };
