import React from "react";

import { useVStack } from "./VStack.hooks";
import { type VStackVariantProps } from "./VStack.variants";

interface VStackProps
  extends Omit<React.ComponentPropsWithoutRef<"aside" | "div" | "main">, "style">,
    VStackVariantProps {
  as?: "aside" | "div" | "main";
}

const VStack = (props: VStackProps): JSX.Element => {
  const {
    align,
    justify,
    wrap,
    gap,
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
  } = useVStack({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <Tag className={tvSlots.base(extendClassName)} {...otherProps}>
      {children}
    </Tag>
  );
};

export { VStack };
