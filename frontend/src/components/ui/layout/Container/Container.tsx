import { useContainer } from "./Container.hooks";
import { type ContainerVariantProps } from "./Container.variants";

interface ContainerProps
  extends Omit<React.ComponentPropsWithoutRef<"div" | "main">, "style">,
    ContainerVariantProps {
  as?: "div" | "main";
}

const Container = (props: ContainerProps): React.JSX.Element => {
  const {
    p,
    px,
    py,
    pt,
    grow,
    children,
    className: extendClassName,
    as: Tag = "div",
    ...otherProps
  } = props;
  const {
    state: { tvSlots },
  } = useContainer({ p, px, py, pt, grow });

  return (
    <Tag className={tvSlots.base(extendClassName)} {...otherProps}>
      {children}
    </Tag>
  );
};

export { Container };
