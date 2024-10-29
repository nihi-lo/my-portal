import React from "react";

import { useHStack } from "./HStack.hooks";
import { type HStackVariantProps } from "./HStack.variants";

interface HStackProps
  extends Omit<React.ComponentPropsWithoutRef<"div" | "main">, "style">,
    HStackVariantProps {
  as?: "div" | "main";
}

const HStack = (props: HStackProps): JSX.Element => {
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
  } = useHStack({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <Tag className={tvSlots.base(extendClassName)} {...otherProps}>
      {children}
    </Tag>
  );
};

export { HStack };
