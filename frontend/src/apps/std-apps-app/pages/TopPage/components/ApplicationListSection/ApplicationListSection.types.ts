interface ListItem {
  key: React.Key;
  appId: string;
  href: string;
  Icon: () => JSX.Element;
  title: string;
  description: string;
  isAlreadyFavorited: boolean;
}

export { type ListItem };
