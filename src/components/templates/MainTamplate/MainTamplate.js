import React from 'react';
import Nav from 'components/molecules/Nav/Nav';
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
