import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};

export default SearchBar;
