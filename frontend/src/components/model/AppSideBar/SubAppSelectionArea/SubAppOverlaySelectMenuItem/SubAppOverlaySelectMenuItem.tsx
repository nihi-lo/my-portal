import { subApps } from "@/apps/subApps";
import { type SubAppID } from "@/types/subAppID";

import { SubAppSelectIcon } from "../SubAppSelectIcon";

interface Props {
  subAppID: SubAppID;
}

const SubAppOverlaySelectMenuItem = (props: Props): JSX.Element => {
  const { subAppID } = props;

  const app = subApps.get(subAppID);
  if (app === undefined) {
    return <></>;
  }

  return (
    <SubAppSelectIcon
      disableAnimation
      hideSelectionState
      hideTooltip
      appIconContent={
        <div className="cursor-grabbing">
          <app.metadata.Icon />
        </div>
      }
    />
  );
};

export { SubAppOverlaySelectMenuItem };
