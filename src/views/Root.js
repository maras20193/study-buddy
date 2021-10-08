import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';

import { GlobalStyle } from 'assets/styles/globalStyles';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </>
  );
}

export default Root;
