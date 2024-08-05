import { ErrorElement } from '@/components/common/ErrorElement';
import { MoonPfase } from '@/components/pages/MoonPfase/Index';
import { Policy } from '@/components/pages/MoonPfase/Policy';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

export const MoonPfaseRoutes = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>ムーンフェース</title>
      </Helmet>
      <Routes>
        <Route path="" element={<MoonPfase />}></Route>
        <Route path="policy" element={<Policy />}></Route>
        <Route path="*" element={<ErrorElement />} />
      </Routes>
    </>
  );
};
