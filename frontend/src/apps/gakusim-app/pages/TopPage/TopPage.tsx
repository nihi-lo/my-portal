import { Container } from "@/components/ui";

import { MatchResultSection } from "./components/MatchResultSection";
import { UnitFormationSection } from "./components/UnitFormationSection";
import { TopPageUseCaseProvider } from "./contexts/TopPageUseCaseContext";

const TopPage = (): React.JSX.Element => {
  return (
    <TopPageUseCaseProvider>
      <Container as="main">
        <UnitFormationSection />
        <MatchResultSection />
      </Container>
    </TopPageUseCaseProvider>
  );
};

export { TopPage };
