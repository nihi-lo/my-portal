import { type BrandType } from "@/utils/brandType";

declare const _subAppIdSymbol: unique symbol;

type SubAppId = BrandType<string, typeof _subAppIdSymbol>;

export { type SubAppId };
