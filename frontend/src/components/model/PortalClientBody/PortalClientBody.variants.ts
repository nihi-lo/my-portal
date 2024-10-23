import { tv, type VariantProps } from "tailwind-variants";

const portalClientBodyVariants = tv({
  slots: {
    base: "z-0 size-full overflow-hidden overscroll-none rounded-tl-2xl bg-background",
    inner: "size-full overflow-auto",
  },
  variants: {},
});

type PortalClientBodyVariantProps = VariantProps<typeof portalClientBodyVariants>;

export { portalClientBodyVariants, type PortalClientBodyVariantProps };
