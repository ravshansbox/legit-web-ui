import { ComponentType, useEffect } from 'react';
import { useAppContext } from './AppContext';
import { Home } from './Home';
import { Login } from './Login';
import { httpClient } from './httpClient';

export const App: ComponentType = () => {
  const { appState, setAppState } = useAppContext();

  useEffect(() => {
    const accessTokenId = window.localStorage.getItem('ACCESS_TOKEN_ID');
    if (accessTokenId === null) {
      setAppState((appState) => ({ ...appState, isAuthenticating: false }));
      return;
    }
    const abortController = new AbortController();
    httpClient
      .request('get', `/access-tokens/${accessTokenId}`, { signal: abortController.signal })
      .then(() => {
        httpClient.setHeader('Authorization', `Bearer ${accessTokenId}`);
        setAppState((appState) => ({
          ...appState,
          isAuthenticated: true,
          isAuthenticating: false,
        }));
      });

    return () => {
      abortController.abort();
    };
  }, []);

  if (appState.isAuthenticating) {
    return null;
  }

  if (!appState.isAuthenticated) {
    return <Login />;
  }

  return <Home />;
};
