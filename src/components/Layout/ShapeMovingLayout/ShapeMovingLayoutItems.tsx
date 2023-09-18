import { css } from 'styled-components';

export type ShapeMovingLayoutComponentProps = {
  $layer?: number;
};

export const layerStyles = css<Pick<ShapeMovingLayoutComponentProps, '$layer'>>`
  z-index: ${({ $layer }) => ($layer ?? 1 - 1) * 100};
`;
