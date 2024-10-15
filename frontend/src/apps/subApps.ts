import { metadata as gakusimAppMetadata, AppRoutes as GakusimAppRoutes } from "@/apps/gakusim-app";
import { metadata as stdAppsAppMetadata, AppRoutes as StdAppsAppRoutes } from "@/apps/std-apps-app";
import {
  metadata as zzzbuildAppMetadata,
  AppRoutes as ZzzbuildAppRoutes,
} from "@/apps/zzzbuild-app";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppId";

/* NOTE: 本変数の直接importは禁止します！！
 *
 * 本Mapで管理しているアプリは、ポータルアプリ上に搭載されたすべてのサブアプリであり、
 * ユーザーごとのアクセス制限が考慮されていないRawデータです。
 * アプリ一覧情報を利用したい場合は、アクセス制限が考慮後の「useSubAppStore」を利用してください。 */
// prettier-ignore
const subApps = new Map<SubAppId, SubApp>([
  [gakusimAppMetadata.id, { metadata: gakusimAppMetadata, routeContent: GakusimAppRoutes() } as SubApp],
  [stdAppsAppMetadata.id, { metadata: stdAppsAppMetadata, routeContent: StdAppsAppRoutes() } as SubApp],
  [zzzbuildAppMetadata.id, { metadata: zzzbuildAppMetadata, routeContent: ZzzbuildAppRoutes() } as SubApp],
]);

export { subApps };
