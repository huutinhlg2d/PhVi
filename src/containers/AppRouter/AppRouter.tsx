import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { ContentLayout, OpacityLayout, ShapeMovingLayout } from '@/components/Layout';

import { ScrollAnimation } from '..';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<ContentLayout />} path="/*">
        <Route
          element={
            <OpacityLayout label={'layout-1'}>
              <ShapeMovingLayout />
            </OpacityLayout>
          }
        >
          <Route path="home"></Route>
          <Route path="portfolio"></Route>
        </Route>
        <Route
          element={
            <OpacityLayout label={'layout-2'}>
              <div>About me</div>
            </OpacityLayout>
          }
          path="about-me"
        ></Route>
        <Route element={<div>NOT FOUND</div>} path="*"></Route>
      </Route>
      <Route path="/dev/*">
        <Route element={<ScrollAnimation />} path={'scroll'}></Route>
      </Route>
    </Route>,
  ),
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
