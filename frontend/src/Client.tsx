import { Routes, Route } from "react-router-dom";

import { App as HomeApp } from "@/apps/home-app/App";
import { subApps } from "@/apps/subApps";
import { RootLayout } from "@/components/layout/RootLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";

const PortalClient = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomeApp />} />
        {(() => {
          const elements: JSX.Element[] = [];
          subApps.forEach((app, key) =>
            elements.push(<Route key={key} path={`/apps/${key}/*`} element={<app.App />} />),
          );
          return elements;
        })()}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { PortalClient };
