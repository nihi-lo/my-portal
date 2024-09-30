import { Container } from "@/components/ui";

import { MatchResultSection } from "./components/MatchResultSection";
import { UnitFormationSection } from "./components/UnitFormationSection";

const TopPage = (): JSX.Element => {
  return (
    <Container as="main">
      <UnitFormationSection />
      <MatchResultSection />
    </Container>
  );
};

export { TopPage };
