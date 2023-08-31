import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export function ShapeMovingLayout() {
  return (
    <ShapeMovingLayoutRoot>
      <ShapeMovingContainer></ShapeMovingContainer>
      <Outlet />
    </ShapeMovingLayoutRoot>
  );
}

const ShapeMovingLayoutRoot = styled.div`
  width: 100%;
  height: 100%;
`;

const ShapeMovingContainer = styled.div`
  width: 1440px;
  height: 1024px;
`;
