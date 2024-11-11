import { tv, type VariantProps } from "tailwind-variants";

const teamMemberCardVariants = tv({
  slots: {
    base: "z-0 h-96 w-full max-w-[362px] grow flex-col rounded-tr-3xl",
  },
  variants: {},
});

type TeamMemberCardVariantProps = VariantProps<typeof teamMemberCardVariants>;

export { teamMemberCardVariants, type TeamMemberCardVariantProps };
