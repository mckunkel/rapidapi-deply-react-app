import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import {
  TdsGlobalHeader,
  TdsGlobalFooter,
  TdsNav,
  TdsNavList,
  TdsNavItem,
} from '@trv-tds/react';
import './styles/app.scss';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import DID_Idea from './components/DID_Idea';
import Personal from './components/Personal';
import Commercial from './components/Commercial';
import carInsuranceExample from './components/CarInsurance';
import HttpExample from './components/HttpExample';

import { SocketProvider } from './socket-provider';
import SocketListener from './components/SocketListener'
let store = createStore(reducers);

function App() {

  return (
    <SocketProvider>
    <Provider store={store}>
      <BrowserRouter>
        <TdsGlobalHeader homehref="/" homelabel="Home" product="Decentralized Idenity App">
          <div slot="nav">
            <TdsNav
              variant="row"
              variant-at="lg"
              row-second-level-style="popover"
            >
              <TdsNavList>
                <TdsNavItem href="/">Home</TdsNavItem>
                <TdsNavItem>
                  <Link to="/personal">Personal</Link>
                </TdsNavItem>
                <TdsNavItem>
                  <Link to="/commercial">Commercial</Link>
                </TdsNavItem>
                {/* <TdsNavItem>
                  <Link to="/car">Car Insurance</Link>
                </TdsNavItem>
                <TdsNavItem>
                  <Link to="/http">Home Insurance</Link>
                </TdsNavItem>
                <TdsNavItem>
                  <Link to="/http">Boat Insurance</Link>
                </TdsNavItem> */}
              </TdsNavList>
            </TdsNav>
          </div>
        </TdsGlobalHeader>
        <div role="main" className="tds-body">
          <Route exact path="/" component={DID_Idea} />
          <div className="tds-container-fluid">
            <Route exact path="/personal" component={Personal} />
            <Route exact path="/commercial" component={Commercial} />
            <Route exact path="/car" component={carInsuranceExample} />
            <Route exact path="/http" component={HttpExample} />

            <SocketListener />
          </div>
        </div>
        <TdsGlobalFooter sociallinks="true"></TdsGlobalFooter>
      </BrowserRouter>
    </Provider>
  </SocketProvider>
  );
}

export default App;
