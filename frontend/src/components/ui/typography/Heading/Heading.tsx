import { type HeadingVariantProps, headingVariants } from "./Heading.variants";

interface HeadingProps
  extends Omit<React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">, "style">,
    HeadingVariantProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = (props: HeadingProps): JSX.Element => {
  const { as: Tag = "h1", children, className, ...otherProps } = props;

  const { base } = headingVariants();

  return (
    <Tag className={base({ className })} {...otherProps}>
      {children}
    </Tag>
  );
};

export { Heading };
