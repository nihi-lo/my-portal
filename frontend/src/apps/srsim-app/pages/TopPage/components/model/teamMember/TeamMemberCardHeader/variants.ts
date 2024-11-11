import { tv, type VariantProps } from "tailwind-variants";

const teamMemberCardHeaderVariants = tv({
  slots: {
    base: "group relative z-50 flex h-24 w-full items-center justify-center rounded-tr-3xl p-0",
    button:
      "h-full w-full rounded-none rounded-tr-3xl bg-gradient-to-b outline -outline-offset-4 outline-white/50",
    icon: "pointer-events-none absolute -bottom-3 z-10 mx-auto p-0 lg:bottom-0 lg:mx-0 lg:flex lg:w-full lg:justify-end lg:p-1",
  },
  variants: {
    rarity: {
      4: {
        button: "from-[#3f4064] to-[#9c65d7]",
      },
      5: {
        button: "from-[#a35d55] to-[#d0aa6e]",
      },
    },
  },
});

type TeamMemberCardHeaderVariantProps = VariantProps<typeof teamMemberCardHeaderVariants>;

export { teamMemberCardHeaderVariants, type TeamMemberCardHeaderVariantProps };
