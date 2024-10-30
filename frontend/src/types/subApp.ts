import { type SubAppIcon } from "@/types/subAppIcon";
import { type SubAppId } from "@/types/subAppId";
import { type SubAppMetadata } from "@/types/subAppMetadata";
import { type Brand } from "@/utils/brand";

declare const _symbol: unique symbol;

type SubApp = Brand<
  {
    readonly id: SubAppId;
    readonly metadata: SubAppMetadata;
    readonly icon: SubAppIcon;
    readonly routeContent: React.ReactNode;
  },
  typeof _symbol
>;

export { type SubApp };
