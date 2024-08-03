import { Home } from '@/components/pages/Home/Index/Home';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

export const HomeRoutes = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};
