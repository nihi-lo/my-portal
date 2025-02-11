import { Divider } from "@heroui/react";

import { Heading, HStack } from "@/components/ui";

import { useSection } from "./Section.hooks";
import { type SectionVariantProps } from "./Section.variants";

interface SectionProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "className" | "style">,
    SectionVariantProps {
  endContent?: React.ReactNode;
  headingAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
}

const Section = (props: SectionProps): React.JSX.Element => {
  const { endContent, headingAs, title, p, px, py, pt, grow, children, ...otherProps } = props;
  const {
    state: { tvSlots },
  } = useSection({ p, px, py, pt, grow });

  return (
    <section className={tvSlots.base()} {...otherProps}>
      <HStack align="center" justify="between" gap="md" className="min-h-8">
        <Heading as={headingAs} className="truncate text-2xl font-bold">
          {title}
        </Heading>
        <div>{endContent}</div>
      </HStack>
      <Divider className="mt-2" />
      <div className="mt-2">{children}</div>
    </section>
  );
};

export { Section };
