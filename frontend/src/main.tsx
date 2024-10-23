import "@/styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { PortalClientProviders } from "@/components/model/PortalClientProviders";
import { PortalClientRoute } from "@/components/model/PortalClientRoute/PortalClientRoute";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename={"/"}>
      <PortalClientProviders>
        <PortalClientRoute />
      </PortalClientProviders>
    </HashRouter>
  </React.StrictMode>,
);
