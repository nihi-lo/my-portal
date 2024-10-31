import { type BrandType } from "@/utils/brandType";

declare const _symbol: unique symbol;

type Session = BrandType<
  {
    user: {
      name: string;
      email: string;
      image: string;
    };
  },
  typeof _symbol
>;

export { type Session };
