import { Image } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { type Metadata } from "@/types/metadata";

import { assets } from "./assets";
import { TopPage } from "./pages/TopPage";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  id: "6876b3b6-307d-27ca-d845-6577357297c2",
  title: "学マス コンテストシミュ",
  description: "学園アイドルマスターのコンテストシミュレーター",
  iconContent: (
    <Image
      disableAnimation
      alt="アプリアイコン"
      radius="none"
      src={assets.img.AppIconImage}
      width={48}
    />
  ),
} as Metadata;

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
