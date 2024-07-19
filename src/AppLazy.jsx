import React, { Suspense } from 'react';
import Loader from './components/Loader';

const AppLazy = React.lazy(() => import('./App'));

const AppWrapper = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppLazy />
    </Suspense>
  );
};

export default AppWrapper;
