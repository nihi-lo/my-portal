import React from "react";

import { type VStackVariantProps, vStackVariants } from "./VStack.variants";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"aside" | "div" | "main">, "style">,
    VStackVariantProps {
  as?: "aside" | "div" | "main";
}

const VStack = (props: Props): JSX.Element => {
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
    className,
    as: Tag = "div",
    ...otherProps
  } = props;

  const { base } = vStackVariants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <Tag className={base({ className })} {...otherProps}>
      {children}
    </Tag>
  );
};

export { VStack };
