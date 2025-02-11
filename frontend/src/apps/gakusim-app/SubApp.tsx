import { Image } from "@heroui/react";
import { Routes, Route } from "react-router-dom";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { type SubApp } from "@/types/subApp";

import { assets } from "./assets";
import { TopPage } from "./pages/TopPage";

const subApp = {
  id: "6876b3b6-307d-27ca-d845-6577357297c2",
  metadata: {
    title: "学マス コンテストシミュ",
    description: "学園アイドルマスターのコンテストシミュレーター",
  },
  icon: {
    smallContent: <Image disableAnimation src={assets.img.AppIconImage} width={24} />,
    mediumContent: <Image disableAnimation src={assets.img.AppIconImage} width={48} />,
    largeContent: <Image disableAnimation src={assets.img.AppIconImage} width={96} />,
  },
  routeContent: (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  ),
} as SubApp;

export { subApp };
