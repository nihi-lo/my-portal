import { tv, type VariantProps } from "tailwind-variants";

import { commonVariants } from "../common.variants";

const containerVariants = tv({
  extend: commonVariants,
  slots: {
    base: "container mx-auto w-full px-4",
  },
  variants: {},
});

type ContainerVariantProps = VariantProps<typeof containerVariants>;

export { containerVariants, type ContainerVariantProps };
