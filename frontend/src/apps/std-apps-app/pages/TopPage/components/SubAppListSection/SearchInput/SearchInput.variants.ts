import { tv, type VariantProps } from "tailwind-variants";

const searchInputVariants = tv({
  slots: {
    endContentChip: "pointer-events-none opacity-0 transition",
    searchIcon: "pointer-events-none flex-none",
  },
  variants: {
    showSearchChip: {
      true: {
        endContentChip: "pointer-events-auto opacity-100",
      },
    },
    size: {
      sm: {
        searchIcon: "size-4",
      },
      md: {
        searchIcon: "size-5",
      },
      lg: {
        searchIcon: "size-6",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SearchInputVariantProps = VariantProps<typeof searchInputVariants>;

export { searchInputVariants, type SearchInputVariantProps };
