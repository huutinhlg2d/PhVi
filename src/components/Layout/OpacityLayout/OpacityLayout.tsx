import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import styled from 'styled-components';

export type OpacityLayout = {
  children: ReactNode;
  label: string;
};

export function OpacityLayout({ children, label }: OpacityLayout) {
  return (
    <AnimatePresence mode="popLayout">
      <OpacityLayoutRoot
        key={label}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'linear' }}
      >
        {children}
      </OpacityLayoutRoot>
    </AnimatePresence>
  );
}

const OpacityLayoutRoot = styled(motion.div)`
  width: auto;
  height: 100%;
`;
