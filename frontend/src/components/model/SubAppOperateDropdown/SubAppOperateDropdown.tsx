import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { RiInformation2Line, RiAddLine, RiIndeterminateCircleLine } from "react-icons/ri";

import { type SubAppID } from "@/types/subAppID";

import { useSubAppOperateDropdownProps } from "./SubAppOperateDropdown.hooks";

interface SubAppOperateDropdownProps {
  appId: SubAppID | undefined;
  triggerContent: React.ReactNode;
}

const SubAppOperateDropdown = (props: SubAppOperateDropdownProps): JSX.Element => {
  const { appId, triggerContent } = props;

  const {
    state: { disabledDropdownItemKeys },
    action: { addFavoriteApp, removeFavoriteApp },
  } = useSubAppOperateDropdownProps({ appId });

  return (
    <Dropdown>
      <DropdownTrigger>{triggerContent}</DropdownTrigger>
      <DropdownMenu
        aria-label="アプリへの操作"
        disabledKeys={disabledDropdownItemKeys}
        variant="flat"
      >
        <DropdownItem
          key="about"
          showDivider
          startContent={<RiInformation2Line className="text-small" />}
        >
          このアプリについて
        </DropdownItem>
        <DropdownItem
          key="add"
          startContent={<RiAddLine className="text-small" />}
          onClick={() => addFavoriteApp!()}
        >
          サイドバーへ追加
        </DropdownItem>
        <DropdownItem
          key="remove"
          startContent={<RiIndeterminateCircleLine className="text-small" />}
          onClick={() => removeFavoriteApp!()}
        >
          サイドバーから削除
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { SubAppOperateDropdown };
