import { Gymlog } from '@/components/pages/Gymlog/Index';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

export const GymlogRoutes = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>ジムログ</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Gymlog />}></Route>
      </Routes>
    </>
  );
};
