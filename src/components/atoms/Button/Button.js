import React from 'react';

import { StyledButton } from './Button.styles';
import { ReactComponent as DelateIcon } from 'assets/icons/delete-icon.svg';

const Button = () => {
  return (
    <StyledButton>
      <DelateIcon />
    </StyledButton>
  );
};

export default Button;
