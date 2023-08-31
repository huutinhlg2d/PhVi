import { motion, useScroll, useSpring } from 'framer-motion';
import { styled } from 'styled-components';

import { LoremIpsum } from '../../components/LoremIpsum';

export function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <ProgressBar className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <LoremIpsum />
    </>
  );
}

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: red;
  transform-origin: 0%;
`;
