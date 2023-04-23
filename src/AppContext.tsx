import {
  ComponentType,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type AppStateValue = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
};

type AppContextValue = {
  appState: AppStateValue;
  setAppState: Dispatch<SetStateAction<AppStateValue>>;
};

export const AppContext = createContext({} as AppContextValue);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: ComponentType<PropsWithChildren> = ({
  children,
}) => {
  const [appState, setAppState] = useState<AppStateValue>({
    isAuthenticated: false,
    isAuthenticating: true,
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};
