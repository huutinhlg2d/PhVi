import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';

import { ContentLayout, ShapeMovingLayout } from '@/components/Layout';

import { Home, ScrollAnimation } from '..';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<ContentLayout />} path="/">
          <Route element={<ShapeMovingLayout />}>
            <Route element={<Home />} path=""></Route>
            <Route element={<Home />} path="/home"></Route>
            <Route element={<div>Portfolio</div>} path="/portfolio"></Route>
          </Route>
          <Route element={<Outlet />}>
            <Route element={<div>About me</div>} path="/about-me"></Route>
          </Route>
        </Route>
        <Route path="/dev">
          <Route element={<ScrollAnimation />} path={'scroll'}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
