import { type BrandType } from "@/utils/brandType";

type SubAppIcon = BrandType<
  {
    readonly smallContent: React.ReactNode;
    readonly mediumContent: React.ReactNode;
    readonly largeContent: React.ReactNode;
  },
  "SubAppIcon"
>;

export { type SubAppIcon };
