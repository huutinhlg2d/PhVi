import styled from 'styled-components';

export function Home() {
  return (
    <HomeRoot>
      <HomeContainer>Home</HomeContainer>
    </HomeRoot>
  );
}

const HomeRoot = styled.div`
  padding-top: var(--header-height);
  height: 1024px;
  background-color: #f1f3ff;
  position: relative;
`;

const HomeContainer = styled.main`
  height: 1024px;
  width: 1440px;
`;
