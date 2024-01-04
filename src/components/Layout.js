import { Suspense } from 'react';

import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>LOADING...</p>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
};
