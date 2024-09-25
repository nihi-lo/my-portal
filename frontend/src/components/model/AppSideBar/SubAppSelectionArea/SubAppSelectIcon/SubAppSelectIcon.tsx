import { Tooltip } from "@nextui-org/react";

import { HStack } from "@/components/ui";

import {
  type SubAppSelectIconVariantProps,
  subAppSelectIconVariants,
} from "./SubAppSelectIcon.variants";

interface Props extends SubAppSelectIconVariantProps {
  appIconContent: React.ReactNode;
  hideTooltip?: boolean;
  tooltipContent?: string;
}

const SubAppSelectIcon = (props: Props): JSX.Element => {
  const {
    appIconContent,
    disableAnimation = false,
    hideSelectionState = false,
    hideTooltip = false,
    isSelected = false,
    tooltipContent = undefined,
  } = props;

  const { iconWrapper, selectionState } = subAppSelectIconVariants({
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
        <div className={iconWrapper()}>{appIconContent}</div>
      </Tooltip>
      <div className={selectionState()} />
    </HStack>
  );
};

export { SubAppSelectIcon };
