import { ComponentProps } from 'react';
import styled from 'styled-components';

import { Text, TextFont, TextSize } from '@/common';

export const HomeTextSlide = () => {
  return (
    <HomeTextSlideRoot>
      <Line>
        <HomeText bold font={TextFont.UTMAvo} size={TextSize.large}>
          {'"'}
        </HomeText>
      </Line>
      <Line>
        <HomeText bold>Hi! I am here</HomeText> <HomeText>to help you change your</HomeText>
      </Line>
      <Line>
        <HomeText>IMAGINATION</HomeText>
      </Line>
      <Line>
        <HomeText>INTO</HomeText> <HomeText>REALITY</HomeText>
      </Line>
    </HomeTextSlideRoot>
  );
};

export type HomeTextProps = Omit<ComponentProps<typeof Text>, 'color'>;

const HomeText = (props: HomeTextProps) => {
  const { font = TextFont.SFProDisplay } = props;
  return <Text {...props} color={'#062D94'} font={font}></Text>;
};

const HomeTextSlideRoot = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
`;

const Line = styled.span`
  display: block;
`;
