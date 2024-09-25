import { Button, Image, Tooltip } from "@nextui-org/react";
import { RiAccountBoxLine } from "react-icons/ri";

import { useAccountSignInButton } from "./AccountSignInButton.hooks";

const AccountSignInButton = (): JSX.Element => {
  const {
    state: { isAuthenticated, user },
    action: { signIn },
  } = useAccountSignInButton();

  return (
    <Tooltip
      placement="right"
      content={isAuthenticated ? `${user.name} でサインイン中` : "サインイン"}
      closeDelay={0}
      classNames={{ base: "pointer-events-none select-none" }}
    >
      {isAuthenticated ? (
        <Button isIconOnly size="lg" variant="light" radius="full">
          <Image width={48} height={48} src={user.image} />
        </Button>
      ) : (
        <Button isIconOnly size="lg" variant="light" onClick={signIn}>
          <RiAccountBoxLine className="size-8" />
        </Button>
      )}
    </Tooltip>
  );
};

export { AccountSignInButton };
