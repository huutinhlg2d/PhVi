import { motion, Transition, VariantLabels } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useImmer } from 'use-immer';

import circleShape from '@/assets/shiny-shapes/2.png';
import cubeShape from '@/assets/shiny-shapes/6.png';
import hemisphereShape from '@/assets/shiny-shapes/9.png';
import coneShape from '@/assets/shiny-shapes/10.png';
import hexagonShape from '@/assets/shiny-shapes/11.png';
import { Home } from '@/containers/Home';
import { ShapeMovingLayoutAnimations, ShapeMovingState } from '@/models/layout/shape-moving';
import { getShapeMovingCurrentState } from '@/utils/layout/shape-moving';

import { LAYERS, layerStyles, ShapeMovingLayoutComponentProps } from './ShapeMovingLayoutItems';

export type Shapes = 'hexagon' | 'circle' | 'hemisphere' | 'cube' | 'cone';

// export type ShapeMovingAnimations = PageBaseAnimations<Shapes>;

// const shapeAnimations: ShapeMovingAnimations = {
//   home: {
//     hexagon: {
//       rotateY: 180,
//       width: 604,
//       top: 187,
//       left: -126,
//     },
//     circle: {
//       rotateZ: 17.34,
//       width: 909,
//       top: 230,
//       left: 828,
//     },
//     hemisphere: {
//       width: 181,
//       top: 213,
//       left: 903,
//       rotateY: 0,
//     },
//     cube: {
//       width: 90,
//       top: 243,
//       left: 1056,
//     },
//     cone: {
//       width: 149,
//       top: 480,
//       left: 352,
//     },
//   },
//   portfolio: {
//     hexagon: {
//       rotateY: 0,
//       width: 501.78,
//       rotateZ: -65.46,
//       top: 92.54,
//       left: 1036.54,
//     },
//     circle: {
//       width: 644.88,
//       rotateY: 180,
//       top: 191.6,
//       left: -288.64,
//     },
//     hemisphere: {
//       width: 111,
//       top: 381.44,
//       left: 476,
//       rotateY: 180,
//     },
//     cube: {
//       width: 55,
//       top: 464.44,
//       left: 589,
//       rotateY: 180,
//     },
//     cone: {
//       width: 98,
//       top: 255.44,
//       left: 895,
//       rotateX: 180,
//       rotateY: 180,
//       rotateZ: 17.69,
//     },
//   },
//   [ShapeMovingState.None]: {
//     circle: {},
//     cone: {},
//     cube: {},
//     hemisphere: {},
//     hexagon: {},
//   },
// };

const shapeAnimations = new ShapeMovingLayoutAnimations<Shapes>({
  home: {
    hexagon: {
      rotateY: 180,
      width: 604,
      top: 187,
      left: -126,
    },
    circle: {
      rotateZ: 17.34,
      width: 909,
      top: 230,
      left: 828,
    },
    hemisphere: {
      width: 181,
      top: 213,
      left: 903,
      rotateY: 0,
    },
    cube: {
      width: 90,
      top: 243,
      left: 1056,
    },
    cone: {
      width: 149,
      top: 480,
      left: 352,
    },
  },
  portfolio: {
    hexagon: {
      rotateY: 0,
      width: 501.78,
      rotateZ: -65.46,
      top: 92.54,
      left: 1036.54,
    },
    circle: {
      width: 644.88,
      rotateY: 180,
      top: 191.6,
      left: -288.64,
    },
    hemisphere: {
      width: 111,
      top: 381.44,
      left: 476,
      rotateY: 180,
    },
    cube: {
      width: 55,
      top: 464.44,
      left: 589,
      rotateY: 180,
    },
    cone: {
      width: 98,
      top: 255.44,
      left: 895,
      rotateX: 180,
      rotateY: 180,
      rotateZ: 17.69,
    },
  },
  [ShapeMovingState.None]: {
    circle: {},
    cone: {},
    cube: {},
    hemisphere: {},
    hexagon: {},
  },
});

export type Containers = 'blur';

// export type ContainerAnimations = PageBaseAnimations<Containers>

// const containerAnimations: ContainerAnimations = {
//   home: {
//     blur: {
//       width: 1114,
//       height: 570,
//     },
//   },
//   portfolio: {
//     blur: {
//       width: 1114,
//       height: 422,
//     },
//   },
//   '': { blur: {} },
// }

const containerAnimations = new ShapeMovingLayoutAnimations<Containers>({
  home: {
    blur: {
      width: 1114,
      height: 570,
      top: 170,
    },
  },
  portfolio: {
    blur: {
      width: 1114,
      height: 422,
      top: 156.44,
    },
  },
  '': { blur: {} },
});

export type ShapeMovingAnimationState = {
  labels: VariantLabels;
  state: ShapeMovingState;
  // hidden: boolean;
};

