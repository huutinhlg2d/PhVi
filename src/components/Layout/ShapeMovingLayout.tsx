import { motion, Transition } from 'framer-motion';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { css, styled } from 'styled-components';

import circleShape from '@/assets/shiny-shapes/2.png';
import cubeShape from '@/assets/shiny-shapes/6.png';
import hemisphereShape from '@/assets/shiny-shapes/9.png';
import hexagonShape from '@/assets/shiny-shapes/11.png';
import { FloatingTestButton } from '@/common';

export function ShapeMovingLayout() {
  const [state, setState] = useState(true);
  const [isActivated, setActivated] = useState(false);

  const commonTransition: Transition = { duration: 1, repeatType: 'loop', ease: 'linear' }

  return (
    <ShapeMovingLayoutRoot>
      <ShapeMovingContainer animate={state ? 'home' : 'portfolio'}>
        <Hexagon
          initial={{
            rotateY: 180,
            width: 604,
          }}
          transition={commonTransition}
          variants={
            isActivated
              ? {
                home: { rotateY: 180, width: 604 },
                portfolio: { rotateY: 0, width: 501.78, rotateZ: -65.46, top: 92.54, left: 1036.54 },
              }
              : {}
          }
        ></Hexagon>
        <Circle
          initial={{
            rotateZ: 17.34,
            width: 909,
          }}
          transition={commonTransition}
          variants={
            isActivated
              ? {
                home: { rotateZ: 17.34, width: 909, rotateY: 0 },
                portfolio: {
                  // rotateZ: 162.66,
                  width: 644.88,
                  rotateY: 180,
                  top: 191.6,
                  left: -288.64,
                },
              }
              : {}
          }
        ></Circle>
      </ShapeMovingContainer>
      <Outlet />
      <FloatingTestButton style={{ top: 60 }} onClick={() => setActivated(!isActivated)}>
        {`Activate: ${isActivated}`}
      </FloatingTestButton>
      <FloatingTestButton onClick={() => setState(!state)}>{`Animate: ${state ? 'home' : 'portfolio'
        }`}</FloatingTestButton>
    </ShapeMovingLayoutRoot>
  );
}

type ShapeMovingLayoutComponentProps = {
  $layer?: number
}

const layerStyles = css<Pick<ShapeMovingLayoutComponentProps, '$layer'>>`
  z-index: ${({ $layer }) => ($layer! - 1) * 100};
`

const ContentContainer = styled.main<ShapeMovingLayoutComponentProps>`
  ${layerStyles}
`

const Image = styled(motion.img) <ShapeMovingLayoutComponentProps>`
  ${layerStyles}
  position: absolute;
  background-color: #ffff007a;
`;

Image.defaultProps = { $layer: 1 }

const Hexagon = styled(Image).attrs({ src: hexagonShape })`
  top: 187px;
  left: -126px;
  aspect-ratio: 1/1;
`;

const Circle = styled(Image).attrs({ src: circleShape })`
  /* transform: rotateZ(17.34deg); */
  top: 230px;
  left: 828px;
  aspect-ratio: 1/1;
`;

const Hemisphere = styled(Image).attrs({ src: hemisphereShape })``

const Cube = styled(Image).attrs({ src: cubeShape })``

const ShapeMovingLayoutRoot = styled.div`
  --shape-moving-container-index: 200;

  position: relative;
  isolation: isolate;
  overflow: hidden;
`;

const ShapeMovingContainer = styled(motion.div)`
  width: 1440px;
  height: 1024px;
  background-color: #00800071;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: var(--shape-moving-container-index);
`;
