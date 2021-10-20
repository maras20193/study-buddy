import React from 'react';
import Loader from 'react-loader-spinner';
import { theme } from 'assets/styles/theme';
import { LoaderWrapper } from './Loader.styles';

const StyledLoader = () => {
  return (
    <LoaderWrapper>
      <Loader type="Oval" color={theme.colors.grey} height={60} width={60} />
    </LoaderWrapper>
  );
};

export default StyledLoader;
