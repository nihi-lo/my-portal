import { useSubAppStore } from "@/stores/subAppStore";
import { type SubAppId } from "@/types/subAppId";

import { SubAppSelectIcon } from "../SubAppSelectIcon";

interface SubAppOverlaySelectMenuItemProps {
  subAppId: SubAppId;
}

const SubAppOverlaySelectMenuItem = (props: SubAppOverlaySelectMenuItemProps): JSX.Element => {
  const { subAppId } = props;

  const subAppList = useSubAppStore((state) => state.subAppList);

  const app = subAppList.find((app) => app.metadata.id === subAppId);
  if (app === undefined) {
    return <></>;
  }

  return (
    <SubAppSelectIcon
      disableAnimation
      hideSelectionState
      hideTooltip
      appIconContent={<div className="cursor-grabbing">{app.metadata.iconContent}</div>}
    />
  );
};

export { SubAppOverlaySelectMenuItem };
