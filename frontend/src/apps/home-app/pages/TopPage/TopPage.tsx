import { Button, Divider, Link } from "@nextui-org/react";

import { metadata as homeAppMetadata } from "@/apps/home-app";
import { Container, HStack, Section } from "@/components/ui";
import { useFavoriteAppOrderStore } from "@/stores/useFavoriteAppOrderStore";
import { useSubAppStore } from "@/stores/useSubAppStore";
import { type SubAppID } from "@/types/subAppID";

import { useTopPage } from "./TopPage.hooks";

const TopPage = (): JSX.Element => {
  const favoriteApps = useFavoriteAppOrderStore((state) => state.favoriteApps);
  const addFavoriteAppId = useFavoriteAppOrderStore((state) => state.addFavoriteAppId);
  const removeFavoriteAppId = useFavoriteAppOrderStore((state) => state.removeFavoriteAppId);

  const subAppList = useSubAppStore((state) => state.subAppList);

  const addNewFavoriteApp = (appId: SubAppID) => {
    addFavoriteAppId(appId);
  };

  const _ = useTopPage();

  return (
    <Container as="main">
      <Section headingAs="h1" title="アプリ一覧">
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {subAppList.reduce<React.ReactNode[]>((acc, app) => {
            if (app.metadata.id === homeAppMetadata.id) {
              return acc;
            }

            return [
              ...acc,
              <li key={app.metadata.id} className="w-full">
                <HStack align="center" justify="between" gap="sm" className="min-h-20">
                  <Link href={`/apps/${app.metadata.id}`} className="size-full">
                    <HStack align="center" gap="sm">
                      <div className="flex-none overflow-hidden rounded-large">
                        <app.metadata.Icon />
                      </div>
                      <div>
                        <span className="line-clamp-1 font-semibold text-foreground">
                          {app.metadata.title}
                        </span>
                        <span className="line-clamp-2 max-w-md text-small text-default-400">
                          {app.metadata.description}
                        </span>
                      </div>
                    </HStack>
                  </Link>
                  {favoriteApps.includes(app.metadata.id) ? (
                    <Button
                      color="danger"
                      size="sm"
                      variant="flat"
                      className="flex-none"
                      onClick={() => removeFavoriteAppId(app.metadata.id)}
                    >
                      サイドバーから削除
                    </Button>
                  ) : (
                    <Button
                      color="default"
                      size="sm"
                      variant="flat"
                      className="flex-none"
                      onClick={() => addNewFavoriteApp(app.metadata.id)}
                    >
                      サイドバーに追加
                    </Button>
                  )}
                </HStack>
                <Divider />
              </li>,
            ];
          }, [])}
        </ul>
      </Section>
    </Container>
  );
};

export { TopPage };
