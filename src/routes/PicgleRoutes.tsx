import { Picgle } from '@/components/pages/Picgle/Index';
import { Policy } from '@/components/pages/Picgle/Policy';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

export const PicgleRoutes = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Picgle</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Picgle />}></Route>
        <Route path="policy" element={<Policy />}></Route>
      </Routes>
    </>
  );
};
