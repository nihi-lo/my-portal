import { type SubAppIcon } from "@/types/subAppIcon";
import { type SubAppId } from "@/types/subAppId";
import { type SubAppMetadata } from "@/types/subAppMetadata";
import { type BrandType } from "@/utils/brandType";

declare const _symbol: unique symbol;

type SubApp = BrandType<
  {
    id: SubAppId;
    metadata: SubAppMetadata;
    icon: SubAppIcon;
    routeContent: React.ReactNode;
  },
  typeof _symbol
>;

export { type SubApp };
