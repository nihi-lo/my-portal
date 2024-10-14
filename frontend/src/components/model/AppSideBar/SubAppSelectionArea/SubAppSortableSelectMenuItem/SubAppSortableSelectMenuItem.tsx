import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/react";

import { useSubAppStore } from "@/stores/subAppStore";
import { type SubAppId } from "@/types/subAppId";

import { SubAppSelectIcon } from "../SubAppSelectIcon";

interface SubAppSortableSelectMenuItemProps {
  isSelected?: boolean;
  subAppId: SubAppId;
}

const SubAppSortableSelectMenuItem = (props: SubAppSortableSelectMenuItemProps): JSX.Element => {
  const { isSelected = false, subAppId } = props;

  const subAppList = useSubAppStore((store) => store.subAppList);

  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: subAppId });

  const app = subAppList.find((app) => app.metadata.id === subAppId);
  if (app === undefined) {
    return <></>;
  }

  return (
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
              {isDragging ? <div className="size-12 bg-divider" /> : <app.metadata.Icon />}
            </div>
          </Link>
        }
        tooltipContent={app.metadata.title}
      />
    </div>
  );
};

export { SubAppSortableSelectMenuItem };
