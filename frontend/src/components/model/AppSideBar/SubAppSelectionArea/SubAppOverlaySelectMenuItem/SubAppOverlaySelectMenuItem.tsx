import { useSubAppStore } from "@/stores/subAppStore";
import { type SubAppId } from "@/types/subAppIDTemp";

import { SubAppSelectIcon } from "../SubAppSelectIcon";

interface Props {
  subAppId: SubAppId;
}

const SubAppOverlaySelectMenuItem = (props: Props): JSX.Element => {
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
      appIconContent={
        <div className="cursor-grabbing">
          <app.metadata.Icon />
        </div>
      }
    />
  );
};

export { SubAppOverlaySelectMenuItem };
