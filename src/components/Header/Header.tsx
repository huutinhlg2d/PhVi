import { styled } from 'styled-components';

export function Header() {
  return <HeaderRoot></HeaderRoot>;
}

const HeaderRoot = styled.div`
  height: var(--header-height);
  width: 100%;
  position: absolute;
  z-index: 100;
`;
