import React, { FC } from 'react';

import { Wrapper } from './CenterContainer.styles';

const CenterContainer: FC = (props) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

export default CenterContainer;
