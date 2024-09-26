import { RiApps2Line } from "react-icons/ri";
import { Routes, Route } from "react-router-dom";

import { HStack } from "@/components/ui";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { type Metadata } from "@/types/metadata";

import { TopPage } from "./pages/TopPage";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  id: "04528691-0050-faeb-1bb5-5abf060810f6",
  title: "アプリ一覧",
  description: "",
  Icon: () => (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <RiApps2Line className="size-8 text-content2-foreground" />
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
