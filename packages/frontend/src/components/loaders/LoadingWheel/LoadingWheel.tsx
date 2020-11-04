import React, { FC } from 'react';

import { useApplicationTheme } from '../../../hooks/ApplicationTheme';
import { Wrapper } from './LoadingWheel.styles';

interface Props {
  size: number;
  color?: string;
}

const LoadingWheel: FC<Props> = (props) => {
  const { color, size } = props;

  const [{ theme }] = useApplicationTheme();

  return (
    <Wrapper color={color || theme.colors.secondary} size={size}>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

export default LoadingWheel;
