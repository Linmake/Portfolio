import React, { Suspense } from 'react';
import './style/loading.css'

const AppLazy = React.lazy(() => import('./App'));

const AppWrapper = () => {
  return (
    <Suspense fallback={<span></span>}>
      <AppLazy />
    </Suspense>
  );
};

export default AppWrapper;
