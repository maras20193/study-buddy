import React from 'react';

import { Wrapper, Logo, StyledLink } from './Nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink>
    </Wrapper>
  );
};

export default Nav;
