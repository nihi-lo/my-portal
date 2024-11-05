import { type BrandType } from "@/utils/brandType";

declare const _sessionSymbol: unique symbol;

type Session = BrandType<
  {
    user: {
      name: string;
      email: string;
      image: string;
    };
  },
  typeof _sessionSymbol
>;

export { type Session };
