import { type BrandType } from "@/utils/brandType";

declare const _symbol: unique symbol;

type SubAppId = BrandType<string, typeof _symbol>;

export { type SubAppId };
