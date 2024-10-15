import { Routes, Route } from "react-router-dom";

import { subApp as stdAppsApp } from "@/apps/std-apps-app";
import { RootLayout } from "@/components/layout/RootLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useSubAppStore } from "@/stores/subAppStore";

const PortalClient = (): JSX.Element => {
  const subAppList = useSubAppStore((state) => state.subAppList);

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={stdAppsApp.routeContent} />
        {subAppList.map((app) => (
          <Route key={app.id} path={`/apps/${app.id}/*`} element={app.routeContent} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { PortalClient };
