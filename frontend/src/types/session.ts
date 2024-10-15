import { type BrandType } from "@/utils/brandType";

type Session = BrandType<
  {
    readonly user: {
      readonly name: string;
      readonly email: string;
      readonly image: string;
    };
  },
  "Session"
>;

export { type Session };
