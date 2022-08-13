import { Routes, Route } from 'react-router-dom';

/** Pages * */
import NotFound from 'pages/NotFound';

import React, { Suspense } from 'react';
import Home from '../pages/Home';
import Loading from '../pages/Loading';
import PageContainer from '../pages/PageContainer';

export enum AvailableRoutes {
    HOME = '/',
    GAME = 'GAME',
    NOT_FOUND = '*'
}

// Lazy load pages
const HomePage = React.lazy(() => import('pages/Home'));
const GamePage = React.lazy(() => import('pages/Game'));

export default function () {
  return (
    <Routes>
      <Route path="/" element={PageContainer()}>
        <Route index element={<Home />} />

        // Lazy Loaded Routes
        <Route
          path={AvailableRoutes.GAME}
          element={(
            <Suspense fallback={Loading()}>
              <GamePage />
            </Suspense>
                  )}
        />

        // will be always available so we don't need to wrap it
        <Route path={AvailableRoutes.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
