import { Image } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";

import { assets } from "@/apps/gakusim-app/assets";
import { TopPage } from "@/apps/gakusim-app/pages/TopPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { type Metadata } from "@/types/metadata";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  id: "6876b3b6-307d-27ca-d845-6577357297c2",
  title: "学マス コンテストシミュ",
  description: "学園アイドルマスターのコンテストシミュレーター",
  Icon: () => (
    <Image
      disableAnimation
      alt="アプリアイコン"
      radius="none"
      src={assets.img.AppIconImage}
      width={48}
    />
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
