import { tv, type VariantProps } from "tailwind-variants";

const rootLayoutVariants = tv({
  slots: {
    base: "relative h-screen bg-content2",
  },
  variants: {
    showWindowBorder: {
      true: {
        base: "border border-divider",
      },
      false: {
        base: "border-none",
      },
    },
  },
});

type RootLayoutVariantProps = VariantProps<typeof rootLayoutVariants>;

export { rootLayoutVariants, type RootLayoutVariantProps };
