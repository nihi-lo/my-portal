import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Image,
} from "@heroui/react";
import { useState } from "react";
import { TbRefresh } from "react-icons/tb";

import { assets } from "@/apps/srsim-app/assets";
import { VStack, HStack } from "@/components/ui";

import {
  type TeamMemberSelectionModalVariantProps as VariantProps,
  teamMemberSelectionModalVariants as variants,
} from "./variants";

interface TeamMemberSelectionModalProps extends VariantProps {
  characters: {
    id: string;
    rarity: 4 | 5;
    imgSrc: string;
    isTeamMember: boolean;
    isShow: boolean;
    selectionType: "Add" | "Remove" | "Switch";
  }[];
  defaultCharacterId: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onSelectItem?: (item: { id: string }) => void;
}

const TeamMemberSelectionModal = ({
  characters,
  defaultCharacterId,
  isOpen,
  onOpenChange,
  onSelectItem,
}: TeamMemberSelectionModalProps): React.JSX.Element => {
  /* ClassName variants */
  const { base, content, header, body, characterRadioButtonRoot, characterRadioButton, footer } =
    variants();

  const [selectedCharacterId, setSelectedCharacterId] = useState(defaultCharacterId);

  /* Event handlers */
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCharacterId(event.target.value);
  };
  const handleClose = (onClose: () => void) => {
    onSelectItem?.({ id: selectedCharacterId });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={base()}>
      <ModalContent className={content()}>
        {(onClose) => (
          <>
            <ModalHeader className={header()}>
              <VStack className="w-full">
                <HStack align="center" gap="sm">
                  <div className="h-4 w-0.5 bg-primary" />
                  {"Character Catalog"}
                </HStack>
                <HStack justify="center" gap="sm" pt="xs">
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                </HStack>
                <Divider />
                <HStack justify="center" gap="sm" pt="xs">
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                  <TbRefresh className="size-8" />
                </HStack>
                <Divider />
              </VStack>
            </ModalHeader>
            <ModalBody className={body()}>
              <ScrollShadow hideScrollBar className="h-96">
                <VStack align="center" py="xs">
                  <div className="grid w-max grid-cols-3 justify-items-center gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
                    {characters.map((character) => (
                      <label
                        key={character.id}
                        className={characterRadioButtonRoot({
                          isShow: character.isShow,
                        })}
                      >
                        <input
                          type="radio"
                          name={character.id}
                          value={character.id}
                          checked={character.id === selectedCharacterId}
                          onChange={handleValueChange}
                          className="peer hidden"
                        />
                        <div
                          className={characterRadioButton({
                            rarity: character.rarity,
                          })}
                        >
                          <Image src={character.imgSrc} className="mt-[65px] scale-[1.8]" />
                          {character.isTeamMember && (
                            <HStack
                              align="center"
                              justify="center"
                              className="absolute right-0 top-0 z-10 size-5 rounded-bl-xl bg-zinc-100 opacity-75"
                            >
                              <div
                                className="size-4 bg-zinc-600"
                                style={{
                                  WebkitMaskImage: `url(${assets.icon.sign.TeamIcon})`,
                                  WebkitMaskSize: "contain",
                                  WebkitMaskRepeat: "no-repeat",
                                  WebkitMaskPosition: "center",

                                  maskImage: `url(${assets.icon.sign.TeamIcon})`,
                                  maskSize: "contain",
                                  maskRepeat: "no-repeat",
                                  maskPosition: "center",
                                }}
                              />
                            </HStack>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </VStack>
              </ScrollShadow>
            </ModalBody>
            <ModalFooter className={footer()}>
              <Button
                radius="full"
                variant="ghost"
                onPress={() => handleClose(onClose)}
                className="w-40 border"
              >
                {characters.find((el) => el.id === selectedCharacterId)?.selectionType}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
TeamMemberSelectionModal.displayName = "TeamMemberSelectionModal";

export { type TeamMemberSelectionModalProps, TeamMemberSelectionModal };
