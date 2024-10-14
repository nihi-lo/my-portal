import { type SubAppID } from "@/types/subAppID";

interface ListItem {
  key: React.Key;
  appId: SubAppID;
  description: string;
  iconContent: React.ReactNode;
  subAppTopUrl: string;
  title: string;
}

export { type ListItem };
