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
      errorElement={<p>error</p>}
    >
      <Route errorElement={<p>error</p>}>
        <Route path="/" element={<p>test</p>}></Route>
      </Route>
    </Route>,
  ),
);
