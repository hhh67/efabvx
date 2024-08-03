import { QiitaReader } from '@/components/pages/mobile/QiitaReader/Index';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

export const QiitaReaderRoutes = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>QiitaReader</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<QiitaReader />}></Route>
      </Routes>
    </>
  );
};
