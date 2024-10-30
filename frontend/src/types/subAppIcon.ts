import { type Brand } from "@/utils/brand";

declare const _symbol: unique symbol;

type SubAppIcon = Brand<
  {
    readonly smallContent: React.ReactNode;
    readonly mediumContent: React.ReactNode;
    readonly largeContent: React.ReactNode;
  },
  typeof _symbol
>;

export { type SubAppIcon };
