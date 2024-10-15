import { type BrandType } from "@/utils/brandType";

type SubAppMetadata = BrandType<
  {
    readonly title: string;
    readonly description: string;
  },
  "SubAppMetadata"
>;

export { type SubAppMetadata };
