import { TbMeat } from "react-icons/tb";

import { HStack } from "@/components/ui";

import { useBrandLogo } from "./BrandLogo.hooks";

const BrandLogo = (): JSX.Element => {
  const {
    action: { quitWindow },
  } = useBrandLogo();

  return (
    <HStack align="center" px="sm" gap="xs">
      <div onDoubleClick={quitWindow}>
        <TbMeat className="size-6" />
      </div>
      <p className="text-medium font-semibold text-content2-foreground">Niku Portal</p>
    </HStack>
  );
};

export { BrandLogo };
