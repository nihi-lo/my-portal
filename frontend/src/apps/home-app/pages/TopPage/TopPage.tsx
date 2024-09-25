import { Button, Input } from "@nextui-org/react";

import { Container, HStack, VStack, Section } from "@/components/ui";

import { useTopPage } from "./TopPage.hooks";

const TopPage = (): JSX.Element => {
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
    </Container>
  );
};

export { TopPage };
