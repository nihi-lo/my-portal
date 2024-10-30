import { type Brand } from "@/utils/brand";

declare const _symbol: unique symbol;

type Session = Brand<
  {
    readonly user: {
      readonly name: string;
      readonly email: string;
      readonly image: string;
    };
  },
  typeof _symbol
>;

export { type Session };
