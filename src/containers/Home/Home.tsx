import styled from 'styled-components';

export function Home() {
  return (
    <HomeRoot>
      <HomeContainer>
        <BlurContainer></BlurContainer>
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

const BlurContainer = styled.div`
  width: 1114px;
  height: 570px;
  flex-shrink: 0;
  border-radius: 32px;
  border: 1.5px solid #fff;
  background:
    lightgray 50% / cover no-repeat,
    linear-gradient(111deg, rgba(255, 255, 255, 0.25) 6.39%, rgba(255, 255, 255, 0) 53.34%);
  backdrop-filter: blur(50px);
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translate(-50%, 0);
`;
