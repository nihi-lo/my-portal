import { type ContainerVariantProps, containerVariants } from "./Container.variants";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"div" | "main">, "style">,
    ContainerVariantProps {
  as?: "div" | "main";
}

const Container = (props: Props): JSX.Element => {
  const { p, px, py, pt, grow, children, className, as: Tag = "div", ...otherProps } = props;

  const { base } = containerVariants({ p, px, py, pt, grow });

  return (
    <Tag className={base({ className })} {...otherProps}>
      {children}
    </Tag>
  );
};

export { Container };
