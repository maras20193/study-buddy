import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledInfo, StyledAverage } from './UserListItem.styles';

const UsersListItem = ({
  userData: { name, average, attendence = '0%' },
  index,
  deleteUser,
}) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendence}</p>
      </StyledInfo>
      <Button onClick={() => deleteUser(name)} />
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
