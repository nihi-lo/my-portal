import { Button, Divider, Link } from "@heroui/react";
import { RiMore2Fill } from "react-icons/ri";

import { SubAppOperateDropdown } from "@/components/model/SubAppOperateDropdown";
import { Section, HStack } from "@/components/ui";

import { SearchInput } from "./SearchInput";
import { useSubAppListSection } from "./SubAppListSection.hooks";

const SubAppListSection = (): React.JSX.Element => {
  const {
    state: { listItems, searchResultMessage },
    action: { searchApplication },
  } = useSubAppListSection();

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
              <Link href={item.subAppTopUrl} className="size-full">
                <HStack align="center" gap="sm">
                  <div className="flex-none overflow-hidden rounded-large">{item.iconContent}</div>
                  <div>
                    <span className="line-clamp-1 font-semibold text-foreground">{item.title}</span>
                    <span className="line-clamp-2 max-w-md text-small text-default-400">
                      {item.description}
                    </span>
                  </div>
                </HStack>
              </Link>

              <SubAppOperateDropdown
                subAppId={item.appId}
                triggerContent={
                  <Button isIconOnly radius="full" size="sm" variant="flat">
                    <RiMore2Fill className="text-medium" />
                  </Button>
                }
              />
            </HStack>
            <Divider />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export { SubAppListSection };
