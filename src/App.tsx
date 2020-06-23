import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePart from './pages/CreatePart';
import Home from './pages/Home';
import Header from './components/Header';
import { Provider } from 'rekeep';
import { IStore } from './types';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as CONSTANTS from './constants';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const { ROUTES, PARTS } = CONSTANTS;

function App() {
  const initialStore: IStore = {
    [PARTS]: [],
  }
  return (
    <Provider store={initialStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.CREATE} component={CreatePart} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
