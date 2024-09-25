import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/react";

import { useSubAppStore } from "@/stores/useSubAppStore";
import { type SubAppID } from "@/types/subAppID";

import { SubAppSelectIcon } from "../SubAppSelectIcon";

interface Props {
  isSelected?: boolean;
  subAppID: SubAppID;
}

const SubAppSortableSelectMenuItem = (props: Props): JSX.Element => {
  const { isSelected = false, subAppID } = props;

  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: subAppID });

  const subAppList = useSubAppStore((store) => store.subAppList);

  const app = subAppList.find((app) => app.metadata.id === subAppID);
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
          <Link href={`/apps/${subAppID}`}>
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
