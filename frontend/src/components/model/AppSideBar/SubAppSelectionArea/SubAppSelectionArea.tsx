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

import { metadata as homeAppMetadata } from "@/apps/home-app";
import { VStack } from "@/components/ui";
import { useActiveAppIdStore } from "@/stores/useActiveAppIdStore";
import { useFavoriteAppOrderStore } from "@/stores/useFavoriteAppOrderStore";
import { type SubAppID } from "@/types/subAppID";

import { SubAppOverlaySelectMenuItem } from "./SubAppOverlaySelectMenuItem";
import { SubAppSelectIcon } from "./SubAppSelectIcon";
import { SubAppSortableSelectMenuItem } from "./SubAppSortableSelectMenuItem";

const SubAppSelectionArea = (): JSX.Element => {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 0 } }));

  const activeAppId = useActiveAppIdStore((state) => state.activeAppId);
  const favoriteApps = useFavoriteAppOrderStore((state) => state.favoriteApps);
  const setFavoriteApps = useFavoriteAppOrderStore((state) => state.setFavoriteApps);

  const [activeID, setActiveID] = useState<SubAppID | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveID(active.id as SubAppID);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over !== null && active.id !== over.id) {
      const newArray = arrayMove(
        favoriteApps,
        favoriteApps.indexOf(active.id as SubAppID),
        favoriteApps.indexOf(over.id as SubAppID),
      );
      setFavoriteApps(newArray);
    }
    setActiveID(null);
  };

  return (
    <VStack align="center" py="sm" gap="sm">
      <SubAppSelectIcon
        isSelected={activeAppId === homeAppMetadata.id}
        appIconContent={
          <Link href={`/apps/${homeAppMetadata.id}`}>
            <homeAppMetadata.Icon />
          </Link>
        }
        tooltipContent={homeAppMetadata.title}
      />

      <Divider className="w-4/5" />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={favoriteApps} strategy={verticalListSortingStrategy}>
          {favoriteApps.map((appId) => (
            <SubAppSortableSelectMenuItem
              key={appId}
              isSelected={activeAppId === appId}
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
