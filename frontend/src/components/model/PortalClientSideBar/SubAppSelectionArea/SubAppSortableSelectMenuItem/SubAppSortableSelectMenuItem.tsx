import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/react";

import { type SubAppId } from "@/types/subAppId";

import { SubAppSelectIcon } from "../SubAppSelectIcon";
import { useSubAppSortableSelectMenuItem } from "./SubAppSortableSelectMenuItem.hooks";

interface SubAppSortableSelectMenuItemProps {
  isSelected?: boolean;
  subAppId: SubAppId;
}

const SubAppSortableSelectMenuItem = (
  props: SubAppSortableSelectMenuItemProps,
): React.JSX.Element => {
  const { isSelected = false, subAppId } = props;
  const {
    state: { attributes, isDragging, listeners, subApp, transform, transition },
    action: { setActivatorNodeRef, setNodeRef },
  } = useSubAppSortableSelectMenuItem({ subAppId });

  return (
    <>
      {subApp && (
        <div
          ref={setNodeRef}
          style={{
            transform: CSS.Transform.toString(transform),
            transition,
          }}
        >
          <SubAppSelectIcon
            hideSelectionState={isDragging}
            hideTooltip={isDragging}
            isSelected={isSelected}
            appIconContent={
              <Link href={`/apps/${subAppId}`}>
                <div ref={setActivatorNodeRef} {...attributes} {...listeners}>
                  {isDragging ? (
                    <div className="size-12 rounded-large bg-divider" />
                  ) : (
                    subApp.icon.mediumContent
                  )}
                </div>
              </Link>
            }
            tooltipContent={subApp.metadata.title}
          />
        </div>
      )}
    </>
  );
};

export { SubAppSortableSelectMenuItem };
