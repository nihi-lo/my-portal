interface Application {
  key: React.Key;
  id: string;
  Icon: () => JSX.Element;
  title: string;
  description: string;
  isAlreadyFavorited: boolean;
}

export { type Application };
