import { type SubAppIcon } from "@/types/subAppIcon";
import { type SubAppId } from "@/types/subAppId";
import { type SubAppMetadata } from "@/types/subAppMetadata";
import { type BrandType } from "@/utils/brandType";

type SubApp = BrandType<
  {
    readonly id: SubAppId;
    readonly metadata: SubAppMetadata;
    readonly icon: SubAppIcon;
    readonly routeContent: React.ReactNode;
  },
  "SubApp"
>;

export { type SubApp };
