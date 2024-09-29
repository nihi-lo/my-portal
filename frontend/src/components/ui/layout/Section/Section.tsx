import { Divider } from "@nextui-org/react";

import { Heading, HStack } from "@/components/ui";

import { type SectionVariantProps, sectionVariants } from "./Section.variants";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"section">, "className" | "style">,
    SectionVariantProps {
  endContent?: React.ReactNode;
  headingAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
}

const Section = (props: Props): JSX.Element => {
  const { endContent, headingAs, title, p, px, py, pt, grow, children, ...otherProps } = props;

  const { base } = sectionVariants({ p, px, py, pt, grow });

  return (
    <section className={base()} {...otherProps}>
      <HStack align="center" justify="between" gap="md">
        <Heading as={headingAs} className="truncate text-xl font-bold">
          {title}
        </Heading>
        <div>{endContent}</div>
      </HStack>
      <Divider className="mt-2" />
      <div className="mt-4">{children}</div>
    </section>
  );
};

export { Section };
