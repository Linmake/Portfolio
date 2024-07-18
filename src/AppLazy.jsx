import React, { Suspense } from 'react';

const AppLazy = React.lazy(() => import('./App'));

const AppWrapper = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AppLazy />
    </Suspense>
  );
};

export default AppWrapper;
