import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import {
  RiInformation2Line,
  RiIndeterminateCircleLine,
  RiAddLine,
  RiMore2Fill,
} from "react-icons/ri";

import { useActiveAppDropdownMenu } from "./ActiveAppDropdownMenu.hooks";

const ActiveAppDropdownMenu = (): JSX.Element => {
  const {
    state: { disabledDropdownItemKeys },
    action: { addFavoriteApp, removeFavoriteApp },
  } = useActiveAppDropdownMenu();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly radius="full" variant="light" className="h-6 w-6 min-w-6">
          <RiMore2Fill className="text-small" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="アプリへの操作"
        disabledKeys={disabledDropdownItemKeys}
        variant="flat"
      >
        <DropdownItem
          key="new"
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

export { ActiveAppDropdownMenu };
