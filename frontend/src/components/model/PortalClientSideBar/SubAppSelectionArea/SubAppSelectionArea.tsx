import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Divider, Link } from "@nextui-org/react";

import { VStack } from "@/components/ui";

import { SubAppOverlaySelectMenuItem } from "./SubAppOverlaySelectMenuItem";
import { SubAppSelectIcon } from "./SubAppSelectIcon";
import { useSubAppSelectionArea } from "./SubAppSelectionArea.hooks";
import { SubAppSortableSelectMenuItem } from "./SubAppSortableSelectMenuItem";

const SubAppSelectionArea = (): React.JSX.Element => {
  const {
    state: {
      activeApp,
      draggedSubAppId,
      favoriteAppOrder,
      isStdAppsAppSelected,
      sensors,
      stdAppsAppIconContent,
      stdAppsAppTitle,
      stdAppsAppTopUrl,
    },
    action: { beginDrag, endDrag },
  } = useSubAppSelectionArea();

  return (
    <VStack align="center" py="sm" gap="sm">
      <SubAppSelectIcon
        isSelected={isStdAppsAppSelected}
        appIconContent={<Link href={stdAppsAppTopUrl}>{stdAppsAppIconContent}</Link>}
        tooltipContent={stdAppsAppTitle}
      />

      <Divider className="w-4/5" />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={beginDrag}
        onDragEnd={endDrag}
      >
        <SortableContext items={favoriteAppOrder} strategy={verticalListSortingStrategy}>
          {favoriteAppOrder.map((appId) => (
            <SubAppSortableSelectMenuItem
              key={appId}
              isSelected={appId === activeApp?.id}
              subAppId={appId}
            />
          ))}
        </SortableContext>
        <DragOverlay>
          {draggedSubAppId && <SubAppOverlaySelectMenuItem subAppId={draggedSubAppId} />}
        </DragOverlay>
      </DndContext>
    </VStack>
  );
};

export { SubAppSelectionArea };
