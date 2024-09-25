import { useSubAppStore } from "@/stores/useSubAppStore";
import { type SubAppID } from "@/types/subAppID";

import { SubAppSelectIcon } from "../SubAppSelectIcon";

interface Props {
  subAppID: SubAppID;
}

const SubAppOverlaySelectMenuItem = (props: Props): JSX.Element => {
  const { subAppID } = props;

  const subAppList = useSubAppStore((state) => state.subAppList);

  const app = subAppList.find((app) => app.metadata.id === subAppID);
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
