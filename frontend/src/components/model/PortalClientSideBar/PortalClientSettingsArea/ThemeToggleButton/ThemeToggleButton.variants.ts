import { tv, type VariantProps } from "tailwind-variants";

const themeToggleButtonVariants = tv({
  slots: {
    themeIcon: "size-6",
  },
  variants: {
    size: {
      sm: {
        themeIcon: "size-6",
      },
      md: {
        themeIcon: "size-7",
      },
      lg: {
        themeIcon: "size-8",
      },
    },
  },
});

type ThemeToggleButtonVariantProps = VariantProps<typeof themeToggleButtonVariants>;

export { themeToggleButtonVariants, type ThemeToggleButtonVariantProps };
