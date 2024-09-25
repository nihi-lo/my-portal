import "@/styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { PortalClientProviders } from "@/components/functional/PortalClientProviders";

import { PortalClient } from "./Client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename={"/"}>
      <PortalClientProviders>
        <PortalClient />
      </PortalClientProviders>
    </HashRouter>
  </React.StrictMode>,
);
