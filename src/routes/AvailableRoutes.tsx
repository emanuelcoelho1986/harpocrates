import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import AvailableRoutesEnum from './AvailableRoutes.enum';

/** Pages * */
import Home from '../pages/Home';
import Loading from '../pages/Loading';
import PageContainer from '../pages/PageContainer';

// Lazy load pages
const GamePage = React.lazy(() => import('pages/Game'));

export default function AvailableRoutes() {
  return (
    <Routes>
      <Route path="/" element={PageContainer()}>
        <Route index element={<Home />} />

        <Route
          path={AvailableRoutesEnum.GAME}
          element={(
            <Suspense fallback={Loading()}>
              <GamePage />
            </Suspense>
          )}
        />

        <Route path={AvailableRoutesEnum.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
