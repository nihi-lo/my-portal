import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import {
  RiAddLine,
  RiIndeterminateCircleLine,
  RiInformation2Line,
  RiMoreLine,
} from "react-icons/ri";

import { Section, HStack } from "@/components/ui";

import { useApplicationListSection } from "./ApplicationListSection.hooks";
import { SearchInput } from "./SearchInput";

const ApplicationListSection = (): JSX.Element => {
  const {
    state: { listItems, searchResultMessage },
    action: { addFavoriteApp, removeFavoriteApp, searchApplication },
  } = useApplicationListSection();

  return (
    <Section
      endContent={
        <SearchInput
          placeholder="アプリを検索"
          onSearch={searchApplication}
          className="w-72 md:w-80 lg:w-96"
        />
      }
      headingAs="h1"
      title="アプリ一覧"
    >
      <p className="text-right text-small text-default-400">{searchResultMessage}</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
        {listItems.map((item) => (
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
