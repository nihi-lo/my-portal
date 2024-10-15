import { type Metadata } from "@/types/metadata";
import { type BrandType } from "@/utils/brandType";

type SubApp = BrandType<
  {
    metadata: Metadata;
    routeContent: React.ReactNode;
  },
  "SubApp"
>;

export { type SubApp };
