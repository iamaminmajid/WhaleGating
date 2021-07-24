import React, {useState} from 'react';
// import Nav from './Nav.js';


import Notice from './Notice.js';

import MainScreen from './screens/main.js';
import TableScreen from './screens/table.js';

import logo from './logo.png'

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faCoffee, faChartPie, faTable } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(true);  

  return (
    <div className="App">
      <Router>
      <ProSidebar collapsed={collapsed} onMouseEnter={() => { setCollapsed(false) } } onMouseLeave={() => { setCollapsed(true) }}>
          
          <SidebarHeader>
              <div className="logo"><img src={logo} alt="logo"/></div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
                <MenuItem icon={<FontAwesomeIcon icon={faChartPie} />}><Link to="/">Dashboard</Link></MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faTable} />}><Link to="/table">Table</Link></MenuItem>
                
            </Menu>
          </SidebarContent>
      
      </ProSidebar>
      
      
      <Switch>

          <Route path="/table">
            <div className="main">
              <Notice />
              <TableScreen />
            </div>
          </Route>

          <Route path="/">
            <div className="main">
              <Notice />
              <MainScreen />
            </div>
          </Route>
        </Switch>
        
       
        
        
        
      </Router>
      
    </div>
  );
}

export default App;
