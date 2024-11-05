import { type BrandType } from "@/utils/brandType";

declare const _subAppIconSymbol: unique symbol;

type SubAppIcon = BrandType<
  {
    smallContent: React.ReactNode;
    mediumContent: React.ReactNode;
    largeContent: React.ReactNode;
  },
  typeof _subAppIconSymbol
>;

export { type SubAppIcon };
