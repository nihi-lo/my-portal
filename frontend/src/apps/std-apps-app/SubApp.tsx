import { RiApps2Line } from "react-icons/ri";
import { Routes, Route } from "react-router-dom";

import { HStack } from "@/components/ui";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { type SubApp } from "@/types/subApp";

import { TopPage } from "./pages/TopPage";

const subApp = {
  id: "04528691-0050-faeb-1bb5-5abf060810f6",
  metadata: {
    title: "アプリ一覧",
    description: "",
  },
  icon: {
    smallContent: (
      <HStack align="center" justify="center" className="size-6 rounded-large bg-content2">
        <RiApps2Line className="size-4 text-content2-foreground" />
      </HStack>
    ),
    mediumContent: (
      <HStack align="center" justify="center" className="size-12 rounded-large bg-content2">
        <RiApps2Line className="size-8 text-content2-foreground" />
      </HStack>
    ),
    largeContent: (
      <HStack align="center" justify="center" className="size-24 rounded-large bg-content2">
        <RiApps2Line className="size-16 text-content2-foreground" />
      </HStack>
    ),
  },
  routeContent: (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  ),
} as SubApp;

export { subApp };
