import { type SubAppId } from "@/types/subAppId";
import { type BrandType } from "@/utils/brandType";

type Metadata = BrandType<
  {
    id: SubAppId;
    title: string;
    description: string;
    Icon: () => JSX.Element;
  },
  "Metadata"
>;

export { type Metadata };
