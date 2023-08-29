import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { Home } from '..';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path=""></Route>
          <Route element={<Home />} path="/home"></Route>
        </Route>
      </Routes>
    </Router>
  );
}
