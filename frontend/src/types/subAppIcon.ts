import { type BrandType } from "@/utils/brandType";

declare const _symbol: unique symbol;

type SubAppIcon = BrandType<
  {
    smallContent: React.ReactNode;
    mediumContent: React.ReactNode;
    largeContent: React.ReactNode;
  },
  typeof _symbol
>;

export { type SubAppIcon };
