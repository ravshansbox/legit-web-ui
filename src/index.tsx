import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppContextProvider } from './AppContext';
import { globalStyles } from './globalStyles';
import { router } from './router';

const queryClient = new QueryClient();

globalStyles();

createRoot(document.querySelector('#root') as HTMLElement).render(
  <AppContextProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AppContextProvider>
);
