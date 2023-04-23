import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppContextProvider } from './AppContext';
import { router } from './router';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
