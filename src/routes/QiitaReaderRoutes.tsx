import { ErrorElement } from '@/components/common/ErrorElement';
import { QiitaReader } from '@/components/pages/QiitaReader/Index';
import { Policy } from '@/components/pages/QiitaReader/Policy';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

export const QiitaReaderRoutes = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>QiitaReader</title>
      </Helmet>
      <Routes>
        <Route path="" element={<QiitaReader />} />
        <Route path="policy" element={<Policy />} />
        <Route path="*" element={<ErrorElement />} />
      </Routes>
    </>
  );
};
