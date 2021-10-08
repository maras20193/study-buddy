import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/atoms/Button/Button';

const Wrapper = styled.li`
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

const UsersListItem = ({ userData: { name, average, attendence = '0%' } }) => {
  return (
    <Wrapper>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendence}</p>
      </div>
      <Button />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
  }),
};

export default UsersListItem;
