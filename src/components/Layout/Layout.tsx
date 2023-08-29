import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Header } from '../Header';

export function Layout() {
  return (
    <LayoutRoot>
      <Header />
      <Outlet />
    </LayoutRoot>
  );
}

const headerVariables = css`
  --header-height: 137px;
`;

const LayoutRoot = styled.div`
  display: flex;
  ${headerVariables}
  min-height: 100vh;
  width: 100%;
`;
