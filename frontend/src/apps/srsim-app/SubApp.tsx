import { Routes, Route } from "react-router-dom";

import { HStack } from "@/components/ui";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { type SubApp } from "@/types/subApp";

import { TopPage } from "./pages/TopPage";

const subApp = {
  id: "0f53dbda-22a8-3564-1a1f-9b8d0f062c0c",
  metadata: {
    title: "srsim",
    description: "",
  },
  icon: {
    smallContent: (
      <HStack align="center" justify="center" className="size-6 rounded-large bg-content2">
        <div className="text-sm text-content2-foreground">S</div>
      </HStack>
    ),
    mediumContent: (
      <HStack align="center" justify="center" className="size-12 rounded-large bg-content2">
        <div className="text-3xl text-content2-foreground">S</div>
      </HStack>
    ),
    largeContent: (
      <HStack align="center" justify="center" className="size-24 rounded-large bg-content2">
        <div className="text-6xl text-content2-foreground">S</div>
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
