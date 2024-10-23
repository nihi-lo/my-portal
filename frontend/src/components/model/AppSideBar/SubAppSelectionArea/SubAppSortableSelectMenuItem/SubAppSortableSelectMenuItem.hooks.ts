import { type DraggableAttributes } from "@dnd-kit/core";
import { type SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { type Transform } from "@dnd-kit/utilities";
import { useMemo } from "react";

import { useSubAppStore } from "@/stores/subAppStore";
import { type SubApp } from "@/types/subApp";
import { type SubAppId } from "@/types/subAppId";
import { type ContainerHook } from "@/utils/containerHook";

interface State {
  attributes: DraggableAttributes;
  isDragging: boolean;
  listeners: SyntheticListenerMap | undefined;
  subApp: SubApp | undefined;
  transform: Transform | null;
  transition: string | undefined;
}

interface Action {
  setActivatorNodeRef: (element: HTMLElement | null) => void;
  setNodeRef: (node: HTMLElement | null) => void;
}

interface Argument {
  subAppId: SubAppId;
}

const useSubAppSortableSelectMenuItem: ContainerHook<State, Action, Argument> = (args) => {
  const { subAppId } = args;

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

  const subApp = useMemo(
    () => subAppList.find((app) => app.id === subAppId),
    [subAppId, subAppList],
  );

  return {
    state: {
      attributes,
      isDragging,
      listeners,
      subApp,
      transform,
      transition,
    },
    action: {
      setActivatorNodeRef,
      setNodeRef,
    },
  };
};

export { useSubAppSortableSelectMenuItem };
