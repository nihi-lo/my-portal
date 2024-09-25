import { type Metadata } from "@/types/metadata";

interface SubApp {
  metadata: Metadata;
  App: () => JSX.Element;
}

export { type SubApp };
