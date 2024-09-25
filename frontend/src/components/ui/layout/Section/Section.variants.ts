import { tv, type VariantProps } from "tailwind-variants";

import { commonVariants } from "../common.variants";

const sectionVariants = tv({
  extend: commonVariants,
  slots: {
    base: "p-4",
  },
  variants: {},
});

type SectionVariantProps = VariantProps<typeof sectionVariants>;

export { sectionVariants, type SectionVariantProps };
