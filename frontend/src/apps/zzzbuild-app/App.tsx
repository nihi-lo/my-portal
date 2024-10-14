import { Image } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { type Metadata } from "@/types/metadata";

import { assets } from "./assets";
import { TopPage } from "./pages/TopPage";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  id: "c4db13c7-0be5-cc07-5de5-9843f757b8df",
  title: "ゼンゼロ ビルドツール",
  description: "エージェント毎に音動機とディスク管理",
  Icon: () => (
    <Image
      disableAnimation
      alt="アプリアイコン"
      radius="none"
      src={assets.img.AppIconImage}
      width={48}
    />
  ),
} as Metadata;

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
