import {
  DndContext,
  closestCenter,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Divider, Link } from "@nextui-org/react";
import { useState } from "react";

import { metadata as stdAppsMetadata } from "@/apps/std-apps-app";
import { VStack } from "@/components/ui";
import { useActiveAppStore } from "@/stores/activeAppStore";
import { useFavoriteAppOrderStore } from "@/stores/favoriteAppOrderStore";
import { type SubAppID } from "@/types/subAppID";

import { SubAppOverlaySelectMenuItem } from "./SubAppOverlaySelectMenuItem";
import { SubAppSelectIcon } from "./SubAppSelectIcon";
import { SubAppSortableSelectMenuItem } from "./SubAppSortableSelectMenuItem";

const SubAppSelectionArea = (): JSX.Element => {
  const activeApp = useActiveAppStore((state) => state.activeApp);
  const favoriteAppOrder = useFavoriteAppOrderStore((state) => state.favoriteAppOrder);

  const updateFavoriteAppOrder = useFavoriteAppOrderStore((state) => state.updateFavoriteAppOrder);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 0 } }));

  const [activeID, setActiveID] = useState<SubAppID | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    setActiveID(active.id as SubAppID);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over !== null && active.id !== over.id) {
      const newArray = arrayMove(
        favoriteAppOrder,
        favoriteAppOrder.indexOf(active.id as SubAppID),
        favoriteAppOrder.indexOf(over.id as SubAppID),
      );
      updateFavoriteAppOrder(newArray);
    }

    setActiveID(null);
  };

  return (
    <VStack align="center" py="sm" gap="sm">
      <SubAppSelectIcon
        isSelected={activeApp?.metadata.id === stdAppsMetadata.id}
        appIconContent={
          <Link href={`/apps/${stdAppsMetadata.id}`}>
            <stdAppsMetadata.Icon />
          </Link>
        }
        tooltipContent={stdAppsMetadata.title}
      />

      <Divider className="w-4/5" />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={favoriteAppOrder} strategy={verticalListSortingStrategy}>
          {favoriteAppOrder.map((appId) => (
            <SubAppSortableSelectMenuItem
              key={appId}
              isSelected={activeApp?.metadata.id === appId}
              subAppID={appId}
            />
          ))}
        </SortableContext>
        <DragOverlay>{activeID && <SubAppOverlaySelectMenuItem subAppID={activeID} />}</DragOverlay>
      </DndContext>
    </VStack>
  );
};

export { SubAppSelectionArea };
