import React from 'react';
import Nav from 'components/organisms/Nav/Nav';
import { Wrapper } from './MainTamplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTamplate = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTamplate;
