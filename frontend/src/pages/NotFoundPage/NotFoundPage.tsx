import { Link } from "@heroui/react";
import { RiAlertFill } from "react-icons/ri";

import { VStack, HStack } from "@/components/ui";

const NotFoundPage = (): React.JSX.Element => {
  return (
    <VStack as="main" align="center" justify="center" gap="md" className="h-full">
      <HStack align="center" gap="sm">
        <RiAlertFill className="size-12 text-warning" />
        <p className="text-2xl">404 Not Found</p>
      </HStack>
      <Link href="/" underline="always">
        アプリ一覧へ
      </Link>
    </VStack>
  );
};

export { NotFoundPage };
