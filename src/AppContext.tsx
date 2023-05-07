import {
  ComponentType,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { HttpClient, createHttpClient } from './createHttpClient';

type AppStateValue = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
};

type AppContextValue = {
  httpClient: HttpClient;
  appState: AppStateValue;
  setAppState: Dispatch<SetStateAction<AppStateValue>>;
};

export const httpClient = createHttpClient(import.meta.env.VITE_API_BASE_URL);

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
    <AppContext.Provider value={{ httpClient, appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};
