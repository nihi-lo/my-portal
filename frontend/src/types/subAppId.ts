import { type Brand } from "@/utils/brand";

declare const _symbol: unique symbol;

type SubAppId = Brand<string, typeof _symbol>;

export { type SubAppId };
