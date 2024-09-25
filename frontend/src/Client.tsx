import { Routes, Route } from "react-router-dom";

import { App as HomeApp } from "@/apps/home-app/App";
import { RootLayout } from "@/components/layout/RootLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useSubAppStore } from "@/stores/useSubAppStore";

const PortalClient = (): JSX.Element => {
  const subAppList = useSubAppStore((state) => state.subAppList);

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomeApp />} />
        {subAppList.map((app) => (
          <Route key={app.metadata.id} path={`/apps/${app.metadata.id}/*`} element={<app.App />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { PortalClient };
