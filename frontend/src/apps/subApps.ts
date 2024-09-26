import { metadata as gakusimAppMetadata, App as GakusimApp } from "@/apps/gakusim-app";
import { metadata as homeAppMetadata, App as HomeApp } from "@/apps/home-app";
import { metadata as zzzbuildAppMetadata, App as ZzzbuildApp } from "@/apps/zzzbuild-app";
import { type SubApp } from "@/types/subApp";
import { type SubAppID } from "@/types/subAppID";

/* NOTE: 本変数の直接importは禁止します！！
 *
 * 本Mapで管理しているアプリは、ポータルアプリ上に搭載されたすべてのサブアプリであり、
 * ユーザーごとのアクセス制限が考慮されていないRawデータです。
 * アプリ一覧情報を利用したい場合は、アクセス制限が考慮後の「useSubAppStore」を利用してください。 */
const subApps = new Map<SubAppID, SubApp>([
  [gakusimAppMetadata.id, { metadata: gakusimAppMetadata, App: GakusimApp }],
  [homeAppMetadata.id, { metadata: homeAppMetadata, App: HomeApp }],
  [zzzbuildAppMetadata.id, { metadata: zzzbuildAppMetadata, App: ZzzbuildApp }],
]);

export { subApps };
