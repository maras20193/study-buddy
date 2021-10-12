import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import MainTamplate from 'components/templates/MainTamplate/MainTamplate';
import { Wrapper } from './Root.styles';
import Dashboard from './Dashboard';

import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import UsersProvider from 'providers/UsersProvider';
import AddUser from './AddUser';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTamplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/add-user">
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTamplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
