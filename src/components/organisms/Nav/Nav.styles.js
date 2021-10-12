import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 16px;
    right: 0;
    top: 50%;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
