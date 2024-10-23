import {
  useSensors,
  useSensor,
  PointerSensor,
  type DragStartEvent,
  type DragEndEvent,
  type SensorDescriptor,
  type SensorOptions,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";

import { subApp as stdAppsApp } from "@/apps/std-apps-app";
import { useActiveAppStore } from "@/stores/activeAppStore";
import { useFavoriteAppOrderStore } from "@/stores/favoriteAppOrderStore";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppId";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  activeApp: SubApp | undefined;
  draggedSubAppId: SubAppId | undefined;
  favoriteAppOrder: SubAppId[];
  isStdAppsAppSelected: boolean;
  sensors: SensorDescriptor<SensorOptions>[];
  stdAppsAppIconContent: React.ReactNode;
  stdAppsAppTitle: string;
  stdAppsAppTopUrl: string;
}

interface Action {
  beginDrag: (event: DragStartEvent) => void;
  endDrag: (event: DragEndEvent) => void;
}

const useSubAppSelectionArea: ContainerHook<State, Action> = () => {
  const activeApp = useActiveAppStore((state) => state.activeApp);
  const favoriteAppOrder = useFavoriteAppOrderStore((state) => state.favoriteAppOrder);

  const updateFavoriteAppOrder = useFavoriteAppOrderStore((state) => state.updateFavoriteAppOrder);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 0 } }));

  const [draggedSubAppId, setDraggedSubAppId] = useState<SubAppId | undefined>(undefined);

  const beginDrag = (event: DragStartEvent) => {
    setDraggedSubAppId(event.active.id as SubAppId);
  };

  const endDrag = (event: DragEndEvent) => {
    if (event.over !== null && event.active.id !== event.over.id) {
      const newArray = arrayMove(
        favoriteAppOrder,
        favoriteAppOrder.indexOf(event.active.id as SubAppId),
        favoriteAppOrder.indexOf(event.over.id as SubAppId),
      );
      updateFavoriteAppOrder(newArray);
    }
    setDraggedSubAppId(undefined);
  };

  return {
    state: {
      activeApp,
      draggedSubAppId,
      favoriteAppOrder,
      isStdAppsAppSelected: activeApp?.id === stdAppsApp.id,
      sensors,
      stdAppsAppIconContent: stdAppsApp.icon.mediumContent,
      stdAppsAppTitle: stdAppsApp.metadata.title,
      stdAppsAppTopUrl: `/apps/${stdAppsApp.id}`,
    },
    action: {
      beginDrag,
      endDrag,
    },
  };
};

export { useSubAppSelectionArea };
