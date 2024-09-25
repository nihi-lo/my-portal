import React from "react";

import { type HStackVariantProps, hStackVariants } from "./HStack.variants";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"div" | "main">, "style">,
    HStackVariantProps {
  as?: "div" | "main";
}

const HStack = (props: Props): JSX.Element => {
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

  const { base } = hStackVariants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <Tag className={base({ className })} {...otherProps}>
      {children}
    </Tag>
  );
};

export { HStack };
