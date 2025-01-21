import { type SubAppId } from "@/types/subAppId";

import { SubAppSelectIcon } from "../SubAppSelectIcon";
import { useSubAppOverlaySelectMenuItem } from "./SubAppOverlaySelectMenuItem.hooks";

interface SubAppOverlaySelectMenuItemProps {
  subAppId: SubAppId;
}

const SubAppOverlaySelectMenuItem = (
  props: SubAppOverlaySelectMenuItemProps,
): React.JSX.Element => {
  const { subAppId } = props;
  const {
    state: { subApp },
  } = useSubAppOverlaySelectMenuItem({ subAppId });

  return (
    <>
      {subApp && (
        <SubAppSelectIcon
          disableAnimation
          hideSelectionState
          hideTooltip
          appIconContent={<div className="cursor-grabbing">{subApp.icon.mediumContent}</div>}
        />
      )}
    </>
  );
};

export { SubAppOverlaySelectMenuItem };
