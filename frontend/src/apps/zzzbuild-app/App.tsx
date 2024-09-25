import { Image } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";

import { assets } from "@/apps/zzzbuild-app/assets";
import { TopPage } from "@/apps/zzzbuild-app/pages/TopPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { type Metadata } from "@/types/metadata";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  id: "c4db13c7-0be5-cc07-5de5-9843f757b8df",
  title: "ゼンゼロ ビルドツール",
  description: "",
  Icon: () => <Image alt="アプリアイコン" radius="none" src={assets.img.AppIconImage} width={48} />,
};

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
