import { metadata as gakusimAppMetadata, App as GakusimApp } from "@/apps/gakusim-app/App";
import { metadata as homeAppMetadata, App as HomeApp } from "@/apps/home-app/App";
import { metadata as zzzbuildAppMetadata, App as ZzzbuildApp } from "@/apps/zzzbuild-app/App";
import { type SubApp } from "@/types/subApp";
import { type SubAppID } from "@/types/subAppID";

const subApps = new Map<SubAppID, SubApp>([
  [gakusimAppMetadata.id, { metadata: gakusimAppMetadata, App: GakusimApp }],
  [homeAppMetadata.id, { metadata: homeAppMetadata, App: HomeApp }],
  [zzzbuildAppMetadata.id, { metadata: zzzbuildAppMetadata, App: ZzzbuildApp }],
]);

export { subApps };
