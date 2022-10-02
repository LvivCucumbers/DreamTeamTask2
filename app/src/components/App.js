import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { useEffect } from 'react';
const People = lazy(() => import('../pages/People'));
const Planets = lazy(() => import('../pages/Planets'));
const Starships = lazy(() => import('../pages/Starships'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
      </Route>
    </Routes>
  );
};

export default App;

