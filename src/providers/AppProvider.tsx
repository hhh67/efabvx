import { router } from '@/routes';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

export const AppProvider: React.FC = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};
