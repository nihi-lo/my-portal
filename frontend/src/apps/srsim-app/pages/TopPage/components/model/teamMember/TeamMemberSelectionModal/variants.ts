import { tv, type VariantProps } from "tailwind-variants";

const teamMemberSelectionModalVariants = tv({
  slots: {
    base: "max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl",
    content: "gap-2 p-4",
    header: "p-0",
    body: "p-0",
    characterRadioButtonRoot: "",
    characterRadioButton:
      "relative flex h-16 w-20 flex-none cursor-pointer items-center justify-center overflow-hidden rounded-tr-xl bg-gradient-to-b outline -outline-offset-4 outline-white/50 transition hover:opacity-85 peer-checked:scale-105 peer-checked:border-2 peer-checked:border-foreground peer-checked:opacity-100",
    footer: "p-0",
  },
  variants: {
    rarity: {
      4: {
        characterRadioButton: "from-[#3f4064] to-[#9c65d7]",
      },
      5: {
        characterRadioButton: "from-[#a35d55] to-[#d0aa6e]",
      },
    },
    isShow: {
      true: {
        characterRadioButtonRoot: "",
      },
      false: {
        characterRadioButtonRoot: "hidden",
      },
    },
  },
});

type TeamMemberSelectionModalVariantProps = VariantProps<typeof teamMemberSelectionModalVariants>;

export { teamMemberSelectionModalVariants, type TeamMemberSelectionModalVariantProps };
