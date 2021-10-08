import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 600;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
