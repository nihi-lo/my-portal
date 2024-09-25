import { Button, Input, Link } from "@nextui-org/react";

import { metadata as homeAppMetadata } from "@/apps/home-app/App";
import { Container, HStack, VStack, Section } from "@/components/ui";
import { useSubAppStore } from "@/stores/useSubAppStore";

import { useTopPage } from "./TopPage.hooks";

const TopPage = (): JSX.Element => {
  const subAppList = useSubAppStore((state) => state.subAppList);

  const {
    state: { inputName, resultText },
    action: { handleGreetClick, handleInputChange },
  } = useTopPage();

  return (
    <Container as="main">
      <Section headingAs="h1" title="Welcome Wails App.">
        <VStack align="start" justify="center" gap="sm">
          <div>Please enter your name below 👇</div>
          <HStack align="center" justify="center" gap="sm">
            <Input label="Name" defaultValue={inputName} onValueChange={handleInputChange} />
            <Button color="primary" onClick={handleGreetClick}>
              Greet
            </Button>
          </HStack>
          {resultText && <div>{resultText}</div>}
        </VStack>
      </Section>
      <Section headingAs="h1" title="アプリ一覧">
        <ul className="flex flex-col gap-2">
          {subAppList.reduce<React.ReactNode[]>((acc, app) => {
            if (app.metadata.id === homeAppMetadata.id) {
              return acc;
            }

            return [
              ...acc,
              <li key={app.metadata.id}>
                <Link href={`/apps/${app.metadata.id}`} color="foreground">
                  <HStack align="center" gap="sm">
                    <div className="overflow-hidden rounded-large">
                      <app.metadata.Icon />
                    </div>
                    <VStack>
                      <span className="font-semibold">{app.metadata.title}</span>
                      <span className="text-default-400">{app.metadata.description}</span>
                    </VStack>
                  </HStack>
                </Link>
              </li>,
            ];
          }, [])}
        </ul>
      </Section>
    </Container>
  );
};

export { TopPage };
