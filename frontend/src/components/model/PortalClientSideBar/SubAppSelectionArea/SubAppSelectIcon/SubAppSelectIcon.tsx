import { Tooltip } from "@nextui-org/react";

import { HStack } from "@/components/ui";

import { useSubAppSelectIcon } from "./SubAppSelectIcon.hooks";
import { type SubAppSelectIconVariantProps } from "./SubAppSelectIcon.variants";

interface SubAppSelectIconProps extends SubAppSelectIconVariantProps {
  appIconContent: React.ReactNode;
  hideTooltip?: boolean;
  tooltipContent?: string;
}

const SubAppSelectIcon = (props: SubAppSelectIconProps): JSX.Element => {
  const {
    appIconContent,
    disableAnimation = false,
    hideSelectionState = false,
    hideTooltip = false,
    isSelected = false,
    tooltipContent = undefined,
  } = props;
  const {
    state: { tvSlots },
  } = useSubAppSelectIcon({
    disableAnimation,
    hideSelectionState,
    isSelected,
  });

  return (
    <HStack align="center" justify="between" className="w-20 flex-row-reverse">
      <div className="h-2 w-1 bg-transparent" />
      <Tooltip
        disableAnimation={disableAnimation}
        isDisabled={hideTooltip || tooltipContent === undefined}
        placement="right"
        content={tooltipContent}
        closeDelay={0}
        classNames={{ base: "pointer-events-none select-none" }}
      >
        <div className={tvSlots.iconWrapper()}>{appIconContent}</div>
      </Tooltip>
      <div className={tvSlots.selectionState()} />
    </HStack>
  );
};

export { SubAppSelectIcon };
