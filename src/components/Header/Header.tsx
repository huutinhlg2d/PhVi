import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Logo } from '../../common/Logo';

export function Header(props: React.ComponentProps<typeof HeaderRoot>) {
  return (
    <HeaderRoot {...props}>
      <HeaderBody>
        {/* <Logo /> */}
        <Nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about-me">About me</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </Nav>
        <div></div>
      </HeaderBody>
    </HeaderRoot>
  );
}

const HeaderRoot = styled(motion.header)`
  height: var(--header-height);
  background-color: #ffffff5c;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 100;
`;

const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1236px;
  height: 42px;
  position: relative;
`;

const Nav = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 291px;
  height: 16px;
  justify-content: space-between;
`;
