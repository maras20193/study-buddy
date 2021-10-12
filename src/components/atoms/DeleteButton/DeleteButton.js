import React from 'react';

import { StyledButton } from './DeleteButton.styles';
import { ReactComponent as DelateIcon } from 'assets/icons/delete-icon.svg';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <DelateIcon />
    </StyledButton>
  );
};

export default Button;
