import { css } from 'styled-components';

export type ShapeMovingLayoutComponentProps = {
  layer?: number;
};

export const layerStyles = css<Pick<ShapeMovingLayoutComponentProps, 'layer'>>`
  z-index: ${({ layer }) => (layer ?? 1 - 1) * 100};
`;

export const LAYERS = {
  SHAPES_TYPE_1: 1,
  BLUR_OVERLAY: 2,
  MAIN_CONTENT: 3,
  SHAPES_TYPE_2: 4,
};