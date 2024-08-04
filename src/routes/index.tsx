import { Layout } from '@/components/common/Layout/Layout';
import { Typography } from '@mui/material';
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { GymlogRoutes } from './GymlogRoutes';
import { HomeRoutes } from './HomeRoutes';
import { MoonPfaseRoutes } from './MoonPfaseRoutes';
import { PicgleRoutes } from './PicgleRoutes';
import { QiitaReaderRoutes } from './QiitaReaderRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <Layout>
          <Outlet />
        </Layout>
      }
      errorElement={<Typography>error</Typography>}
    >
      <Route path="/*" element={<HomeRoutes />} />
      <Route path="qiita-reader/*" element={<QiitaReaderRoutes />} />
      <Route path="moon-pfase/*" element={<MoonPfaseRoutes />} />
      <Route path="picgle/*" element={<PicgleRoutes />} />
      <Route path="gymlog/*" element={<GymlogRoutes />} />
    </Route>,
  ),
);
