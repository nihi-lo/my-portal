import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";

import { type SubAppId } from "@/types/subAppId";

import { useSubAppAboutModal } from "./SubAppAboutModal.hooks";

interface SubAppAboutModalProps {
  isOpen: boolean;
  subAppId: SubAppId | undefined;
  onClose: () => void;
}

const SubAppAboutModal = (props: SubAppAboutModalProps): React.JSX.Element => {
  const { isOpen, subAppId, onClose } = props;
  const {
    state: { title },
  } = useSubAppAboutModal({ subAppId });

  return (
    <Modal isOpen={isOpen} scrollBehavior="inside" onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
              <p>Dummy body</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                OK
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export { SubAppAboutModal };
