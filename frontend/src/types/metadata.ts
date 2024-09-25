import { type SubAppID } from "@/types/subAppID";

interface Metadata {
  id: SubAppID;
  title: string;
  description: string;
  Icon: () => JSX.Element;
}

export { type Metadata };
