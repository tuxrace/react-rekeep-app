import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePart from './pages/CreatePart';
import Home from './pages/Home';
import Header from './components/Header';
import { Provider } from 'rekeep';
import { PartType } from './types';
import CssBaseline from '@material-ui/core/CssBaseline';

interface IStore {
  parts: PartType[]
}

function App() {
  const initialStore: IStore ={
    parts: [{name: 'a', id: 2, status: 'c'}],
  }
  return (
    <Provider store={initialStore}>
      <CssBaseline/>
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreatePart} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
