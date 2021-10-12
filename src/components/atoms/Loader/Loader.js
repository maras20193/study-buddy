import React from 'react';
import Loader from 'react-loader-spinner';
import { theme } from 'assets/styles/theme';

const StyledLoader = () => {
  return (
    <Loader type="Oval" color={theme.colors.grey} height={60} width={60} />
  );
};

export default StyledLoader;
