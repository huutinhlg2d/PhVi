import styled from 'styled-components';

import { HomeTextSlide } from '@/components/TextSlide';

export function Home() {
  return (
    <HomeRoot>
      <HomeContainer>
        <HomeTextSlide />
      </HomeContainer>
    </HomeRoot>
  );
}

const HomeRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  box-sizing: border-box;
  /* background-color: #0026ff8b; */
  position: relative;
  width: 100%;
  min-height: 1024px;
  height: 100%;
  overflow: hidden;
`;

const HomeContainer = styled.main`
  background-color: #f1f3ff01;
  width: 1440px;
  height: 1024px;
`;
