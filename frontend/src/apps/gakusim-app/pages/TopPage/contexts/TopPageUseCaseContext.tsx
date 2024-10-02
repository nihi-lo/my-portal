import { createContext, useContext } from "react";

type TopPageUseCases = Record<string, never>;

const UseCaseContext = createContext<TopPageUseCases | null>(null);

interface TopPageUseCaseProviderProps {
  children: React.ReactNode;
  value?: TopPageUseCases;
}

const TopPageUseCaseProvider = (props: TopPageUseCaseProviderProps): JSX.Element => {
  const { children, value } = props;

  const defaultValue: TopPageUseCases = {};

  return (
    <UseCaseContext.Provider value={value ?? defaultValue}>{children}</UseCaseContext.Provider>
  );
};

const useTopPageUseCases = (): TopPageUseCases => {
  const context = useContext(UseCaseContext);
  if (!context) {
    throw new Error("useTopPageUseCases must be used within a TopPageUseCaseProvider");
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { TopPageUseCaseProvider, useTopPageUseCases };