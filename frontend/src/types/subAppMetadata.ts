import { type BrandType } from "@/utils/brandType";

declare const _subAppMetadataSymbol: unique symbol;

type SubAppMetadata = BrandType<
  {
    title: string;
    description: string;
  },
  typeof _subAppMetadataSymbol
>;

export { type SubAppMetadata };
