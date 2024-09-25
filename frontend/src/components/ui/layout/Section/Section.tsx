import { Divider } from "@nextui-org/react";

import { Heading } from "@/components/ui";

import { type SectionVariantProps, sectionVariants } from "./Section.variants";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"section">, "className" | "style">,
    SectionVariantProps {
  headingAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
}

const Section = (props: Props): JSX.Element => {
  const { headingAs, title, p, px, py, pt, grow, children, ...otherProps } = props;

  const { base } = sectionVariants({ p, px, py, pt, grow });

  return (
    <section className={base()} {...otherProps}>
      {title && (
        <>
          <Heading as={headingAs} className="flex items-center gap-2 text-xl font-semibold">
            {headingAs === "h2" && <div className="h-4 w-0.5 bg-primary" />}
            {title}
          </Heading>
          <Divider className="my-2" />
        </>
      )}
      {children}
    </section>
  );
};

export { Section };
