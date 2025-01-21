import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import { RiInformation2Line, RiAddLine, RiSubtractLine } from "react-icons/ri";

import { type SubAppId } from "@/types/subAppId";

import { SubAppAboutModal } from "./SubAppAboutModal";
import { useSubAppOperateDropdown } from "./SubAppOperateDropdown.hooks";

interface SubAppOperateDropdownProps {
  subAppId: SubAppId | undefined;
  triggerContent: React.ReactNode;
}

const SubAppOperateDropdown = (props: SubAppOperateDropdownProps): React.JSX.Element => {
  const { subAppId, triggerContent } = props;
  const {
    state: { disabledDropdownItemKeys, isSubAppAboutModalOpen },
    action: { addFavoriteApp, closeSubAppAboutModal, openSubAppAboutModal, removeFavoriteApp },
  } = useSubAppOperateDropdown({ subAppId });

  return (
    <>
      <Dropdown>
        <DropdownTrigger>{triggerContent}</DropdownTrigger>
        <DropdownMenu
          aria-label="アプリへの操作"
          disabledKeys={disabledDropdownItemKeys}
          variant="flat"
        >
          <DropdownSection showDivider>
            <DropdownItem
              key="about"
              startContent={<RiInformation2Line className="size-5" />}
              onClick={openSubAppAboutModal}
            >
              このアプリについて...
            </DropdownItem>
          </DropdownSection>

          <DropdownSection>
            <DropdownItem
              key="add"
              startContent={<RiAddLine className="size-5" />}
              onClick={() => addFavoriteApp!()}
            >
              サイドバーへ追加
            </DropdownItem>
            <DropdownItem
              key="remove"
              startContent={<RiSubtractLine className="size-5" />}
              onClick={() => removeFavoriteApp!()}
            >
              サイドバーから削除
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>

      <SubAppAboutModal
        isOpen={isSubAppAboutModalOpen}
        subAppId={subAppId}
        onClose={closeSubAppAboutModal}
      />
    </>
  );
};

export { SubAppOperateDropdown };
