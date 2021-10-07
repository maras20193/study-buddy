import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, average, attendence = '0%' } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendence}</p>
        <button>X</button>
      </div>
    </li>
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
