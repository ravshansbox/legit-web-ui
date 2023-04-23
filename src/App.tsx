import { ComponentType, useEffect } from 'react';
import { useAppContext } from './AppContext';
import { Home } from './Home';
import { Login } from './Login';
import { httpClient } from './httpClient';

export const App: ComponentType = () => {
  const { appState, setAppState } = useAppContext();

  useEffect(() => {
    (async () => {
      const accessTokenId = window.localStorage.getItem('ACCESS_TOKEN_ID');
      if (accessTokenId === null) {
        setAppState((appState) => ({ ...appState, isAuthenticating: false }));
        return;
      }
      await httpClient.get(`/access-tokens/${accessTokenId}`);
      setAppState((appState) => ({
        ...appState,
        isAuthenticated: true,
        isAuthenticating: false,
      }));
    })().catch(console.error);
  }, []);

  if (appState.isAuthenticating) {
    return null;
  }

  if (!appState.isAuthenticated) {
    return <Login />;
  }

  return <Home />;
};
