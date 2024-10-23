import { Container } from "@/components/ui";

import { SubAppListSection } from "./components/SubAppListSection";

const TopPage = (): JSX.Element => {
  return (
    <Container as="main">
      <SubAppListSection />
    </Container>
  );
};

export { TopPage };
