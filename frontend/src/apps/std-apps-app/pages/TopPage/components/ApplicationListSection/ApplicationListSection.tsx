import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
} from "@nextui-org/react";
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
    state: { applicationList },
    action: { addFavoriteApp, removeFavoriteApp },
  } = useApplicationListSection();

  return (
    <Section
      endContent={<Input isClearable placeholder="アプリを検索" startContent={<RiSearchLine />} />}
      headingAs="h1"
      title="アプリ一覧"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
        {applicationList.map((app) => (
          <li key={app.key} className="w-full">
            <HStack align="center" justify="between" gap="sm" className="min-h-20">
              <Link href={`/apps/${app.id}`} className="size-full">
                <HStack align="center" gap="sm">
                  <div className="flex-none overflow-hidden rounded-large">
                    <app.Icon />
                  </div>
                  <div>
                    <span className="line-clamp-1 font-semibold text-foreground">{app.title}</span>
                    <span className="line-clamp-2 max-w-md text-small text-default-400">
                      {app.description}
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
                    endContent={<RiInformation2Line className="size-5" />}
                  >
                    このアプリについて
                  </DropdownItem>
                  {app.isAlreadyFavorited ? (
                    <DropdownItem
                      key="remove"
                      className="text-danger"
                      color="danger"
                      endContent={<RiIndeterminateCircleLine className="size-5" />}
                      onClick={() => removeFavoriteApp(app.id)}
                    >
                      サイドバーから削除
                    </DropdownItem>
                  ) : (
                    <DropdownItem
                      key="add"
                      endContent={<RiAddLine className="size-5" />}
                      onClick={() => addFavoriteApp(app.id)}
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
