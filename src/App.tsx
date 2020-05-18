import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CreatePart from './pages/CreatePart';
import Home from './pages/Home';
import Header from './components/Header';
import { Provider } from 'rekeep';
import { IStore } from './types';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as CONSTANTS from './constants';

const { ROUTES, PARTS } = CONSTANTS;

function App() {
  const initialStore: IStore = {
    [PARTS]: [],
  }
  return (
    <Provider store={initialStore}>
      <CssBaseline/>
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.CREATE} component={CreatePart} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
