import styled from 'styled-components';

import { ComponentProps } from '@/utils/type';

import { TextFont, TextSize } from './Text.item';

export type TextRendererProps = {
  bold?: boolean;
  size?: TextSize;
  color?: string;
  font?: TextFont;
};

export type TextProps = ComponentProps<TextRendererProps>;

export const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <TextRenderer {...props} className={className}>
      {children}
    </TextRenderer>
  );
};

export const TextRenderer = styled.p<TextProps>`
  display: inline;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => (bold ? 600 : 300)};
  font-family: ${({ font }) => font};
`;

TextRenderer.defaultProps = {
  size: TextSize.small,
};
