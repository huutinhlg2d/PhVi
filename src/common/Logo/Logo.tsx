import { styled } from 'styled-components';

import { ReactComponent as LogoIcon } from '@/assets/logo.svg';

export function Logo() {
  return (
    <LogoRoot>
      <LogoIcon />
    </LogoRoot>
  );
}

const LogoRoot = styled.div`
  width: 130px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
