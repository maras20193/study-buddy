import React from 'react';
import Nav from 'components/organisms/Nav/Nav';
import { Wrapper } from './MainTamplate.styles';

const MainTamplate = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
};

export default MainTamplate;
