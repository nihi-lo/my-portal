import { Routes, Route } from "react-router-dom";

import { AppRoutes as StdAppsAppRoutes } from "@/apps/std-apps-app";
import { RootLayout } from "@/components/layout/RootLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useSubAppStore } from "@/stores/subAppStore";

const PortalClient = (): JSX.Element => {
  const subAppList = useSubAppStore((state) => state.subAppList);

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<StdAppsAppRoutes />} />
        {subAppList.map((app) => (
          <Route
            key={app.metadata.id}
            path={`/apps/${app.metadata.id}/*`}
            element={app.routeContent}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { PortalClient };
