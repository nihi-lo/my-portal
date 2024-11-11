import { CardHeader, Button, Image } from "@nextui-org/react";
import { TbRefresh } from "react-icons/tb";

import { HStack } from "@/components/ui";

import {
  type TeamMemberCardHeaderVariantProps as VariantProps,
  teamMemberCardHeaderVariants as variants,
} from "./variants";

interface TeamMemberCardHeaderProps
  extends Omit<VariantProps, "rarity">,
    Required<Pick<VariantProps, "rarity">> {
  headerImageSrc: string;
  onOpenModal: () => void;
}

const TeamMemberCardHeader = ({
  headerImageSrc,
  rarity,
  onOpenModal,
}: TeamMemberCardHeaderProps): JSX.Element => {
  /* ClassName variants */
  const { base, button, icon } = variants({ rarity });

  return (
    <CardHeader className={base()}>
      {/* チームメンバー変更ボタン */}
      <Button onClick={onOpenModal} className={button()}>
        <div className="absolute flex h-full w-full justify-end overflow-hidden">
          <div className="mr-[50px] mt-[40px] h-full scale-[2.5]">
            <Image
              removeWrapper
              src={headerImageSrc}
              className="h-full w-full rounded-none object-contain"
              style={{
                WebkitMaskImage: "linear-gradient(to left, black 75%, transparent 100%)",
                maskImage: "linear-gradient(to left, black 75%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </Button>
      {/* チームメンバー変更アイコン */}
      <div className={icon()}>
        <HStack
          align="center"
          justify="center"
          className="relative size-6 overflow-hidden rounded-full border border-divider shadow-medium"
        >
          <div className="absolute size-full bg-content2 outline-1 outline-offset-1 outline-primary" />
          <TbRefresh className="size-4 transform-gpu text-content2-foreground duration-400 ease-in-out group-hover:-rotate-180" />
        </HStack>
      </div>
    </CardHeader>
  );
};
TeamMemberCardHeader.displayName = "TeamMemberCardHeader";

export { type TeamMemberCardHeaderProps, TeamMemberCardHeader };
