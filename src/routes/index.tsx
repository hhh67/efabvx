import { Typography } from '@mui/material';
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { MoonPfaseRoutes } from './MoonPfaseRoutes';
import { PicgleRoutes } from './PicgleRoutes';
import { QiitaReaderRoutes } from './QiitaReaderRoutes';
import { GymlogRoutes } from './GymlogRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <main>
          <Outlet />
        </main>
      }
      errorElement={<Typography>error</Typography>}
    >
      <Route path="/" element={<HomeRoutes />} />
      <Route path="qiita-reader" element={<QiitaReaderRoutes />} />
      <Route path="moon-pfase" element={<MoonPfaseRoutes />} />
      <Route path="picgle" element={<PicgleRoutes />} />
      <Route path="gymlog" element={<GymlogRoutes />} />
    </Route>,
  ),
);
