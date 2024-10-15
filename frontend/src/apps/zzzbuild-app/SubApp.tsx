import { Image } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { type SubApp } from "@/types/subApp";

import { assets } from "./assets";
import { TopPage } from "./pages/TopPage";

const subApp = {
  id: "c4db13c7-0be5-cc07-5de5-9843f757b8df",
  metadata: {
    title: "ゼンゼロ ビルドツール",
    description: "エージェント毎に音動機とディスク管理",
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
