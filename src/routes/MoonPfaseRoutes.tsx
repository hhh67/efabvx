import { MoonPfase } from '@/components/pages/MoonPfase/Index';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

export const MoonPfaseRoutes = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>ムーンフェース</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MoonPfase />}></Route>
      </Routes>
    </>
  );
};
