import 'overlayscrollbars/overlayscrollbars.css';

import { AnimatePresence } from 'framer-motion';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Header } from '../Header';

export function ContentLayout() {
  const [showHeader, setShowHeader] = useState<boolean>();

  return (
    <LayoutRoot>
      <ScrollBar
        defer
        element="div"
        events={{
          scroll: (instance, event) => {
            const scrollTop = (event.target as HTMLDivElement).scrollTop;

            setShowHeader(scrollTop <= 300);
          },
        }}
        options={{ scrollbars: { autoHide: 'scroll' } }}
        style={{ height: '100%', width: '100%', backgroundColor: 'black' }}
      >
        <AnimatePresence>
          {showHeader !== false && (
            <Header
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              initial={{ opacity: showHeader ? 0 : 1, y: showHeader ? -50 : 0 }}
            />
          )}
        </AnimatePresence>
        <Outlet />
      </ScrollBar>
    </LayoutRoot>
  );
}

const headerVariables = css`
  --header-height: 137px;
`;

const LayoutRoot = styled.div`
  display: flex;
  ${headerVariables}
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const ScrollBar = styled(OverlayScrollbarsComponent)`
  & .os-theme-dark.os-scrollbar.os-scrollbar-vertical {
    padding: 2px;
    width: 16px;
    & .os-scrollbar-track {
      & .os-scrollbar-handle {
        background: hsla(0, 0%, 100%, 0.3);
        max-height: none;
        min-height: 30px;
        border-radius: 0;
      }
    }
  }
`;
