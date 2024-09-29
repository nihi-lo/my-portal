import { Container } from "@/components/ui";

import { ApplicationListSection } from "./components/ApplicationListSection";

const TopPage = (): JSX.Element => {
  return (
    <Container as="main">
      <ApplicationListSection />
    </Container>
  );
};

export { TopPage };
