import { AppPage, MainPage } from '@pages';
import { Route, Routes } from 'react-router-dom';

export const ROUTES_NAME = {
  MAIN: '/',
  APP_PAGE: '/app',
};

export default (
  <Routes>
    <Route path={ROUTES_NAME.MAIN} element={<MainPage />} />
    <Route path={`${ROUTES_NAME.APP_PAGE}/:id`} element={<AppPage />} />
  </Routes>
);
