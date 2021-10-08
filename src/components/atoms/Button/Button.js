import React from 'react';
import styled from 'styled-components';

import { ReactComponent as DelateIcon } from 'assets/icons/delete-icon.svg';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: #c8c7d6;
  border-radius: 50px;
  border: none;
  color: white;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = () => {
  return (
    <StyledButton>
      <DelateIcon />
    </StyledButton>
  );
};

export default Button;