export function ShapeMovingLayout() {
  const { '*': splats } = useParams();

  // const [state, setState] = useState(true);
  const [animationState, setAnimationState] = useImmer<ShapeMovingAnimationState>(() => {
    const shapeMovingState = getShapeMovingCurrentState(splats);
    return {
      labels: [shapeMovingState],
      state: shapeMovingState,
    };
  });

  const initialShapeAnimations = useMemo(() => shapeAnimations.page(animationState.state), []);
  const initialContainerAnimations = useMemo(() => containerAnimations.page(animationState.state), []);

  const commonTransition: Transition = { duration: 0.5, repeatType: 'loop', ease: 'linear' };

  useEffect(() => {
    if (splats) {
      setAnimationState((state) => {
        const shapeMovingState = getShapeMovingCurrentState(splats);
        if (shapeMovingState !== ShapeMovingState.None) state.state = shapeMovingState;
        if (['home', 'portfolio'].includes(shapeMovingState)) {
          state.labels = shapeMovingState;
        }
      });
    }
  }, [splats]);

  const getAnimationVariantLabels = () => {
    const labels =
      typeof animationState.labels === 'string' ? [animationState.labels] : Array.from(animationState.labels);

    return labels;
  };

  const renderAllShapes = () => {
    if (initialShapeAnimations) {
      return (
        <AllShapeContainer>
          <Hexagon
            initial={initialShapeAnimations.hexagon}
            layer={LAYERS.SHAPES_TYPE_1}
            transition={commonTransition}
            variants={shapeAnimations.type('hexagon')}
          ></Hexagon>
          <Circle
            initial={initialShapeAnimations.circle}
            layer={LAYERS.SHAPES_TYPE_1}
            transition={commonTransition}
            variants={shapeAnimations.type('circle')}
          ></Circle>
          <Hemisphere
            initial={initialShapeAnimations.hemisphere}
            layer={LAYERS.SHAPES_TYPE_2}
            transition={commonTransition}
            variants={shapeAnimations.type('hemisphere')}
          />
          <Cube
            initial={initialShapeAnimations.cube}
            layer={LAYERS.SHAPES_TYPE_2}
            transition={commonTransition}
            variants={shapeAnimations.type('cube')}
          />
          <Cone
            initial={initialShapeAnimations.cone}
            layer={LAYERS.SHAPES_TYPE_2}
            transition={commonTransition}
            variants={shapeAnimations.type('cone')}
          />
        </AllShapeContainer>
      );
    } else return <></>;
  };

  const renderContent = () => {
    switch (animationState.state) {
      case ShapeMovingState.Home:
        return <Home />;
      case ShapeMovingState.Portfolio:
        return <div>PORTFOLIO</div>;
      default:
        return <Navigate to={'/home'} />;
    }
  };

  return (
    <ShapeMovingLayoutRoot>
      <DisplayContainer animate={getAnimationVariantLabels()}>
        {renderAllShapes()}
        <BlurContainer
          initial={initialContainerAnimations.blur}
          layer={LAYERS.BLUR_OVERLAY}
          variants={containerAnimations.type('blur')}
        ></BlurContainer>
        <ContentContainer layer={LAYERS.MAIN_CONTENT}>{renderContent()}</ContentContainer>
      </DisplayContainer>
    </ShapeMovingLayoutRoot>
  );
}

const ContentContainer = styled.div<ShapeMovingLayoutComponentProps>`
  ${layerStyles}
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Image = styled(motion.img)<ShapeMovingLayoutComponentProps>`
  ${layerStyles}
  position: absolute;
  background-color: #ffff007a;
  aspect-ratio: 1/1;
`;

const Hexagon = styled(Image).attrs({ src: hexagonShape })``;

const Circle = styled(Image).attrs({ src: circleShape })``;

const Hemisphere = styled(Image).attrs({ src: hemisphereShape })``;

const Cube = styled(Image).attrs({ src: cubeShape })``;

const Cone = styled(Image).attrs({ src: coneShape })``;

const BlurContainer = styled(motion.div)<ShapeMovingLayoutComponentProps>`
  ${layerStyles}
  border-radius: 32px;
  border: 1.5px solid #fff;
  background:
    lightgray 50% / cover no-repeat,
    linear-gradient(111deg, rgba(255, 255, 255, 0.25) 6.39%, rgba(255, 255, 255, 0) 53.34%);
  backdrop-filter: blur(50px) opacity(1);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

const DisplayContainer = styled(motion.div)`
  width: 1440px;
  height: 1024px;
  position: relative;
  top: 0;
`;

const AllShapeContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #ffffff88;
  position: absolute;
  top: 0;
`;

const ShapeMovingLayoutRoot = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
`;
