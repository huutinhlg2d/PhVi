import { ComponentProps } from 'react';
import { styled } from 'styled-components';

export function FloatingTestButton(props: ComponentProps<typeof FloatingButton>) {
  return <FloatingButton {...props}></FloatingButton>;
}

const FloatingButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 9999;
  background-color: white;
`;
