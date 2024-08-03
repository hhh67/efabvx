import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
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
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home</title>
              </Helmet>
              <Typography>test</Typography>
            </>
          }
        ></Route>
      </Route>
    </Route>,
  ),
);
