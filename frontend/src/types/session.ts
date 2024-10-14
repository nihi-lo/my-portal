import { type BrandType } from "@/utils/brandType";

type Session = BrandType<
  {
    user: {
      name: string;
      email: string;
      image: string;
    };
  },
  "Session"
>;

export { type Session };
