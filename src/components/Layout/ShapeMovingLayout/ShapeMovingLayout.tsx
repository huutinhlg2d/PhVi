import { motion, Transition } from 'framer-motion';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import circleShape from '@/assets/shiny-shapes/2.png';
import cubeShape from '@/assets/shiny-shapes/6.png';
import hemisphereShape from '@/assets/shiny-shapes/9.png';
import coneShape from '@/assets/shiny-shapes/10.png';
import hexagonShape from '@/assets/shiny-shapes/11.png';
import { FloatingTestButton } from '@/common';

import { layerStyles, ShapeMovingLayoutComponentProps } from './ShapeMovingLayoutItems';

export function ShapeMovingLayout() {
  const [state, setState] = useState(true);
  const [isActivated, setActivated] = useState(true);
  const { '*': splats } = useParams();

  console.log(splats);

  const commonTransition: Transition = { duration: 1, repeatType: 'loop', ease: 'linear' };

  return (
    <ShapeMovingLayoutRoot>
      <ShapeMovingContainer animate={splats}>
        <Hexagon
          initial={{
            rotateY: 180,
            width: 604,
          }}
          transition={commonTransition}
          variants={
            isActivated
              ? {
                  home: {},
                  portfolio: { rotateY: 0, width: 501.78, rotateZ: -65.46, top: 92.54, left: 1036.54 },
                }
              : {}
          }
        ></Hexagon>
        <Circle
          initial={{
            rotateZ: 17.34,
            width: 909,
            top: 230,
            left: 828,
          }}
          transition={commonTransition}
          variants={
            isActivated
              ? {
                  home: {},
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
        <Hemisphere
          $layer={3}
          initial={{ width: 181, top: 213, left: 903, rotateY: 0 }}
          transition={commonTransition}
          variants={
            isActivated
              ? {
                  home: {},
                  portfolio: {
                    // rotateZ: 162.66,
                    width: 111,
                    top: 381.44,
                    left: 476,
                    rotateY: 180,
                  },
                }
              : {}
          }
        />
        <Cube
          $layer={3}
          initial={{
            width: 90,
            top: 243,
            left: 1056,
          }}
          transition={commonTransition}
          variants={
            isActivated
              ? {
                  home: {},
                  portfolio: {
                    width: 55,
                    top: 464.44,
                    left: 589,
                    rotateY: 180,
                  },
                }
              : {}
          }
        />
        <Cone
          $layer={3}
          initial={{
            width: 149,
            top: 480,
            left: 352,
          }}
          transition={commonTransition}
          variants={
            isActivated
              ? {
                  home: {},
                  portfolio: {
                    width: 98,
                    top: 255.44,
                    left: 895,
                    rotateX: 180,
                    rotateY: 180,
                    rotateZ: 17.69,
                  },
                }
              : {}
          }
        />
        <ContentContainer $layer={2}>
          <Outlet />
        </ContentContainer>
      </ShapeMovingContainer>
      <FloatingTestButton style={{ top: 60 }} onClick={() => setActivated(!isActivated)}>
        {`Activate: ${isActivated}`}
      </FloatingTestButton>
      <FloatingTestButton onClick={() => setState(!state)}>{`Animate: ${
        state ? 'home' : 'portfolio'
      }`}</FloatingTestButton>
    </ShapeMovingLayoutRoot>
  );
}

const ContentContainer = styled.div<ShapeMovingLayoutComponentProps>`
  ${layerStyles}
  position: absolute;
  /* background-color: rgba(12, 12, 12, 0.5); */
  width: 100%;
  height: 100%;
`;

const Image = styled(motion.img)<ShapeMovingLayoutComponentProps>`
  ${layerStyles}
  position: absolute;
  background-color: #ffff007a;
  aspect-ratio: 1/1;
`;

const Hexagon = styled(Image).attrs({ src: hexagonShape })`
  top: 187px;
  left: -126px;
`;

const Circle = styled(Image).attrs({ src: circleShape })``;

const Hemisphere = styled(Image).attrs({ src: hemisphereShape })``;

const Cube = styled(Image).attrs({ src: cubeShape })``;

const Cone = styled(Image).attrs({ src: coneShape })``;

const ShapeMovingLayoutRoot = styled.div`
  --shape-moving-container-index: 200;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ShapeMovingContainer = styled(motion.div)`
  width: 1440px;
  height: 1024px;
  /* background-color: #00800071; */
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: var(--shape-moving-container-index);
  isolation: isolate;
`;
