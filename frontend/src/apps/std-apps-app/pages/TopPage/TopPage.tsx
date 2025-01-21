import { Container } from "@/components/ui";

import { SubAppListSection } from "./components/SubAppListSection";

const TopPage = (): React.JSX.Element => {
  return (
    <Container as="main">
      <SubAppListSection />
    </Container>
  );
};

export { TopPage };
