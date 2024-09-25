import { RiArmchairFill } from "react-icons/ri";

import { HStack } from "@/components/ui";

import { useBrandLogo } from "./BrandLogo.hooks";

const BrandLogo = (): JSX.Element => {
  const {
    action: { quitWindow },
  } = useBrandLogo();

  return (
    <HStack align="center" px="sm" gap="xs">
      <div onDoubleClick={quitWindow}>
        <RiArmchairFill className="size-6" />
      </div>
      <p className="text-medium font-semibold text-content2-foreground">My Portal</p>
    </HStack>
  );
};

export { BrandLogo };
