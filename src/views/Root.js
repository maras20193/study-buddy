import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import MainTamplate from 'components/templates/MainTamplate/MainTamplate';
import { Wrapper } from './Root.styles';
import Dashboard from './Dashboard';

import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTamplate>
          <Wrapper>
            <Switch>
              <Route>
                <UsersList exact path="/" />
              </Route>
              <Route>
                <Dashboard path="/add-user" />
              </Route>
            </Switch>
          </Wrapper>
        </MainTamplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
