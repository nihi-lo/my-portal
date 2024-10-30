import { type Brand } from "@/utils/brand";

declare const _symbol: unique symbol;

type SubAppMetadata = Brand<
  {
    readonly title: string;
    readonly description: string;
  },
  typeof _symbol
>;

export { type SubAppMetadata };
