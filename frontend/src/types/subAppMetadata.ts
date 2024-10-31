import { type BrandType } from "@/utils/brandType";

declare const _symbol: unique symbol;

type SubAppMetadata = BrandType<
  {
    title: string;
    description: string;
  },
  typeof _symbol
>;

export { type SubAppMetadata };
