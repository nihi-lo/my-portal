import { RiHome3Line } from "react-icons/ri";
import { Routes, Route } from "react-router-dom";

import { TopPage } from "@/apps/home-app/pages/TopPage";
import { HStack } from "@/components/ui";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { type Metadata } from "@/types/metadata";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  id: "9758b097-c421-e215-1892-b9faf92fda64",
  title: "ホーム",
  description: "",
  Icon: () => (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <RiHome3Line className="size-8 text-content2-foreground" />
    </HStack>
  ),
};

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
