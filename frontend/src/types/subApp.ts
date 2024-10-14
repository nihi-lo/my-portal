import { type Metadata } from "@/types/metadata";
import { type BrandType } from "@/utils/brandType";

type SubApp = BrandType<
  {
    metadata: Metadata;
    App: () => JSX.Element;
  },
  "SubApp"
>;

export { type SubApp };
