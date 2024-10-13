interface ListItem {
  key: React.Key;
  description: string;
  disabledDropdownItemKeys: Iterable<string>;
  iconContent: React.ReactNode;
  subAppTopUrl: string;
  title: string;
  addFavoriteApp: () => void;
  removeFavoriteApp: () => void;
}

export { type ListItem };
