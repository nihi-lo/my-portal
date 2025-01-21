import { Routes, Route } from "react-router-dom";

import { RootLayout } from "@/components/layout/RootLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";

import { usePortalClientRoute } from "./PortalClientRoute.hooks";

const PortalClientRoute = (): React.JSX.Element => {
  const {
    state: { rootRouteContent, routeList },
  } = usePortalClientRoute();

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={rootRouteContent} />
        {routeList.map((route) => (
          <Route key={route.key} path={route.path} element={route.content} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { PortalClientRoute };
