import { type SubAppId } from "@/types/subAppIDTemp";

interface ListItem {
  key: React.Key;
  appId: SubAppId;
  description: string;
  iconContent: React.ReactNode;
  subAppTopUrl: string;
  title: string;
}

export { type ListItem };
