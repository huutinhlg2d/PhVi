import { matchPath } from 'react-router-dom';

import { ShapeMovingState } from '@/models/layout/shape-moving';
import { makeAbsolutePath } from '@/utils/path';

export const getShapeMovingCurrentState = (route: string | undefined): ShapeMovingState => {
  if (!route) return ShapeMovingState.None;

  route = makeAbsolutePath(route);

  if (matchPath('/home/*', route)) {
    return ShapeMovingState.Home;
  } else if (matchPath('/portfolio/*', route)) {
    return ShapeMovingState.Portfolio;
  }

  return ShapeMovingState.None;
};
