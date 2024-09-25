import { tv, type VariantProps } from "tailwind-variants";

const appBodyVariants = tv({
  slots: {
    base: "z-0 size-full overflow-hidden overscroll-none rounded-tl-2xl bg-background",
    inner: "size-full overflow-auto",
  },
  variants: {},
});

type AppBodyVariantProps = VariantProps<typeof appBodyVariants>;

export { appBodyVariants, type AppBodyVariantProps };
