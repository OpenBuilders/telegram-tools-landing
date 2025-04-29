import { MainPage } from '@pages';
import { Route, Routes } from 'react-router-dom';

export const ROUTES_NAME = {
  MAIN: '/',
};

export default (
  <Routes>
    <Route path={ROUTES_NAME.MAIN} element={<MainPage />} />
  </Routes>
);
