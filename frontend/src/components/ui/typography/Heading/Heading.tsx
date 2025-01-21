import { useHeading } from "./Heading.hooks";
import { type HeadingVariantProps } from "./Heading.variants";

interface HeadingProps
  extends Omit<React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">, "style">,
    HeadingVariantProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = (props: HeadingProps): React.JSX.Element => {
  const { as: Tag = "h1", children, className: extendClassName, ...otherProps } = props;
  const {
    state: { tvSlots },
  } = useHeading();

  return (
    <Tag className={tvSlots.base(extendClassName)} {...otherProps}>
      {children}
    </Tag>
  );
};

export { Heading };
