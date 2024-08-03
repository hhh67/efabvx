import { Typography } from '@mui/material';
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

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
      <Route errorElement={<Typography>error</Typography>}>
        <Route path="/" element={<Typography>test</Typography>}></Route>
      </Route>
    </Route>,
  ),
);
