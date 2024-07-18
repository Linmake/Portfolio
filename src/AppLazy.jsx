import React, { Suspense } from 'react';
import './style/Loader.css'

const AppLazy = React.lazy(() => import('./App'));

const AppWrapper = () => {
  return (
    <Suspense fallback={<span className="loader"></span>}>
      <AppLazy />
    </Suspense>
  );
};

export default AppWrapper;
