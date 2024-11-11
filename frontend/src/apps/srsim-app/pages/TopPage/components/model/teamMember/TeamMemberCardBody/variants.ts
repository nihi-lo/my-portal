import { tv, type VariantProps } from "tailwind-variants";

const teamMemberCardBodyVariants = tv({
  slots: {
    base: "overflow-hidden p-0",
  },
  variants: {
    foo: {
      true: "",
    },
  },
});

type TeamMemberCardBodyVariantProps = VariantProps<typeof teamMemberCardBodyVariants>;

export { teamMemberCardBodyVariants, type TeamMemberCardBodyVariantProps };
