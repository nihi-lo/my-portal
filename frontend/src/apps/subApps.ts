import { metadata as gakusimAppMetadata, App as GakusimApp } from "@/apps/gakusim-app";
import { metadata as stdAppsAppMetadata, App as StdAppsApp } from "@/apps/std-apps-app";
import { metadata as zzzbuildAppMetadata, App as ZzzbuildApp } from "@/apps/zzzbuild-app";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppIDTemp";

/* NOTE: 本変数の直接importは禁止します！！
 *
 * 本Mapで管理しているアプリは、ポータルアプリ上に搭載されたすべてのサブアプリであり、
 * ユーザーごとのアクセス制限が考慮されていないRawデータです。
 * アプリ一覧情報を利用したい場合は、アクセス制限が考慮後の「useSubAppStore」を利用してください。 */
const subApps = new Map<SubAppId, SubApp>([
  [gakusimAppMetadata.id, { metadata: gakusimAppMetadata, App: GakusimApp } as SubApp],
  [stdAppsAppMetadata.id, { metadata: stdAppsAppMetadata, App: StdAppsApp } as SubApp],
  [zzzbuildAppMetadata.id, { metadata: zzzbuildAppMetadata, App: ZzzbuildApp } as SubApp],
]);

export { subApps };
