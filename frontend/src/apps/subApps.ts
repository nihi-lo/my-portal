import { subApp as gakusimApp } from "@/apps/gakusim-app";
import { subApp as srsimApp } from "@/apps/srsim-app";
import { subApp as stdAppsApp } from "@/apps/std-apps-app";
import { subApp as zzzbuildApp } from "@/apps/zzzbuild-app";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppId";

/* NOTE: 本変数の直接importは禁止します！！
 *
 * 本Mapで管理しているアプリは、ポータルアプリ上に搭載されたすべてのサブアプリであり、
 * ユーザーごとのアクセス制限が考慮されていないRawデータです。
 * アプリ一覧情報を利用したい場合は、アクセス制限が考慮後の「useSubAppStore」を利用してください。 */
const subApps = new Map<SubAppId, SubApp>([
  [gakusimApp.id, gakusimApp],
  [srsimApp.id, srsimApp],
  [stdAppsApp.id, stdAppsApp],
  [zzzbuildApp.id, zzzbuildApp],
]);

export { subApps };
