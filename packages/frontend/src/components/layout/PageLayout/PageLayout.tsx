import React, { FC } from 'react';

import NavBar from '../NavBar';
import { Wrapper } from './PageLayout.styles';

const PageLayout: FC = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <NavBar />
      <Wrapper>{children}</Wrapper>
    </Wrapper>
  );
};

export default PageLayout;
